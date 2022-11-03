import React from "react"
import { BsDot } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import defaultImage from "../../../assets/bluescreen 1.jpg"

const ServiceItem = ({ id, image, name, status, category, desc }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/service/${id}`)}
      className="shadow-ticket-list rounded-md p-4 cursor-pointer flex flex-col gap-2"
    >
      <img src={image || defaultImage} alt={name} className="h-[183px]" />
      <div className="flex gap-2 items-center">
        <div
          className={`rounded-md py-0.5 px-2 text-xs ${
            status == "onprogress"
              ? "bg-green-500 bg-opacity-20 text-green-500"
              : status == "done"
              ? "text-primary bg-primary bg-opacity-20"
              : status == "cancel"
              ? "bg-red-500 bg-opacity-20 text-red-500"
              : "bg-ticket text-ticket bg-opacity-20"
          }`}
        >
          {status}
        </div>
        <BsDot className="text-gray-400" />
        <div className="text-xs text-gray-400">{category}</div>
        <BsDot className="text-gray-400" />
        <div className="text-xs text-gray-400">13 Juli 2022</div>
      </div>
      <div className="font-semibold">{name}</div>
      <p className="text-sm truncate"> {desc}</p>
    </div>
  )
}

export default ServiceItem
