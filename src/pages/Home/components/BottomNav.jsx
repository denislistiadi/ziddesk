import React from 'react'
import MenuItem from './fragments/MenuItem'
import home from "../../../assets/home-icon.svg"
import cabang from "../../../assets/cabang-icon.svg"
import profile from "../../../assets/profile.svg"

const BottomNav = () => {
  return (
    <div className='fixed mx-auto bottom-0 max-w-sm w-full'>
      <div className="py-4 px-6 flex justify-around bg-white shadow-top-only">
        <MenuItem image={home} name="Beranda" />
        <MenuItem image={cabang} name="Cabang" />
        <MenuItem image={profile} name="Profil" />
      </div>
    </div>
  )
}

export default BottomNav