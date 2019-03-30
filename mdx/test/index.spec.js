import React from 'react'
import mdx from '@mdx-js/mdx/create-element'
import { useMDXComponents } from '@mdx-js/react'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import RebassMDX from '../src'

expect.extend(matchers)

const Hello = props => {
  const { h1 } = useMDXComponents()
  return mdx(h1, props, 'Hello')
}

test('renders', () => {
  const json = renderer.create(
    mdx(RebassMDX, null,
      mdx(Hello)
    )
  ).toJSON()
  expect(json).toHaveStyleRule('font-size', '32px')
  expect(json).toHaveStyleRule('font-family', 'inherit')
  expect(json).toHaveStyleRule('font-weight', '700')
  expect(json).toMatchSnapshot()
})

test('renders with wrapper', () => {
  const json = renderer.create(
    mdx(RebassMDX, { wrap: true },
      mdx(Hello)
    )
  ).toJSON()
  expect(json.type).toBe('div')
  expect(json).toMatchSnapshot()
})
