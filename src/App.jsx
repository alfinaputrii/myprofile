import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container-wrap">
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App
