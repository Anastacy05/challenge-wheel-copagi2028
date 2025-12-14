import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Configuration de la police Google Fonts
const inter = Inter({ subsets: ['latin'] })

// Métadonnées pour le SEO
export const metadata: Metadata = {
  title: 'Roue à Gages',
  description: 'Lance la roue et découvre ton gage !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}