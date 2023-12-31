import { Toaster } from '@shadui/toaster'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import NavBar from 'src/components/nav-bar'
import 'ui/styles/globals.css'
import './globals.css'

const fontBase = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'therealryanphan',
  description: 'Generated by create turbo with love'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontBase.className}>
        <Toaster />
        <NavBar className="border-b border-gray-300 bg-white" />
        <main className="mx-auto w-full max-w-5xl sm:p-4">{children}</main>
      </body>
    </html>
  )
}
