import './global.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LastPitch from './components/LastPitch/LastPitch'
import Partners from './components/Partners/Partners'
import Testimony from './components/Testimony/Testimony'
import Charity from './components/Charity/Charity'
import Stats from './components/Stats/Stats'
import Work from './components/works/Work'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Stats /> 
      <Charity />
      <Testimony />
      <Partners />
      <LastPitch/>
      <Footer /> 
    </>
  )
}

export default App
