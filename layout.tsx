import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HealTale - Where confidence, cosmetics, and science connect',
  description: 'A creative mental wellness platform made for every girl who wants to understand herself more — through stories, science, and skincare.',
  keywords: 'mental wellness, skincare, confidence, science, cosmetics, self-care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
