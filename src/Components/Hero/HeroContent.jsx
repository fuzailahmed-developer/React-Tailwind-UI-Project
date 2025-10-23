import React from 'react'
import HeroContentPartOne from './HeroContentPartOne'
import HeroContentPartTwo from './HeroContentPartTwo'

const HeroContent = () => {
    return (
        <div className='pt-[50px] sm:pt-[70px] md:pt-[90px] heroContentContainer'>
            <HeroContentPartOne />
            <HeroContentPartTwo />
        </div>
    )
}

export default HeroContent