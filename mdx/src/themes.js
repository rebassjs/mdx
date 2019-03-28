const styles = {
  wrapper: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  h1: {
    fontSize: [5, 6],
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    mt: 4,
    mb: 4,
  },
  h2: {
    fontSize: [4, 5],
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    mt: 4,
    mb: 4,
  },
  h3: {
    fontSize: 3,
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    mt: 4,
    mb: 4,
  },
  h4: {
    fontSize: 2,
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    mt: 4,
    mb: 4,
  },
  h5: {
    fontSize: 1,
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    mt: 4,
    mb: 4,
  },
  h6: {
    fontSize: 0,
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    mt: 4,
    mb: 4,
  },
  strong: {
    fontWeight: 'bold',
  },
  styles,
}

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  styles,
}


export const base = {
  ...theme,
}
