import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'MoneyKeeper | Главная',
  description: 'MoneyKeeper поможет приумножить!'
}

// TODO: add i18n?

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${inter.variable} font-sans`}>
        <Nav />
        <main className='max-w-screen-xl mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
