import React from "react"
import InputWrapper from "./fragments/InputWrapper"
import { AiOutlinePlus } from "react-icons/ai"

const ImageInput = ({ file, onChange }) => {
  return (
    <InputWrapper label="Foto Keluhan">
      {file == "" && (
        <div className="border-2 rounded-lg relative border-dashed cursor-pointer flex h-44 items-center justify-center text-gray-400 text-base gap-2">
          <AiOutlinePlus size={16} />
          <p>Foto Keluhan</p>
          <input
            type="file"
            name="foto keluhan"
            className="absolute cursor-pointer opacity-0 h-44"
            onChange={onChange}
          />
        </div>
      )}
      {file !== "" && (
        <div className="h-44 w-full flex justify-center">
          <img src={file} alt="image" className="object-cover rounded-lg max-h-[176px]" />
        </div>
      )}
    </InputWrapper>
  )
}

export default ImageInput
