import React from 'react'
import RebassMDX, { Styled } from '../src'

export default props =>
  <RebassMDX
    theme={{
      styles: {
        h1: {
          fontSize: 3,
          color: 'tomato',
        }
      }
    }}>
    <Styled.h1>Hello</Styled.h1>
  </RebassMDX>
