
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollDirectionButton from './components/ScrollDirectionButton'
import Sidebar from './components/Sidebar'
import Testimonials from './components/Testimonials'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Services from './pages/Services'
import Skills from './pages/Skills'

function App() {

  return (
    <>
  <Sidebar/>
  <Home />
  <Navbar/>
  <ScrollDirectionButton />
  <About />
  <Skills/>
  <Resume />
  <Projects />
  <Services />
  <Testimonials/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default App
