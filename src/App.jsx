import React, { useEffect } from 'react'
import Home from "./Pages/Home/Home"
import Aos from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation ek hi dafa chale
      offset : 200
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App