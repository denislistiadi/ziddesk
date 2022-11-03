import { useMutation, useQuery } from "react-query"
import { fetchTicket, requestTicket } from "./api"

export const useFetchTicket = (id) => {
  return useQuery(["list-ticket", id], () => fetchTicket(id))
}

export const useRequestTicket = () => {
  return useMutation(requestTicket)
}
