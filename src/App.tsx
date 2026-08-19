import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sortiment } from './components/Sortiment'
import { Visit } from './components/Visit'

function App() {
  // When arriving from another page (e.g. Impressum) with a section hash in
  // the URL, the browser tries to jump to it before React has rendered
  // anything. Do it ourselves once mounted.
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Sortiment />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
