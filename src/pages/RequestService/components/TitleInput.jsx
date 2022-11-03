import React from "react"
import InputWrapper from "./fragments/InputWrapper"

const TitleInput = ({value, onChange}) => {
  return (
    <InputWrapper label="Apa Keluhanmu">
      <input
        type="text"
        placeholder="Judul Keluhan"
        className="border rounded-md outline-none p-4 focus-within:border-primary text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputWrapper>
  )
}

export default TitleInput
