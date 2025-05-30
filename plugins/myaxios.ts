import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'https://sua-api.com', // ou use `useRuntimeConfig().public.apiBase`
  })

  return {
    provide: {
      axios: instance,
    },
  }
})
