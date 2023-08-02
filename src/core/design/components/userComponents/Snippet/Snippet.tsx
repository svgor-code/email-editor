import { useNode } from '@craftjs/core';
import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';

import { SnippetDefaultProps, SnippetSettings } from './SnippetSettings';

export function Snippet({ props, parentStyle, style, ...rest }) {
  const {
    id,
    connectors: { connect, drag },
  } = useNode();

  useEffect(() => {
    console.log('use effect');
  }, []);

  console.log(id);

  return (
    <Grid item xs={12} ref={connect} style={parentStyle}>
      <Grid item xs={12} id={id}>123</Grid>
    </Grid>
  );
};

Snippet.craft = {
  props: SnippetDefaultProps,
  related: {
    settings: SnippetSettings,
  },
  displayName: 'Html Box',
  rules: {
    canMoveIn: () => false,
  },
};
