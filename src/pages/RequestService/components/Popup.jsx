import React from "react"
import Modal from "./fragments/Modal"
import { AiOutlineCheck } from "react-icons/ai"

const Popup = ({ open, close, value, setValue }) => {
  return (
    <Modal open={open} close={close} title="Pilih Kategori">
      <div className="flex flex-col">
        <button
          onClick={() => setValue("Komputer & Laptop")}
          className="py-4 flex justify-between border-b"
        >
          <p>Komputer & Laptop</p>
          {value == "Komputer & Laptop" && <AiOutlineCheck className="text-green-500"/>}
        </button>
        <button
          onClick={() => setValue("CCTV")}
          className="py-4 flex justify-between border-b"
        >
          <p>CCTV</p>
          {value == "CCTV" && <AiOutlineCheck className="text-green-500"/>}
        </button>
        <button
          onClick={() => setValue("AC")}
          className="py-4 flex justify-between"
        >
          <p>AC</p>
          {value == "AC" && <AiOutlineCheck className="text-green-500"/>}
        </button>
      </div>
    </Modal>
  )
}

export default Popup
