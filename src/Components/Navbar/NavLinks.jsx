import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const NavLinks = () => {
    return (
        <ul className='hidden md:flex gap-4 nav-ul'>
            <li className='nav-li'>
                Features
                <IoIosArrowDown />
            </li>
            <li className='nav-li'>
                Developers
            </li>
            <li className='nav-li'>
                Company
                <IoIosArrowDown />
            </li>
            <li className='nav-li'>
                Blog
            </li>
            <li className='nav-li'>
                Changelog
            </li>
        </ul>
    )
}

export default NavLinks