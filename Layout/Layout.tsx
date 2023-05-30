import Footer from '@/components/defaultLayout/Footer'
import Header from '@/components/defaultLayout/Header'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
