import React from 'react'
import {
  ComponentProvider,
  Styled
} from 'emotion-mdx'
import css from '@styled-system/css'
import * as Rebass from '@rebass/emotion'
import { base } from './themes'

export { useComponents, Styled } from 'emotion-mdx'

export const components = {
  ...Rebass,
}

export const RebassMDX = props =>
  <ComponentProvider
    {...props}
    transform={css}
  />

RebassMDX.defaultProps = {
  components,
  theme: base.theme,
  styles: base.styles,
}

RebassMDX.props = defaults => props =>
  <RebassMDX
    {...defaults}
    {...props}
  />

const comp = tag => React.forwardRef((props, ref) =>
  <Styled
    {...props}
    ref={ref}
    tag={tag}
  />
)

export const Box = comp('Box')
export const Flex = comp('Flex')
export const Text = comp('Text')
export const Heading = comp('Heading')
export const Button = comp('Button')
export const Link = comp('Link')
export const Image = comp('Image')
export const Card = comp('Card')

export default RebassMDX
