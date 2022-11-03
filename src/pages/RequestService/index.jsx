import React, { useState } from "react"
import ServiceLayout from "../../components/Layout/ServiceLayout"
import { useRequestTicket } from "../../modules/Ticket/hooks"
import CategoryInput from "./components/CategoryInput"
import DescInput from "./components/DescInput"
import Failed from "./components/Failed"
import ImageInput from "./components/ImageInput"
import Success from "./components/Success"
import TitleInput from "./components/TitleInput"

const RequestService = () => {
  const [file, setFile] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("")
  const [res, setRes] = useState(null)

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  const postRequest = useRequestTicket()

  // HANDLE REQUEST TICKET
  const handleSubmit = () => {
    try {
      postRequest.mutate(
        {
          title: title,
          category: category,
          image: file,
          description: desc,
        },
        {
          onError: (error) => {
            setRes(false)
          },
        },
        {
          onSuccess: (data) => {
            setRes(true)
          },
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      {res && <Success />}
      {res === null ? (
        <ServiceLayout title="Lapor Keluhan">
          <div className="p-4 mt-16 flex flex-col gap-3">
            <ImageInput file={file} onChange={handleChange} />
            <TitleInput value={title} onChange={setTitle} />
            <CategoryInput value={category} setValue={setCategory} />
            <DescInput value={desc} onChange={setDesc} />
            <button
              onClick={() => handleSubmit()}
              disabled={!file || !title || !category || !desc ? true : false}
              className="mt-5 p-4 w-full text-white rounded-md hover:opacity-80 active:scale-90 duration-500 bg-primary text-sm font-medium disabled:text-gray-400 disabled:pointer-events-none disabled:bg-gray-200"
            >
              KIRIM
            </button>
          </div>
        </ServiceLayout>
      ) : (
        <Failed />
      )}
    </React.Fragment>
  )
}

export default RequestService
