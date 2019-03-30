import { Helmet } from 'react-helmet'
import { Box } from '@rebass/emotion'
import RebassMDX from '../src'
import { Layout } from './components'
import Readme from '../README.md'
import Header from './header.mdx'
import Footer from './footer.mdx'

export default Layout

<Helmet>
  <title>@rebass/mdx</title>
</Helmet>

<Header />
<Box
  p={[ 3, 3, 4 ]}
  mx='auto'
  style={{
    maxWidth: 1024,
  }}>
  <Readme />
</Box>
<Footer />
