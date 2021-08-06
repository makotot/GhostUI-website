import { Link as UILink } from 'theme-ui'
import Link from 'next/link'
import * as React from 'react'

export const BoxLink: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <UILink
        bg="black"
        sx={{
          padding: '4',
          color: 'white',
          textAlign: 'center',
          textDecoration: 'none',
          ':hover': {
            bg: 'primary',
          },
        }}>
        {children}
      </UILink>
    </Link>
  )
}
