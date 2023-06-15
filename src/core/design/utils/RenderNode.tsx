import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import styled from 'styled-components';
import { ROOT_NODE } from '@craftjs/utils';
import { IconButton, makeStyles, Tooltip, useTheme } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Toolbox } from './Toolbox';
import { renderNodeUtils } from './renderNodeUtils';

import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  ZoomOutMap as ZoomOutMapIcon,
  FilterNone as FilterNoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@material-ui/icons';
import ReactDOM from 'react-dom';

const useStyles = makeStyles((theme) => ({
  componentSelected: {
    position: 'relative',
    border: 'thin dashed blue',
  },
  indicatorIcons: {
    marginRight: theme.spacing(1),
  },
}));

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

let keysDown = {};
function titleCase(str) {
  const titleCases = {
    sms: 'SMS',
    whatsapp: 'WhatsApp',
  };

  return (
    titleCases[str.toLowerCase()] ||
    str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase())
  );
}

export const RenderNode = ({ render }) => {
  const { actions, query } = useEditor();
  const classes = useStyles();
  const theme = useTheme();
  const {
    id,
    isActive,
    isHover,
    dom,
    name,
    moveable,
    deletable,
    parent,
    actions: { setProp },
  } = useNode((node) => {
    return {
      isActive: Boolean(node.events.selected),
      isHover: node.events.hovered,
      dom: node.dom,
      name: node.data.custom.displayName || node.data.displayName,
      moveable: query.node(node.id).isDraggable(),
      deletable: query.node(node.id).isDeletable(),
      parent: node.data.parent,
      props: node.data.props,
      componentName: node.data.name,
    };
  });

  const { src, isSelected } = useEditor((state) => {
    const currentNodeId =
      typeof state.events.selected === 'string' ? state.events.selected : id;
    return {
      src: currentNodeId ? query.node(currentNodeId).get() : {},
      isSelected: Boolean(state.events.selected),
    };
  });

  const [popoverAchorEl, setPopOverAnchorEl] = useState(null);

  useEffect(() => {
    if (!isActive) setPopOverAnchorEl(null);
  }, [isActive]);

  const currentRef = useRef();
  const primaryTransparent = theme.palette.primary.main + 'DD';

  useEffect(() => {
    if (dom && id !== ROOT_NODE) {
      dom.style.position = 'relative';
      dom.style.transition = 'all 100ms ease-out';
    }
  }, [dom, isHover, isActive]);

  const getPos = useCallback(
    (dom) => dom?.getBoundingClientRect() ?? { top: 0, left: 0, bottom: 0 },
    []
  );

  const scroll = useCallback(() => {
    const currentDOM = currentRef.current as any;
    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom]);

  useEffect(() => {
    const craftRenderer = document.querySelector('.craftjs-renderer');
    craftRenderer?.addEventListener('scroll', scroll);
    return () => {
      craftRenderer?.removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  const { moveUp, moveDown, addNode, duplicateNode } = renderNodeUtils({
    isSelected,
    query,
    actions,
    src,
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSelected, moveUp, moveDown]);

  const handleKeyDown = (e) => {
    keysDown[e.key] = true;
    if (isSelected && keysDown['ArrowUp'] && keysDown['Shift']) {
      moveUp();
    } else if (isSelected && keysDown['ArrowDown'] && keysDown['Shift']) {
      moveDown();
    }
  };

  const handleKeyUp = (e) => {
    keysDown[e.key] = false;
  };

  const BorderIndicator = ({ style, name }: any) => {
    const borderLabel = `border${titleCase(name)}`;
    return (
      <IndicatorDiv
        ref={currentRef}
        style={{
          position: 'absolute',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          [`${borderLabel}Style`]: isHover || isActive ? 'solid' : null,
          [`${borderLabel}Width`]: isHover || isActive ? '2px' : null,
          boxShadow: null,
          [`${borderLabel}Radius`]: isHover || isActive ? '2px' : null,
          [`${borderLabel}Color`]:
            isHover || isActive
              ? isActive
                ? primaryTransparent
                : theme.palette.text.secondary + 'DD'
              : null,
          ...style,
        }}
      />
    );
  };

  const SideToolbar = () => {
    return (
      isActive && (
        <IndicatorDiv
          ref={currentRef}
          style={{
            right: -155,
            top: 27,
            zIndex: 1000,
            color: 'white',
            position: 'absolute',
            alignItems: 'center',
            display: 'flex',
            paddingLeft: 10,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: primaryTransparent,
            width: 'fit-content',
          }}>
          <MoveUp />
          <MoveDown />
          <SelectParent />
          <Duplicate />
          <Delete />
        </IndicatorDiv>
      )
    );
  };

  const AddContentAbove = () => {
    return isActive && id != ROOT_NODE && name !== 'Main' ? (
      <Tooltip arrow title="Add content above" placement="top">
        <IndicatorDiv
          ref={currentRef}
          style={{
            left: '42%',
            top: 7,
            zIndex: 1000,
            color: 'white',
            position: 'absolute',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: primaryTransparent,
            width: '16%',
            height: '20px',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            setPopOverAnchorEl({
              element: e.currentTarget,
              position: 'top',
              targetNode: (src as any).data.parent,
            });
            if (name === 'Text') {
              setProp((props) => {
                props.props.hideToolbar = true;
              });
            }
          }}>
          <AddIcon />
        </IndicatorDiv>
      </Tooltip>
    ) : null;
  };

  const AddContentBelow = () => {
    return isActive && id != ROOT_NODE && name !== 'Main' ? (
      <Tooltip arrow title="Add content below">
        <IndicatorDiv
          ref={currentRef}
          style={{
            left: '42%',
            bottom: '-20px',
            zIndex: 1000,
            color: 'white',
            position: 'absolute',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: primaryTransparent,
            width: '16%',
            height: '20px',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            setPopOverAnchorEl({
              element: e.currentTarget,
              position: 'bottom',
              targetNode: (src as any).data.parent,
            });
            if (name === 'Text') {
              setProp((props) => {
                props.props.hideToolbar = true;
              });
            }
          }}>
          <AddIcon />
        </IndicatorDiv>
      </Tooltip>
    ) : null;
  };

  const MoveUp = () => {
    return moveable ? (
      <Tooltip arrow title={'Move Up (Shift + ↑)'}>
        <IconButton
          className={classes.indicatorIcons}
          size="small"
          onClick={moveUp}>
          <ArrowUpwardIcon />
        </IconButton>
      </Tooltip>
    ) : null;
  };

  const MoveDown = () => {
    return moveable ? (
      <Tooltip arrow title={'Move Down (Shift + ↓)'}>
        <IconButton
          className={classes.indicatorIcons}
          size="small"
          onClick={moveDown}>
          <ArrowDownwardIcon />
        </IconButton>
      </Tooltip>
    ) : null;
  };

  const SelectParent = () => (
    <Tooltip arrow title={'Select Parent'}>
      <IconButton
        className={classes.indicatorIcons}
        size="small"
        onClick={() => {
          try {
            let parentNode = query.node(parent).get();
            while (
              parentNode &&
              parentNode['data'] &&
              parentNode['data']['parent'] &&
              !parentNode['dom']
            ) {
              parentNode = query.node(parentNode['data']['parent']).get();
            }
            if (parentNode && parentNode['dom']) {
              actions.selectNode(parentNode.id);
            }
          } catch (err) {
            return;
          }
        }}>
        <ZoomOutMapIcon />
      </IconButton>
    </Tooltip>
  );

  const Duplicate = () => (
    <Tooltip arrow title={'Duplicate'}>
      <IconButton
        className={classes.indicatorIcons}
        size="small"
        onClick={duplicateNode}>
        <FilterNoneIcon />
      </IconButton>
    </Tooltip>
  );

  const Delete = () => {
    return deletable ? (
      <Tooltip arrow title={'Delete'}>
        <IconButton
          className={classes.indicatorIcons}
          size="small"
          onClick={() => {
            actions['delete'](id);
          }}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    ) : null;
  };

  return (
    <>
      {(isHover || isActive) && id !== ROOT_NODE
        ? ReactDOM.createPortal(
            <>
              <SideToolbar />
              <AddContentAbove />
              <AddContentBelow />
              {BorderIndicator({
                top: 27,
                left: 0,
                width: '100%',
                height: 0,
                name: 'top',
              })}
              {BorderIndicator({
                bottom: 0,
                left: 0,
                width: '100%',
                height: 0,
                name: 'bottom',
              })}
              {BorderIndicator({
                top: 27,
                bottom: 0,
                left: 0,
                width: 0,
                height: '100%',
                name: 'left',
              })}
              {BorderIndicator({
                top: 27,
                right: 0,
                width: 0,
                height: '100%',
                name: 'right',
              })}
              <Toolbox
                anchorEl={
                  isSelected && popoverAchorEl ? popoverAchorEl.element : null
                }
                origin={popoverAchorEl ? popoverAchorEl.position : 'top'}
                onClose={() => {
                  setPopOverAnchorEl(null);
                }}
                onClick={(val) => {
                  addNode({ ...val, trg: popoverAchorEl.targetNode });
                  setPopOverAnchorEl(null);
                }}
              />
            </>,
            dom
          )
        : null}
      {render}
    </>
  );
};
