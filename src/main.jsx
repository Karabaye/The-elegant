import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import VideosPage from './components/Videos.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/footer.jsx'
import Testimonial from './components/Testimonial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <AboutUs/>
    <VideosPage/>
    <Banner/>
    <Testimonial/>
    <Footer/>
  </StrictMode>,
)
