import $axios from "../../utils/axios"

export const fetchTicket = async (id = '') => {
  const result = await $axios(`/mobile/user/v1/ticket/?_id=${id}`)
  return result.data
}

export const requestTicket = async (data) => {
  const result = await $axios.post("/mobile/user/v1/ticket/", data)
  return result.data
}
