import React from 'react'
import seoIcon from "../../assets/AI-Kit/Vector.svg"
import seoIcon1 from "../../assets/AI-Kit/Vector-1.svg"
import seoIcon2 from "../../assets/AI-Kit/Vector-2.svg"
import seoIcon3 from "../../assets/AI-Kit/Vector-3.svg"
import seoIcon4 from "../../assets/AI-Kit/Vector-4.svg"
import seoIcon5 from "../../assets/AI-Kit/Vector-5.svg"
import seoIcon6 from "../../assets/AI-Kit/Vector-6.svg"
import seoIcon7 from "../../assets/AI-Kit/Vector-7.svg"
import seoIcon8 from "../../assets/AI-Kit/Vector-8.svg"
import ListBox from './ListBox'


const SeoSection = () => {

    const contentList = [
        {
            img: seoIcon,
            title: "User-friendly dashboard",
            description: "Perform complex SEO audits and optimizations with a single click."
        },
        {
            img: seoIcon1,
            title: "Content evaluation",
            description: "Simple corrections for immediate improvements."
        },
        {
            img: seoIcon2,
            title: "Link Optimization Wizard",
            description: "Guides you through the process of creating and managing links."
        },
        {
            img: seoIcon3,
            title: "Visual reports",
            description: "Visual insights into your site’s performance."
        },
        {
            img: seoIcon4,
            title: "SEO goal setting",
            description: "Helps you set and achieve SEO goals with guided assistance."
        },
        {
            img: seoIcon5,
            title: "One-click optimization",
            description: "Perform complex SEO audits and optimizations with a single click."
        },
        {
            img: seoIcon6,
            title: "Smart Keyword Generator",
            description: "Automatic suggestions and the best keywords to target."
        },
        {
            img: seoIcon7,
            title: "Automated alerts",
            description: "Automatic notifications about your SEO health, including quick fixes."
        },
        {
            img: seoIcon8,
            title: "Competitor reports",
            description: "Provides insights into competitors’ keyword strategies and ranking."
        },
    ]


    return (
        <div className='min-h-screen sm:px-10 lg:px-14 xl:px-20 px-5 pt-20 pb-10 bg-linear-to-tl from-[#020103] to-[#190D2E] mt-10'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium mb-14'>
                Elevate your  <br className='sm:block hidden'/> SEO efforts.
            </h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto min-h-[calc(100vh-350px)] gap-5 sm:gap-10'>
                {
                    contentList.map((list,idx) => (
                        <ListBox list={list} idx={idx} key={idx}/>
                    ))
                }
            </div>
        </div>
    )
}

export default SeoSection