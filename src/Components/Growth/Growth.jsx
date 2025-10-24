import React, { useState } from 'react'
import ringImg from "../../assets/Visual.svg"
import ringImg2 from "../../assets/ring-2.svg"
import growth from "../../assets/growth.svg"
import growth2 from "../../assets/Visual-2.svg"
import GrowthContent from './GrowthContent'

const Growth = () => {

  const [direction,setDirection] = useState(true)

  return (
    <div className='sm:px-10 px-5'>
      <h1 className='text-center md:text-4xl sm:text-3xl text-2xl font-medium mb-20' data-aos='fade-up'>
        Harness the power of AI, making <br className='md:block hidden'/> search engine optimization intuitive <br className='md:block hidden'/> and effective for all skill levels.
      </h1>
      <div className='flex flex-col gap-y-10' >
        <GrowthContent
          leftImg={ringImg}
          rightImg={growth}
          direction={direction}
          setDirection={setDirection}
          leftHeading={'SEO goal setting'}
          leftPara1={'Helps you set and achieve SEO '}
          leftPara2={'goals with guided assistance.'}
          rightHeading={'User-friendly dashboard'}
          rightPara1={'Perform complex SEO audits '}
          rightPara2={'and optimizations with a single click.'}
        />
        <GrowthContent
          leftImg={ringImg2}
          rightImg={growth2}
          direction={!direction}
          setDirection={setDirection}
          leftHeading={'Visual reports'}
          leftPara1={'Visual insights into your'}
          leftPara2={'site’s performance.'}
          rightHeading={'Smart Keyword Generator'}
          rightPara1={'Automatic suggestions and '}
          rightPara2={'the best keywords to target.'}
        />
      </div>
    </div>
  )
}

export default Growth