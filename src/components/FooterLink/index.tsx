import { Link } from 'theme-ui'

export const FooterLink: React.FC<{href: string}> = ({href, children}) => {
  return <Link href={href} style={{fontSize: '1.25rem'}}>{children}</Link>
}
