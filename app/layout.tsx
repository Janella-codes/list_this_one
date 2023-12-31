{/*import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  metadataBase: new URL('https://postgres-prisma.vercel.app'),
  title: 'Vercel Postgres Demo with Prisma',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
} */}

import { Inter } from 'next/font/google'
import './globals.css'
import Button from '@/components/button'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <ClerkProvider>
      <html lang="en">
      <body className={inter.variable}>{children}</body>
      
      </html>
    </ClerkProvider>
  )
}