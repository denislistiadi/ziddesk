import React from "react"

const MenuItem = ({ image, name }) => {
  return (
    <button className="text-sm flex justify-center w-full items-center flex-col gap-1">
      <img src={image} alt={name} />
      <span className={`${name == "Beranda" ? 'text-primary' : 'text-[#E0E0E0]'}`}>{name}</span>
    </button>
  )
}

export default MenuItem
