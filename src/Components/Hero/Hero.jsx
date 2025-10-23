import React from 'react'
import HeroContent from './HeroContent'
import HeroImg from './HeroImg'

const Hero = () => {
    return (
        <section className='px-10'>
            <div className="glow sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] absolute sm:top-[75%] top-[60%]"></div>
            <div>
                <HeroContent />
                <HeroImg />
                <p className='text-nav-li sm:text-lg text-center'>Trusted by the world’s most innovative teams</p>
            </div>
        </section>
    )
}

export default Hero