import React from "react"
import { HiChevronRight } from "react-icons/hi"

const ListItem = ({ title, name, updated }) => {
  return (
    <div className="shadow-list-item rounded-md p-4 flex flex-col justify-between gap-3">
      <h6 className="font-medium">{title}</h6>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-sm col-span-1">{name}</div>
        <div className="flex justify-between ml-7 col-span-2">
          <div
            className={`${
              title == "Keluhan"
                ? "bg-ticket bg-opacity-20 text-ticket text-xs px-2 py-1 font-medium"
                : "text-black font-light text-sm"
            }`}
          >
            {updated}
          </div>
          <button className="rounded-full bg-primary bg-opacity-20 p-2">
            <HiChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListItem
