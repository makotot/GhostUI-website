import Link from 'next/link'
import {
  NavLink,
} from 'theme-ui'

export const HeaderLink: React.FC<{href: string}> = ({href, children}) => {
  return (
    <Link href={href} passHref>
      <NavLink>
        {children}
      </NavLink>
    </Link>
  )
}