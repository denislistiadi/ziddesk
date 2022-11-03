import React from "react"

const InputWrapper = ({ label, children }) => {
  return (
    <section className="flex flex-col gap-2">
      <label htmlFor={label} className="text-base font-semibold">
        {label}
      </label>
      <div className="relative flex flex-col">{children}</div>
    </section>
  )
}

export default InputWrapper
