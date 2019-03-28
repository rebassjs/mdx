import { Helmet } from 'react-helmet'
import {
  RebassMDX,
  Styled,
  Box,
} from '../src'
import Readme from '../README.md'

export default props =>
  <RebassMDX wrap>
    {props.children}
  </RebassMDX>

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
  - `theme.styles` override component styles
- `components` override specific components or add custom components to code fence examples

[Rebass theme]: https://rebassjs.org/theming
