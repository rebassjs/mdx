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
  }
}

const styles = {
  wrapper: {
    color: 'tomato',
  },
  h1: {
    fontSize: [5, 6],
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    mt: 4,
    mb: 4,
  },
  strong: {
    fontWeight: 'bold',
  }
}
export const base = {
  theme,
  styles,
}
