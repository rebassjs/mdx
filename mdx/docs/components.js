import React from 'react'
import SyntaxHighligher from 'react-syntax-highlighter'
import { monokai as style } from 'react-syntax-highlighter/dist/styles/hljs'
import RebassMDX from '../src'
import themes from '../src/themes'

const languages = {
  sh: 'shell',
  js: 'javascript',
  // jsx: 'javascript',
}

const code = props => {
  if (props.live) {
    return <pre>live TK</pre>
  }
  const classnames = props.className.split(' ')
  const language = classnames.reduce((a, cn) => {
    if (!cn.includes('language-')) return a
    const name = cn.replace(/^language\-/, '')
    return languages[name] || name
  }, null)

  return (
    <SyntaxHighligher
      className={props.className}
      language={language}
      style={style}
      customStyle={{
        padding: 16,
      }}
      children={props.children}
    />
  )
}

const heading = Tag => ({
  id,
  children,
  ...props
}) =>
  <Tag id={id} {...props}>
    <a href={'#' + id}>
      {children}
    </a>
  </Tag>

export const components = {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  pre: props => props.children,
  code,
}

export const theme = {
  // ...themes.future,
  styles: {
    inlineCode: {
      fontFamily: 'monospace',
      fontSize: '100%',
      color: 'secondary',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 16,
      borderRadius: 8,
    }
  }
}


export const Layout = props =>
  <RebassMDX>
    <RebassMDX
      wrap
      components={components}
      theme={theme}>
      {props.children}
    </RebassMDX>
  </RebassMDX>

export default () => false
