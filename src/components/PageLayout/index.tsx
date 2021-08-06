import Link from 'next/link'
import * as React from 'react'
import { Flex, Link as UILink, Box, Grid, Heading, Paragraph } from 'theme-ui'
import { CodeSandbox } from '../CodeSandbox'
import { GITHUB_REPO_URL } from '../../config'
import { SiGithub } from 'react-icons/si'

export const PageLayout= ({
  title,
  sourcePath,
  description,
  codeSandboxPath,
}: {
  title: string;
  sourcePath: string;
  description: string,
  codeSandboxPath: string;
}) => {
  return (
    <Grid paddingY="5">
      <Flex sx={{
        columnGap: 2,
        alignItems: 'center'
      }}>
        <Heading>{title}</Heading>
        <Link href={`${GITHUB_REPO_URL}${sourcePath}`} passHref>
          <UILink sx={{
            color: 'primary',
            display: 'inline-block',
          }}>
            <SiGithub />
          </UILink>
        </Link>
      </Flex>
      <Paragraph>{description}</Paragraph>
      <Box>
        <CodeSandbox path={`${codeSandboxPath}`} title="ReadingProgress" />
      </Box>
    </Grid>
  )
}
