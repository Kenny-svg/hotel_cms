import Header from '@/components/defaultLayout/Header'
import Footer from '@/components/defaultLayout/Footer'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
