import React from 'react'
import style from './header.module.scss'
type Props = {}

export default function Header({}: Props) {
  return (
    <main className={style.headerContainer}>
        <nav>
            <ul>
                <li><a href="/">facebook<i className='icon-facebook2'/></a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </main>
  )
}