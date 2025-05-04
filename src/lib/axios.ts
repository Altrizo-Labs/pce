import axios from "axios"

const ghostApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GHOST_API_URL,
})

ghostApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY,
  }
  return config
})

export default ghostApi
