import Footer from '@/components/defaultLayout/Footer'
import Header2 from '@/components/defaultLayout/HomeComponents/Header2'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout2 = ({ children }: Props) => {
  return (
    <div>
      <Header2 />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout2
