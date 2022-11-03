import React from "react"
import { useParams } from "react-router-dom"
import ServiceLayout from "../../components/Layout/ServiceLayout"
import { useFetchTicket } from "../../modules/Ticket/hooks"
import DataWrapper from "./components/DataWrapper"
import Loading from "../../components/Loading"
import phone from "../../assets/phone.svg"
import wa from "../../assets/wa.svg"
import defaultImage from "../../assets/bluescreen 1.jpg"

const DetailService = () => {
  const params = useParams()
  const hooks = useFetchTicket(params.id)
  const service = hooks?.data?.data[0]

  return (
    <React.Fragment>
      {hooks.isLoading ? (
        <Loading />
      ) : (
        <ServiceLayout title="Detail Keluhan">
          <div className="p-4 mt-16 mb-5">
            <div className="border p-4 flex flex-col">
              <img src={service?.image_url || defaultImage} alt={service?.title} className="h-[183px]" />
              <DataWrapper title="Keluhan" border>
                <p className="text-sm">{service?.title}</p>
              </DataWrapper>
              <DataWrapper title="Deskripsi" border>
                <p className="text-sm">{service?.description}</p>
              </DataWrapper>
              <DataWrapper title="Kategori" border>
                <p className="text-sm">{service?.category}</p>
              </DataWrapper>
              <DataWrapper title="Deskripsi" border>
                <p
                  className={`text-sm w-fit px-1 rounded ${
                    service?.status == "onprogress"
                      ? "bg-green-500 bg-opacity-20 text-green-500"
                      : service?.status == "done"
                      ? "text-primary bg-primary bg-opacity-20"
                      : service?.status == "cancel"
                      ? "bg-red-500 bg-opacity-20 text-red-500"
                      : "bg-ticket text-ticket bg-opacity-20"
                  }`}
                >
                  {service?.status}
                </p>
              </DataWrapper>
              <DataWrapper title="Konsultasi Via">
                <div className="flex gap-4 text-gray-400">
                  <button className="w-full bg-gray-400 bg-opacity-30 flex gap-3 items-center py-2 rounded-full justify-center">
                    <img src={phone} alt="phone" />
                    Panggil
                  </button>
                  <button className="w-full bg-gray-400 bg-opacity-30 flex gap-3 items-center py-2 rounded-full justify-center">
                    <img src={wa} alt="wa" />
                    WhatsApp
                  </button>
                </div>
              </DataWrapper>
            </div>
          </div>
        </ServiceLayout>
      )}
    </React.Fragment>
  )
}

export default DetailService
