import axios from "axios"

import config from "../config"

const $axios = axios.create({
  baseURL: `${config.baseURL}`,
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    throw error.response.data
  }
)
$axios.interceptors.request.use(
  (config) => {
    config.headers["X-API-KEY"] = `l!nt@h-B@!k`
    
    let token = localStorage.getItem("token")
    if (token || token !== "null") {
      config.headers["Authorization"] = `Bearer ${token}`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

export default $axios
