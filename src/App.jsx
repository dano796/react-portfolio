import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    document.title = "DOA Portfolio"
  }, [])

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-indigo-300 selection:text-neutral-900">
      <div className="fixed top-0 -z-10 h-full- w-full inset-0">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App