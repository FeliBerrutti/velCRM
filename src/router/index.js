import { createRouter, createWebHistory } from 'vue-router'
import Search from '@/views/Search.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';
import Products from '@/views/Products.vue';

const routes = [
  {path: '/products', name: 'productsView', component: Products},
  {path: '/customerRegister', name: 'customerRegister', component: CustomerRegister},
  {path: '/search/:searchValue', name: 'search', component: Search, props: true}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
