import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthProvider from './context/NextAuthProvider'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextAuth.js Demo App',
  description: 'A demo of NextAuth.js in a Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="ml-3 text-xl font-semibold text-gray-800"><Link href="/">NextAuth.js Demo</Link></h1>
              </div>
              <nav className="space-x-4">
                <Link className="text-gray-800 hover:text-blue-500" href="/server">
                  Server
                </Link>
                <Link className="text-gray-800 hover:text-blue-500" href="/client">
                  Client
                </Link>
                <Link className="text-gray-800 hover:text-blue-500" href="/admin">
                  Admin
                </Link>
              </nav>
            </div>
          </header>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
        </div>

        </body>
    </html>
  )
}
