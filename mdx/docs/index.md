import { Helmet } from 'react-helmet'
import {
  RebassMDX,
  Styled,
  Box,
} from '../src'
import Readme from '../README.md'

```
export default props =>
  <RebassMDX>
    <Box p={4}>
      {props.children}
    </Box>
  </RebassMDX>
```

export default RebassMDX.props({
  styles: {
    wrapper: {
      outline: '4px solid magenta',
    }
  }
})

<Helmet>
  <title>@rebass/mdx</title>
</Helmet>

<Readme />

---

## Usage

```jsx
import React from 'react'
import RebassMDX from '@rebass/mdx'
import Document from './document.mdx

export default props =>
  <RebassMDX>
    <Document />
  </RebassMDX>
```

### Props

- `theme` add a custom [Rebass theme][]
- `components` override specific components or add custom components to code fence examples
- `styles` override component styles

[Rebass theme]: https://rebassjs.org/theming
