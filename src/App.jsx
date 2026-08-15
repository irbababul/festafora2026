import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Competitions from './components/Competitions'
import Webinar from './components/Webinar'
import Timeline from './components/Timeline'
import Twibbon from './components/Twibbon'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ImageModal from './components/ImageModal'

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    title: ''
  })

  const openModal = (imageSrc, title) => {
    setModalState({ isOpen: true, imageSrc, title })
  }

  const closeModal = () => {
    setModalState({ isOpen: false, imageSrc: '', title: '' })
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Competitions onOpenModal={openModal} />
      <Webinar onOpenModal={openModal} />
      <Timeline />
      <Twibbon />
      <FAQ />
      <Footer />
      <ImageModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        imageSrc={modalState.imageSrc} 
        title={modalState.title} 
      />
    </>
  )
}

export default App