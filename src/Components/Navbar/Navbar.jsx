import React, { useState } from 'react'
import logo from "../../assets/Logo.svg"

import Menu from './Menu';
import NavLinks from './Navlinks';
import NavBtn from './Navbtn';
import MenuToggleBtn from './MenuToggleBtn';


const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <header className='py-4'>
            <nav className='max-w-[1000px] mx-auto flex items-center justify-between py-4 px-5 sm:px-10'>
                {/* logo */}
                <div>
                    <img src={logo} alt="Logo" />
                </div>

                {/* nav links */}
                <NavLinks />

                {/* nav btn */}
                <NavBtn />

                {/* menu toggle btn */}
                <MenuToggleBtn menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

                {/* menu links */}
                <Menu menuToggle={menuToggle} />
            </nav>
        </header>
    )
}

export default Navbar