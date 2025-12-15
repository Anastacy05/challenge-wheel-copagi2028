import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

// Police élégante pour le titre
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

// Police pour le corps de texte
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

// Métadonnées pour le SEO
export const metadata: Metadata = {
  title: 'La Roue du Destin - Mystère & Séduction',
  description: 'Ose tourner la roue et découvre ton gage mystérieux...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
