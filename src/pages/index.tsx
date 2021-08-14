import * as React from 'react'
import { Box, Flex, Heading, Paragraph, Grid, Message } from 'theme-ui'
import { BoxLink } from '../components/BoxLink'

function App() {
  return (
    <div>
      <Grid paddingY="5">
        <Heading as="h1">GhostUI</Heading>
        <Paragraph>React headless componenet collection.</Paragraph>
        <Flex>
          <Message>$ npm i @makotot/ghostui</Message>
        </Flex>
      </Grid>

      <Box paddingTop="4">
        <Heading as="h2">Collection</Heading>
        <Box paddingTop="4">
          <Grid gap="3" columns={[null, '1fr 1fr 1fr']}>
            <BoxLink href="/Scrollspy">Scrollspy</BoxLink>
            <BoxLink href="/ReadingProgress">Reading Progress</BoxLink>
            <BoxLink href="/Pagination">Pagination</BoxLink>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default App
