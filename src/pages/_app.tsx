import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme } from '../theme'
import {
  Box,
  Flex,
  ThemeProvider,
  Grid,
  Link,
} from 'theme-ui'
import { SiGithub, SiNpm } from 'react-icons/si'
import { GITHUB_REPO_URL, NPM_PACKAGE_URL } from '../config'
import { FooterLink } from '../components/FooterLink'
import { HeaderLink } from '../components/HeaderLink'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>GhostUI</title>
      </Head>
      <Flex
        sx={{
          minHeight: '100vh',
          flexDirection: 'column',
        }}>
        <Flex
          as="nav"
          p="3"
          sx={{
            alignItems: 'center',
          }}>
          <HeaderLink href="/">GhostUI</HeaderLink>
          <Box marginLeft="auto">
            <HeaderLink href={GITHUB_REPO_URL}>Github</HeaderLink>
          </Box>
        </Flex>

        <Box
          sx={{
            flex: '1 1 auto',
            p: 3,
          }}>
            <Component {...pageProps} />
        </Box>
        <Box p="3">
          <Flex sx={{ justifyContent: 'center' }}>
            <Grid columns={['1fr 1fr']}>
              <FooterLink href={GITHUB_REPO_URL}>
                <SiGithub />
              </FooterLink>
              <FooterLink href={NPM_PACKAGE_URL}>
                <SiNpm />
              </FooterLink>
            </Grid>
          </Flex>
        </Box>
      </Flex>
    </ThemeProvider>
  )
}
export default MyApp
