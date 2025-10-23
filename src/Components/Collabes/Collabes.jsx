import React from 'react'
import logo from "../../assets/collabesLogos/Box.svg"
import logo1 from "../../assets/collabesLogos/Box-1.svg"
import logo2 from "../../assets/collabesLogos/Box-2.svg"
import logo3 from "../../assets/collabesLogos/Box-3.svg"
import logo4 from "../../assets/collabesLogos/Box-4.svg"
import logo5 from "../../assets/collabesLogos/Box-5.svg"
import logo6 from "../../assets/collabesLogos/Box-6.svg"
import logo7 from "../../assets/collabesLogos/Box-7.svg"

const Collabes = () => {

  const logosUrls = [
    logo,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
  ]


  return (
    <div className='px-5 sm:px-10 pt-16 pb-24'>

      <div className='flex flex-wrap xxs:justify-between justify-center gap-y-4'>
        {
          logosUrls.map((url,idx) => (
            <img src={url} alt="" className='w-[175px] h-[98px]' key={idx} />
          ))
        }
      </div>

    </div>
  )
}

export default Collabes