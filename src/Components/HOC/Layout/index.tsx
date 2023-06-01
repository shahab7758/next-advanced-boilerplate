import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import React from 'react'



export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}