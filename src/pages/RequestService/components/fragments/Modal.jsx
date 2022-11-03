import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const Modal = ({ open, close, title, children }) => {
  const [slide, setSlide] = useState(false)
  setTimeout(() => {
    if (open) {
      setSlide(true)
    } else {
      setSlide(false)
    }
  }, 100)

  return (
    <React.Fragment>
      {open ? (
        <div
          onClick={close}
          className="fixed z-10 inset-0 mx-auto h-screen w-screen bg-black bg-opacity-30 max-w-sm"
        >
          <div
            className={`rounded-t-3xl w-full absolute  ${
              slide ? "bottom-0" : "-bottom-[258px]"
            } transition-all duration-500 bg-white px-4 py-2`}
          >
            <div className="h-1 mx-auto mb-3 bg-gray-300 rounded-full w-11 flex items-center justify-center"></div>
            <div className="relative py-4 text-center font-bold">
              {title}
              <button className="absolute right-4 top-5">
                <AiOutlineClose />
              </button>
            </div>
            <div className="">{children}</div>
          </div>
        </div>
      ) : undefined}
    </React.Fragment>
  )
}

export default Modal
