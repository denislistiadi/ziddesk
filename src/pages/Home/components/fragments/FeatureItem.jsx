import React from "react"
import { TbInfoCircle } from "react-icons/tb"

const FeatureItem = ({ image, name, classContainer }) => {
  return (
    <div className={`py-2 px-4 flex gap-1 w-full justify-between items-center ${classContainer}`}>
      <img src={image} alt="feature" className="w-6" />
      <h4 className="text-base font-medium">{name}</h4>
      <TbInfoCircle className="text-primary cursor-pointer"/>
    </div>
  )
}

export default FeatureItem
