import React from 'react'
import logo from '../assets/logo.svg'

const Loading = () => {
  return (
    <div className='max-w-sm relative font-Roboto mx-auto h-screen flex justify-center items-center'>
      <img src={logo} alt="ziddesk" className='animate-bounce' />
      <p className="absolute bottom-5 text-sm font-light text-[#766262]">Version 0.0.1</p>
    </div>
  )
}

export default Loading