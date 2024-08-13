import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import './App.css';
import { FaArrowUp } from "react-icons/fa6";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
      const handleScroll = () => {
          setShowGoToTop(window.scrollY >= 200 )
      } 
      window.addEventListener('scroll', handleScroll)
      // Cleanup function
      return () => { 
          window.removeEventListener('scroll', handleScroll)
      }
  }, [])

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='main'>
      < Header />
      < Menu />
      < Container />
      < RelatedProducts />
      < Footer />
      {showGoToTop && (<button  className="go-to-top" onClick={handleGoToTop}><FaArrowUp /></button>)}
    </div>
  )
}

export default App;

