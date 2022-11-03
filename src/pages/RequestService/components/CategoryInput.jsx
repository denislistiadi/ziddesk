import React, { useState } from "react"
import InputWrapper from "./fragments/InputWrapper"
import { FiChevronDown } from "react-icons/fi"
import Popup from "./Popup"

const CategoryInput = ({ value, setValue }) => {
  const [open, setOpen] = useState(false)
  return (
    <InputWrapper label="Kategori Keluhan">
      <div
        onClick={() => setOpen(true)}
        className={`border cursor-pointer rounded-md outline-none p-4 focus-within:border-primary text-sm ${
          value == "" ? "text-gray-400" : "text-black"
        } items-center flex justify-between`}
      >
        <span>{value !== "" ? value : "Pilih Kategori"}</span>
        <FiChevronDown size={20} />
      </div>

      {/* POPUP */}
      <Popup
        open={open}
        close={() => setOpen(false)}
        value={value}
        setValue={setValue}
      />
    </InputWrapper>
  )
}

export default CategoryInput
