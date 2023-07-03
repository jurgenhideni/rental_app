import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: ReactNode
  title: string
  description: string
  url?: string
}

export default function Layout({ children, title, description, url }: Props) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical='https://carrentalalbania.com'
        openGraph={{
          url: `https://carrentalalbania.com${url}`,
          title,
          description,
          siteName: 'Car Rental Albania',
        }}
      />
      <div className={clsx(inter.className, 'container mx-auto')}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
