import React from 'react';
import { ROOT_NODE, useEditor } from '@craftjs/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  settings: {
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '370px',
    height: 'auto',
  },
}));

export function RightPanel({ ...rest }) {
  const classes = useStyles();
  const { actions, query, selected, rootNode } = useEditor((state, query) => {
    const currentNodeSet = state.events.selected;
    console.log(state.nodes);
    // const currentNodeId = typeof state.events.selected === 'string' ? state.events.selected : null;
    let selected;
    if (currentNodeSet && currentNodeSet.size > 0) {
      const currentNodeId = Array.from(currentNodeSet)[0];
      const customName = query.node(currentNodeId).get().data
        .custom.displayName;
      const name = query.node(currentNodeId).get().data.displayName;
      selected = {
        id: currentNodeId,
        name: customName || name,
        settings: state.nodes[currentNodeId].related?.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected: selected,
      rootNode: state.nodes[ROOT_NODE],
    };
  });

  const BodySettings =
    rootNode && rootNode.related && rootNode.related.settings ? (
      React.createElement(rootNode.related.settings)
    ) : (
      <></>
    );

  console.log('here', selected);

  return (
    <Box pb={2} mt={1}>
      <Box display="flex" alignItems="center" ml={2} mb={2} mt={2}>
        <Typography variant="h4">
          {selected ? selected.name : 'Body'} Settings
        </Typography>
      </Box>
      <Divider />
      <div className={classes.settings}>
        {selected && selected.settings ? (
          <>{React.createElement(selected.settings)}</>
        ) : (
          <>{BodySettings}</>
        )}
      </div>
    </Box>
  );
}
