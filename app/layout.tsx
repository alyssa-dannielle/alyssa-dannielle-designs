import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Alyssa Dannielle's Designs",
  description: 'browse free crochet patterns, become a pattern tester, buy pattern pdfs, shop already made items',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="main">{children}</div></body>
    </html>
  )
}
