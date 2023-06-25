import React from 'react'
import Link from 'next/link'

type Props = {}

const Nav = (props: Props) => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/one">one</Link>
        </li>
        <li>
          <Link href="/two">two</Link>
        </li>
      </ul>
    </header>
  )
}

export default Nav
