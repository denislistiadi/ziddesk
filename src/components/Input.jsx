import React from "react"

const Input = ({ label, type = "text", value, error, iconAppend, ...rest }) => {
  return (
    <section className="flex flex-col gap-2">
      <label htmlFor={label} className="text-base font-semibold">
        {label}
      </label>
      <div className="relative flex flex-col">
        <input
          {...rest}
          type={type}
          placeholder={label}
          value={value}
          className={`border rounded-md outline-none p-4 focus-within:border-primary text-sm ${
            error ? "border-error" : ""
          }`}
        />
        {iconAppend && (
          <div className="absolute top-1/2 right-3 -translate-y-2/4 w-5 h-5">
            {iconAppend}
          </div>
        )}
      </div>

      {error && (
        <span className="text-error text-[10px] -mt-1">
          {label} yang Anda masukkan salah
        </span>
      )}
    </section>
  )
}

export default Input
