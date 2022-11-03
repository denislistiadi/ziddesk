import React from 'react'
import FeatureItem from './fragments/FeatureItem'
import ticket from "../../../assets/ticket.svg"
import bag from "../../../assets/bag.svg"

const Feature = () => {
  return (
    <div className='bg-white rounded-md shadow-md mt-5 p-3 flex flex-col gap-2'>
      <div className="flex justify-between w-full">
        <FeatureItem image={ticket} name="5 Ticket" classContainer="text-ticket" />
        <div className="border-r"></div>
        <FeatureItem image={bag} name="3 Visit" classContainer="text-[#686C71]"/>
      </div>
      <hr/>
      <p className='text-xs text-center text-[#C4C4C4]'>Akan Berakhir pada: <span className='text-black font-medium'>17 Agustus 2022</span></p>
    </div>
  )
}

export default Feature