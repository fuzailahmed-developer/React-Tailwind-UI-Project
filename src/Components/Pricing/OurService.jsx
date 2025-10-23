import React from 'react'
import { FaCheck } from "react-icons/fa6";

const OurService = ({service}) => {
  return (
    <li className='flex gap-x-4 items-center text-sm'> <span><FaCheck /></span> <span>{service}</span></li>
  )
}

export default OurService