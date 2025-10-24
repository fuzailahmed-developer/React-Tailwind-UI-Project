import React, { useEffect } from 'react'
import Home from "./Pages/Home/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      mirror: false,
    });

    // 🔧 Refresh after full page load
    window.addEventListener("load", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App