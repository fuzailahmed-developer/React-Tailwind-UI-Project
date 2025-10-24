import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {

    const cardList = [
        {
            title: 'Pricing',
            price: '$29/mo',
            ourService: [
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports"
            ]
        },
        {
            title: 'Pro',
            price: '$79/mo',
            ourService: [
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports",
                "Content suggestions",
                "Link optimization"
            ]
        },
        {
            title: 'Business',
            price: '$149/mo',
            ourService: [
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports",
                "Content suggestions",
                "Link optimization",
                "Multi-user access",
                "Multi-user access"
            ]
        }
    ]

    return (
        <div className='pricingContainer flex flex-col gap-y-10 md:gap-y-0'>
            <div className='text-center md:mb-10' data-aos='fade-up'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-medium mb-7'>Pricing</h1>
                <p className='text-[#ffffff] text-lg sm:text-xl'>
                    Choose the right plan to meet your SEO <br className='xxs:block hidden' /> needs and start optimizing today.
                </p>
            </div>

            <div className='flex *:grow gap-4 *:basis-[300px] flex-wrap'>
                {
                    cardList.map((card,idx) => (
                        <PricingCard card={card} key={idx} idx={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default Pricing