import React from 'react'

const HeroContentPartTwo = () => {
    return (
        <div className='flex flex-col items-center text-center gap-6'>
            <h1 className='xl:text-[82px] md:text-[72px] sm:text-6xl xxs:text-[45px] hundredPx:text-4xl font-medium leading-[1.3] font-pop'>
                <span>Boost your</span> <br className='hidden sm:block' />
                <span className='bg-linear-to-b from-[#ffffff] to-heading-purple bg-clip-text text-transparent'>rankings with AI.</span>
            </h1>
            <p className='text-sm sm:text-base md:text-xl font-medium'>
                Elevate your site’s visibility effortlessly with AI, where <br className='hidden sm:block' /> smart technology meets user-friendly SEO tools.
            </p>
            <button className='heroContentBtn'>
                Start for free
            </button>
        </div>
    )
}

export default HeroContentPartTwo