import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Menu = ({menuToggle}) => {
    return (
        <ul className={`md:hidden flex flex-col absolute top-1/2 ${menuToggle ? "left-1/2" : "-left-1/2"} transform -translate-1/2 border menu transition-all z-10`}>
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
            <li>
                <button className='nav-btn mt-2'>
                    Join waitlist
                </button>
            </li>
        </ul>
    )
}

export default Menu