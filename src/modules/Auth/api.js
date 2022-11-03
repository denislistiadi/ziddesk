import $axios from "../../utils/axios"

export const loginUser = async (data) => {
  const result = await $axios.post('/mobile/user/v1/auth/signin', data)
  return result.data
}
