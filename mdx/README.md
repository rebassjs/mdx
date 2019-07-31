
**DEPRECATED** See https://theme-ui.com

# Rebass MDX

⚛️#️⃣ MDX + Styled System + Emotion

```sh
npm i @rebass/mdx
```

Wrap your application with the `RebassMDX` provider component.
All child MDX documents will receive component and theming context from this provider.

```jsx
import React from 'react'
import RebassMDX from '@rebass/mdx'
import Document from './document.mdx

export default props =>
  <RebassMDX>
    <Document />
  </RebassMDX>
```

## Theming

Pass a `theme` object to the `RebassMDX` provider component to add an Emotion theming context.
The theme is a [Styled System Theme][] that can be used to apply consistent colors and typography across an entire app.

```js
// example theme
export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
}
```

## Styles

An additional `styles` object can be added to the `theme` object to apply styles to MDX elements.

```js
// example theme styles
export default {
  colors: {
    primary: 'tomato',
  },
  styles: {
    h1: {
      color: 'primary',
    }
  },
}
```

The `styles` object uses [@styled-system/css][] so that core Styled System props can be mixed with CSS syntax.

```js
// example theme styles
export default {
  colors: {
    primary: 'tomato',
  },
  styles: {
    h1: {
      // using Styled System props
      fontSize: [ 4, 5 ],
      fontFamily: 'heading',
      color: 'primary',
      // alongside other CSS
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    }
  }
}
```

## Built-in Themes

Rebass MDX includes a handful of built-in themes that can be used out-of-the-box or as a basis for extending into a custom theme.

```js
import React from 'react'
import { RebassMDX } from '@rebass/mdx'
import themes from '@rebass/mdx/themes'

export default props =>
  <RebassMDX theme={themes.base}>
    {props.children}
  </RebassMDX>
```

- `base`: the default theme
- `future`: theme with Avenir Next
- `dark`: dark mode theme

## Custom Components

Custom MDX components can be added to context.
This can be useful for adding syntax highlighting, live code editors, or linked headings.

```js
import React from 'react'
import { RebassMDX } from '@rebass/mdx'
import Link from './Link'

export default props =>
  <RebassMDX
    components={{
      a: Link,
    }}>
  </RebassMDX>
```

Any component can be added to context to apply theming with the `RebassMDX` provider.
These components can be rendered with the [`Styled`](#styled-components) component.

## Styled Components

For usage outside of an MDX file, use the `Styled` component to render styled components anywhere in your app.
These components can be styled using the theme and the `theme.styles` object.

```js
import React from 'react'
import { Styled } from '@rebass/mdx'

export default props =>
  <Styled.wrapper>
    <Styled.h1>
      Hello
    </Styled.h1>
  </Styled.wrapper>
```

For custom components, use the `tag` prop.

```js
import React from 'react'
import { Styled } from '@rebass/mdx'

export default props =>
  <Styled.wrapper>
    <Styled tag='CustomComponent'>
      Hello
    </Styled>
  </Styled.wrapper>
```

## `useComponents` Hook

Alternatively, Rebass MDX components can be accessed by using the `useComponents` hook.

```jsx
import React from 'react'
import { useComponents } from '@rebass/mdx'

export default props => {
  const Styled = useComponents()

  return (
    <Styled.h1>
      Hello
    </Styled.h1>
  )
}
```

## Nesting Providers

The `RebassMDX` component can be nested to change styles contextually.
This can be useful for styling sections of a page differently where needed.

```jsx
// example root-level provider
import React from 'react'
import RebassMDX from '@rebass/mdx'

export default props =>
  <RebassMDX>
    {props.children}
  </RebassMDX>
```

```jsx
// example nested provider for style overrides
import React from 'react'
import RebassMDX, { Styled } from '@rebass/mdx'

export default props =>
  <RebassMDX
    theme={{
      styles: {
        h1: {
          fontSize: 3,
        }
      }
    }}>
    <Styled.h1>Hello</Styled.h1>
  </RebassMDX>
```

## API

- `RebassMDX`: core provider component
  - props:
    - `theme` add a custom [Styled System Theme][]
      - `theme.styles` override component styles
    - `components` override specific components or add custom components to code fence examples
- `Styled`
- `useComponents`

<!--
- RebassMDX.props()
- wrap prop
-->

MIT License

[Rebass theme]: https://rebassjs.org/theming
[styled system theme]: https://styled-system.com/theme-specification
[@styled-system/css]: https://styled-system.com/css
