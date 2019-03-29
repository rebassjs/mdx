import merge from 'lodash.merge'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 4,
  mb: 4,
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}

const styles = {
  wrapper: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    color: 'text',
    bg: 'background',
  },
  h1: {
    fontSize: [5, 6],
    ...heading,
  },
  h2: {
    fontSize: [4, 5],
    ...heading,
  },
  h3: {
    fontSize: 3,
    ...heading,
  },
  h4: {
    fontSize: 2,
    ...heading,
  },
  h5: {
    fontSize: 1,
    ...heading,
  },
  h6: {
    fontSize: 0,
    ...heading,
  },
  a: {
    color: 'primary',
    '&:hover': {
      color: 'secondary',
    }
  },
  p: {
    mt: 0,
    mb: 4,
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  strong: {
    fontWeight: 'bold',
  },
  inlineCode: {
    fontFamily: 'monospace',
    fontSize: '87.5%',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: '87.5%',
  },
  pre: {
    overflowX: 'auto',
  }
}

export const base = {
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
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
  },
  styles,
}

export const future = {
  colors: {
    ...base.colors,
  },
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
  },
  styles: merge({}, styles, {
    h1: {
      fontSize: [5],
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  })
}

export const dark = {
  colors: {
    text: '#fff',
    background: '#000',
    primary: '#0cf',
    secondary: '#0fc',
  },
  styles: merge({}, styles, {
    code: {
      color: 'secondary',
    },
    inlineCode: {
      color: 'secondary',
    }
  })
}

export default {
  base,
  future,
  dark,
}
