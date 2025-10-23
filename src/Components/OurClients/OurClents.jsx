import React from 'react'
import glowEffect from "../../assets/Ellipse-7.svg"
import avatar from "../../assets/Avatar.svg"
const OurClients = () => {
    return (
        <div className=' relative sm:px-10 lg:px-14 xl:px-20 px-5 overflow-hidden h-screen max-w-[1200px] mx-auto pt-10'>
            
            <div>
                <div className='text-center md:mb-10'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-medium mb-7'>Our Clients</h1>
                    <p className='text-[#ffffff] text-lg sm:text-xl'>
                        Hear firsthand how our solutions have <br className='xxs:block hidden'/> boosted online success for users like you.
                    </p>
                </div>
                <div className='gridControl relative'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <img src={avatar} alt="" className='h-full'/>
                    </div>
                    <div className='py-3 lg:py-5 px-4 xl:px-10 md:col-start-3 md:col-end-4 col-start-2 col-end-3 md:static absolute w-[300px] md:w-auto z-10 md:z-0 md:text-start text-center left-1/2 xxs:top-[90%]  top-[105%] transform -translate-x-1/2 md:translate-0 hundredPx:removeBorder md:addBorder'>
                        <h3 className='text-xl lg:text-2xl font-medium md:w-[90%] lg:w-[80%] xl:w-[70%]'>
                            This product has completely transformed how I manage my projects and deadlines
                        </h3>
                        <h4 className='lg:text-lg mt-4'>
                            Talia Taylor
                        </h4>
                        <p className='text-sm text-nav-li'>
                            Digital Marketing Director @ Quantum
                        </p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default OurClients