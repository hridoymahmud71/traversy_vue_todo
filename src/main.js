import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



Vue.config.productionTip = false



const Home = () => import('@/components/views/Home.vue');
const About = () => import('@/components/views/About.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

