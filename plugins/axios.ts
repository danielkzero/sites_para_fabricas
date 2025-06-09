import axios from 'axios'
import type { AxiosInstance } from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const instance: AxiosInstance = axios.create({
    baseURL: config.public.apiBase || 'http://localhost:8083/api/v1',
    headers: {
      Accept: 'application/json',
    },
  })

  // (Opcional) Interceptor para incluir token JWT
  instance.interceptors.request.use((req) => {
    const token = localStorage.getItem('modest_token')
    if (token) req.headers.Authorization = `Bearer ${token}`
    return req
  })

  return {
    provide: {
      axios: instance,
    },
  }
})
