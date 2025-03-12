import { createRouter, createWebHistory } from 'vue-router'
import Search from '@/views/Search.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';
import Products from '@/views/Products.vue';

const routes = [
  {path: '/products', name: 'productsView', component: Products},
  {path: '/customerRegister', name: 'customerRegister', component: CustomerRegister},
  {path: '/', name: 'search', component: Search},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
