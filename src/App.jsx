import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </div>
  )
}
