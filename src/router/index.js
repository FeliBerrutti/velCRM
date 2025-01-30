import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue';

const routes = [
  {path: '/', name: 'search', component: Search},
  {path: '/login', name: 'login', component: Login}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
