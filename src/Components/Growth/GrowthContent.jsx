import React, { useState } from 'react'

const GrowthContent = ({ leftImg, rightImg, direction, leftHeading, leftPara1, leftPara2, rightHeading, rightPara1, rightPara2 }) => {

    return (
        <>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className={`md:basis-[35%] lg:basis-[30%] border border-border-light p-10 rounded-xl ${direction ? "md:order-1" : "md:order-2"}`}>
                    <div className='flex justify-center mb-10'>
                        <img src={leftImg} alt="ring" />
                    </div>
                    <div className='mt-auto'>
                        <h3 className='font-semibold text-xl'>
                            {leftHeading}
                        </h3>
                        <p className='text-nav-li mt-1.5 tracking-wide'>
                            <span>{leftPara1}</span> <br className='hidden xl:block' /> <span>{leftPara2}</span>
                        </p>
                    </div>
                </div>
                <div className={`md:basis-[65%] lg:basis-[70%] relative border border-border-light overflow-hidden flex p-10 rounded-xl bg-linear-to-b from-[#36176440] to-[#361764] md:h-auto h-[400px] ${direction ? "md:order-2" : "md:order-1"}`}>
                    <img
                        src={rightImg}
                        alt="growth"
                        className={`absolute ${direction ? "lg:-top-12 -top-20" : "top-10"} left-0 w-full h-full object-cover -z-10`}
                    />
                    <div className='mt-auto'>
                        <h3 className='font-semibold text-xl'>
                            {rightHeading}
                        </h3>
                        <p className='text-nav-li mt-1.5 tracking-wide'>
                            {rightPara1} <br className='xxs:block hidden' /> {rightPara2}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowthContent