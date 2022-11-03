import React from "react"
import ComplainWrapper from "./fragments/ComplainWrapper"
import laporkeluhan from "../../../assets/request.svg"
import keluhansaya from "../../../assets/complain.svg"
import { useNavigate } from "react-router-dom"

const Complain = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between gap-2 p-4 mt-10">
      <ComplainWrapper
        title="Lapor Keluhan"
        image={laporkeluhan}
        click={() => navigate("/request-service")}
      />
      <ComplainWrapper
        title="Keluhan Saya"
        image={keluhansaya}
        click={() => navigate("/history-service")}
      />
    </div>
  )
}

export default Complain
