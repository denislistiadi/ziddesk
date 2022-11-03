import React from "react"

const CampaignWrapper = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex justify-between">
        <h4 className="text-base font-medium">{title}</h4>
        <button className="text-sm text-primary">Lihat Semua</button>
      </div>
        <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

export default CampaignWrapper
