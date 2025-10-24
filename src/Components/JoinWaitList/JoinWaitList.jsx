import React from 'react'
import ctaImg from "../../assets/CTA.svg"
const JoinWaitList = () => {
    return (
        <div className='sm:px-10 lg:px-14 xl:px-20 py-10' data-aos='zoom-in'>
            <div className={`h-[50vh] sm:h-[70vh] bg-cover border border-border-light rounded flex flex-col items-center justify-center`} style={{ backgroundImage: `url(${ctaImg})` }}>
                <div className='p-6'>
                    <h2 className='text-4xl xxs:text-5xl md:text-6xl text-center font-medium'>AI-driven SEO <br className='xxs:block hidden'/>for everyone.</h2>
                    <div className='xxs:border xxs:border-border-light rounded-lg xxs:relative mt-7 mb-8 xxs:block flex flex-col gap-y-2 '>
                        <input type="text" placeholder='Your Email' className='h-12 pl-4 rounded-lg xxs:border-0 border xxs:border-border-light '/>
                        <button className='py-1.5 px-4 rounded bg-white text-black xxs:absolute right-1 top-[5.5px]'>Join WaitList</button>
                    </div>
                        <p className='text-center text-nav-li'>No credit card required · 7-days free trial</p>
                </div>
            </div>
        </div>
    )
}

export default JoinWaitList