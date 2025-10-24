import React from 'react'
import OurService from './OurService';

const PricingCard = ({ card , idx }) => {



  return (
    <div className={`w-[300px] h-[500px] border p-5 rounded-xl flex flex-col ${idx == 1 && 'bg-linear-to-b from-[#01000] to-[#361764] pricingCardShadow'}`} data-aos='fade-up'>
      <div className='pb-5 border-b border-[#282729]'>
        <h3 className='text-2xl font-medium'>{card.title}</h3>
        <p className='text-nav-li'>{card.price}</p>
      </div>
      <ul className='py-5 flex flex-col gap-y-4' >
        {
          card.ourService.map((service,idx) => (
            <OurService service={service} key={idx}/>
          ))
        }
      </ul>
      <button className={`mt-auto bg-pricing-btn-bg border border-border-light rounded-lg py-1.5 ${idx == 1 && 'bg-pricing-btn2-bg'}`}>Join Wallet</button>
    </div>
  )
}

export default PricingCard