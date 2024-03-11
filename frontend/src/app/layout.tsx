import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: 'Title Goes Here',
  description: 'description goes here',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
  return (
    <html data-theme="retro" lang="en">
      <body>{children}</body>
    </html>
  )
}
