import React from 'react'
import AppImg from "../../assets/App.svg"

const HeroImg = () => {
  return (
    <div
      className="relative"
    >
      <img src={AppImg} alt="" className='w-full'/>
      <div className='h-1/3 bg-linear-to-b from-transparent to-black absolute bottom-0 w-full'></div>
    </div>
  )
}

export default HeroImg
