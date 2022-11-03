import React from "react"
import InputWrapper from "./fragments/InputWrapper"

const DescInput = ({ value, onChange }) => {
  return (
    <InputWrapper label="Deskripsikan Keluhanmu">
      <textarea
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-md outline-none items-start p-4 focus-within:border-primary text-sm h-28"
      />
    </InputWrapper>
  )
}

export default DescInput
