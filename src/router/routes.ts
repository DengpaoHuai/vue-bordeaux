import PeopleView from '@/views/PeopleView.vue'
import PlanetView from '@/views/PlanetView.vue'
import PersonView from '@/views/PersonView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: PlanetView
  },
  {
    path: '/people',
    component: PeopleView
  },
  {
    path: '/people/:id',
    component: PersonView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
