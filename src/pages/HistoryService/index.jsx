import React from "react"
import ServiceLayout from "../../components/Layout/ServiceLayout"
import { useFetchTicket } from "../../modules/Ticket/hooks"
import ProgressList from "./components/ProgressList"
import ServiceItem from "./components/ServiceItem"

const HistoryService = () => {
  const listService = useFetchTicket()
  return (
    <ServiceLayout title="Keluhan Saya">
      <div className="mt-20">
        <ProgressList />
        <div className=" p-4 flex flex-col gap-3">
          {listService?.data?.data.map((data) => (
            <ServiceItem
              key={data._id}
              id={data._id}
              name={data.title}
              image={data.image_url}
              status={data.status}
              category={data.category}
              desc={data.description}
            />
          ))}
        </div>
      </div>
    </ServiceLayout>
  )
}

export default HistoryService
