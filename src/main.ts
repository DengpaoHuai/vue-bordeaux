import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import { createPinia } from 'pinia'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import DefaultLayout from './layouts/DefaultLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import graphik from './plugins/graphik'
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

app.component('DefaultLayout', DefaultLayout)
app.component('MainLayout', MainLayout)

app.use(graphik)

app.use(VueQueryPlugin, {
  queryClient: queryClient
})

app.mount('#app')
