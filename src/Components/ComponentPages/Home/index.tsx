import React from 'react'
import style from './home.module.scss'
import HomePageTopHeader from './topHeader'
type Props = {}

export default function Home({}: Props) {
  return (
    <div className={style.homePageContainer}>
    <HomePageTopHeader/>    
        Home
        
    </div>
  )
}