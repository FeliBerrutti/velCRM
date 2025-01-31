import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';
import Products from '@/views/Products.vue';
import Users from '@/views/Users.vue';

const routes = [
  {path: '/', name: 'usersView', component: Users},
  {path: '/products', name: 'productsView', component: Products},
  {path: '/customerRegister', name: 'customerRegister', component: CustomerRegister},
  {path: '/search', name: 'search', component: Search},
  {path: '/login', name: 'login', component: Login}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
