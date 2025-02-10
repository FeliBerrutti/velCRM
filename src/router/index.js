import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';
import Products from '@/views/Products.vue';
import Users from '@/views/Users.vue';
import Reports from '@/views/Reports.vue';

const routes = [
  {path: '/users', name: 'usersView', component: Users},
  {path: '/products', name: 'productsView', component: Products},
  {path: '/customerRegister', name: 'customerRegister', component: CustomerRegister},
  {path: '/search', name: 'search', component: Search},
  {path: '/', name: 'login', component: Login},
  {path: '/reports', name: 'reports', component: Reports}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
