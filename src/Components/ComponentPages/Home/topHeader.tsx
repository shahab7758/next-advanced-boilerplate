import React from 'react'
import styles from './home.module.scss'
type Props = {}

export default function HomePageTopHeader({}: Props) {
  return (
   
        <header className={styles.topHeader}>
            <h1>
                <b>JANE BLOGLIFE</b>
            </h1>
            <h6>
                Welcome to the blog of 
                <span className={styles.authorName}>Jane's world</span>
            </h6>
        </header>
        
  )
}