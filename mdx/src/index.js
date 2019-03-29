import React from 'react'
import {
  ComponentProvider,
  Styled
} from 'emotion-mdx'
import css from '@styled-system/css'
import { base } from './themes'

export { useComponents, Styled } from 'emotion-mdx'

export const RebassMDX = ({
  wrap,
  ...props
}) => {
  const children = wrap ? (
    <Styled.wrapper>
      {props.children}
    </Styled.wrapper>
  ) : props.children

  return (
    <ComponentProvider
      {...props}
      transform={css}
      children={children}
    />
  )
}

RebassMDX.defaultProps = {
  theme: base,
}

RebassMDX.props = defaults => props =>
  <RebassMDX
    {...defaults}
    {...props}
  />

export default RebassMDX
