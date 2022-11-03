import React from "react"
import CampaignWrapper from "./fragments/CampaignWrapper"
import ListItem from "./fragments/ListItem"

const Activities = () => {
  return (
    <CampaignWrapper title="Aktifitas Terbaru">
      <ListItem title="Keluhan" name="Laptop Rusak" updated="Menunggu" />
      <ListItem title="Visit" name="Teknisi Budi" updated="31 Agustus 2022" />
    </CampaignWrapper>
  )
}

export default Activities
