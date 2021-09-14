import Link from 'next/link'
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

export function ActiveLink({ children, activeClassName, ...rest }) {

  const router = useRouter();


  const className = router.asPath === rest.href ? activeClassName: '';

 
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}