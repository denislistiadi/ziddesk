import React from "react"

const DataWrapper = ({ title, border, children }) => {
  return (
    <section className={`py-4 flex flex-col gap-2  ${border ? "border-b" : ""}`}>
      <h4 className="font-medium">{title}</h4>
      {children}
    </section>
  )
}

export default DataWrapper
