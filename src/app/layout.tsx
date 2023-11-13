import type { Metadata } from 'next'
import { Header } from '@/components/header'
import './globals.css'
import localFont from "next/font/local"

const bromny = localFont({
  variable: "--font-bromny",
  src: [
    {
      path: '../fonts/FontsFreeNetBROmnyBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/FontsFreeNetBROmnyRegular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/FontsFreeNetBROmnyLight.woff2',
      weight: '300',
      style: 'normal'
    }
  ]

})

export const metadata: Metadata = {
  title: 'Colisão de Terceiros',
  description: 'Colisão de Terceiros foi desenvolvido para os nosso assegurados Loovi está envolvido a um acidente e necessita que envie as fotos do veiculo na qual bateu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${bromny.variable}`}>
          <Header/>
          {children}
        </body>
    </html>
  )
}