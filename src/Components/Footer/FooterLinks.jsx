import React from 'react'

const FooterLinks = ({links}) => {
  return (
    <ul className='flex flex-col gap-y-4 '>
        <li><h3 className='text-xl font-medium mb-2'>{links.title}</h3></li>
        {
            links.link.map((link,idx) => (
                <li className='text-nav-li' key={idx}>{link}</li>
            ))
        }
    </ul>
  )
}

export default FooterLinks