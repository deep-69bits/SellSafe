import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout/Layout'

export const metadata: Metadata = {
  title: 'Sell Safe ',
  description: 'India’s First Trusted Reselling Platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  )
}
