import Header from '@/Components/Header/page'
import './globals.css'

import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/page'
import Layout from '@/Components/HOC/Layout'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <Layout>
     {children}
    </Layout>
    </html>
  )
}
