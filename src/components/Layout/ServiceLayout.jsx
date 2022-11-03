import React from "react"
import { BiLeftArrowAlt } from "react-icons/bi"

const ServiceLayout = ({ title, children }) => {
  return (
    <main className=" max-w-sm mx-auto">
      <div className="fixed bg-white z-10 top-0 max-w-sm mx-auto p-4 shadow-md w-full">
        <div className=" flex w-full items-center gap-4">
          <BiLeftArrowAlt
            onClick={() => window.history.back()}
            size={20}
            className="cursor-pointer h-6"
          />
          <div className="text-base font-semibold">{title}</div>
        </div>
      </div>
      {children}
    </main>
  )
}

export default ServiceLayout
