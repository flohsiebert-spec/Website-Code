import type { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import './legal.css'

interface LegalLayoutProps {
  title: string
  children: ReactNode
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="container legal__container">
          <h1 className="legal__title">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
