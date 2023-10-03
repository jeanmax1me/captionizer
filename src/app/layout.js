import './globals.css'
import { Inter } from 'next/font/google'
import Sparkles from './components/sparkles'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Captionizer',
  description: 'Automatic video captions for Creators',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " gradient-bg"}>
      <main className="p-4 max-w-4xl mx-auto text-white">
      <header className="flex justify-between my-8">
      <Link className="flex flex-row font-bold text-xl" href="/">
        <Sparkles />
        Captionizer</Link>
      <nav className="flex gap-6 text-white/90">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="https://twitter.com/JeanMax1me">Contact</Link>
      </nav>
    </header>
        {children}
        </main>
        </body>
    </html>
  )
}
