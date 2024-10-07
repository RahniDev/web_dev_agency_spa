import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useTheme } from '@mui/material/styles'

const App = () => {
  const theme = useTheme()
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
