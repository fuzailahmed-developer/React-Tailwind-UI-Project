import React from 'react'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const MenuToggleBtn = ({menuToggle,setMenuToggle}) => {
    return (
        <button onClick={() => setMenuToggle(!menuToggle)} className='inline-block md:hidden'>
            {
                menuToggle
                    ? <AiOutlineMenuFold className='text-xl font-bold cursor-pointer' />
                    : <AiOutlineMenuUnfold className='text-xl font-bold cursor-pointer' />
            }
        </button>
    )
}

export default MenuToggleBtn