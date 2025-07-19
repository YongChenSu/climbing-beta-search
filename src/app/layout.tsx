import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Climbing Beta Taiwan',
  description: '台灣攀岩館路線 Beta 影片彙集網站',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <header className="bg-climbing-blue text-white p-4">
          <h1 className="text-2xl font-bold">攀岩 Beta 彙集</h1>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}