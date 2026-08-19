import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sortiment } from './components/Sortiment'
import { Visit } from './components/Visit'

function App() {
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
