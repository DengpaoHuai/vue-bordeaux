import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
})

const pinia = createPinia()
//pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.use(VueQueryPlugin, {
  queryClient: queryClient
})

app.mount('#app')
