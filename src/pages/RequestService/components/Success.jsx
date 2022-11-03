import React from "react"
import success from "../../../assets/success.svg"

const Success = () => {
  return (
    <div className="w-full h-screen max-w-sm px-20 mx-auto flex-col gap-3 flex justify-center items-center">
      <img src={success} alt="success" />
      <p className="text-xs text-center">
        Request kamu telah dikirim, harap menunggu balasan dari kami
      </p>
      <button
        onClick={() => history.back()}
        className="text-primary p-4 rounded-full text-sm font-medium bg-primary bg-opacity-20"
      >
        Kembali
      </button>
    </div>
  )
}

export default Success
