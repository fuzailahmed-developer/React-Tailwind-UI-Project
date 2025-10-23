import React from 'react'

const ListBox = ({list,idx}) => {
    return (
        <div className='flex flex-col sm:gap-y-3 lg:gap-y-5'>
            <div className='flex gap-x-3 items-center'>
                <img src={list.img} alt="icon" />
                <h3 className='text-lg font-medium'>{list.title}</h3>
            </div>
            <p className='hundredPx:w-[80%] xxs:w-[65%] sm:w-[70%] lg:w-[85%] xl:w-[65%] text-nav-li'>{list.description}</p>
        </div>
    )
}

export default ListBox