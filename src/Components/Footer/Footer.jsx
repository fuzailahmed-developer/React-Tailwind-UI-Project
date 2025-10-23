import React from 'react'
import logo from "../../assets/logokit.svg"
import socialIcon from "../../assets/social-icons/Vector.svg"
import socialIcon1 from "../../assets/social-icons/Vector-1.svg"
import socialIcon2 from "../../assets/social-icons/Vector-2.svg"
import FooterLinks from './FooterLinks'

const socialImg = [socialIcon, socialIcon1, socialIcon2]

const Footer = () => {

    const footerLinks = [
        {
            title: 'Product',
            link: [
                "Features",
                "Integration",
                "Updates",
                "FAQ",
                "Pricing"
            ]
        },
        {
            title: 'Company',
            link: [
                "About",
                "Blog",
                "Careers",
                "Manifesto",
                "Press",
                "Contract"
            ]
        },
        {
            title: 'Resources',
            link: [
                "Examples",
                "Community",
                "Guides",
                "Docs",
                "Press"
            ]
        },
        {
            title: 'Legal',
            link: [
                "Privacy",
                "Terms",
                "Security",
            ]
        }
    ]


    return (
            <div className='px-5 xxs:px-10 md:px-20 pb-10 flex justify-between lg:flex-row flex-col gap-y-8'>
                <div className='flex flex-col xxs:flex-row lg:flex-col justify-between lg:items-start items-center gap-y-6'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='flex gap-6'>
                        {
                            socialImg.map((icon,idx) => (
                                <img src={icon} alt="" key={idx} className='w-5 h-5'/>
                            ))
                        }
                    </div>
                </div>
                <div className='flex gap-x-20 gap-y-8 pb-4 footer-po:flex-nowrap flex-wrap *:basis-[30%] *:footer-po:basis-auto'>
                    {
                        footerLinks.map((links,idx) => (
                            <FooterLinks links={links} key={idx}/>
                        ))
                    }
                </div>
            </div>
    )
}

export default Footer