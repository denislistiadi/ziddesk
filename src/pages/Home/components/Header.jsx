import React from 'react'
import notif from "../../../assets/notif-icon.svg"
import { HiLocationMarker } from "react-icons/hi"
import Feature from './Feature'

const Header = () => {
  return (
    <div className='h-52 bg-gradient-to-b from-[#47ADE7] p-4 to-[#93D4FA]'>
      <div className="flex justify-between items-center text-white">
        <h1 className='text-3xl font-medium'>ZidDesk</h1>
        <img src={notif} alt="notif" className='h-5 cursor-pointer' />
      </div>
      <div className="flex flex-col text-white mt-8">
        <h2 className='text-xl font-medium'>PT. BESTADA <span className='text-base font-normal'>(Pusat)</span></h2>
        <div className="flex gap-1 text-sm"><HiLocationMarker size={16}  /> Jakarta</div>
      </div>
      <Feature />
    </div>
  )
}

export default Header