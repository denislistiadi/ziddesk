import React from "react"
import failed from "../../../assets/error.svg"

const Failed = () => {
  return (
    <div className="w-full h-screen max-w-sm mx-auto px-20 flex-col gap-3 flex justify-center items-center">
      <img src={failed} alt="failed" />
      <p className="text-xs text-center">
        Request tidak terkirim karena terjadi kesalahan. Silakan hubungi kami.
      </p>
      <button className="text-primary p-4 rounded-full text-sm font-medium bg-primary bg-opacity-20">
        Hubungi Kami
      </button>
    </div>
  )
}

export default Failed
