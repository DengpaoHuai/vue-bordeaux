import PeopleView from '@/views/PeopleView.vue'
import PlanetView from '@/views/PlanetView.vue'
import PersonView from '@/views/PersonView.vue'
import CreateMovie from '@/views/CreateMovie.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ListMovies from '@/views/ListMovies.vue'

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
  },
  {
    path: '/create/movie',
    component: CreateMovie,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/list_movies',
    component: ListMovies,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (!token) {
      next('/')
    }
  }
  next()
})

export default router
