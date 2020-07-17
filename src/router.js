import AboutTheFlat from "@/pages/AboutTheFlat.vue";
import Home from "@/pages/Home.vue";
import VueRouter from 'vue'

const routes = [
  { path: '/abt', component: AboutTheFlat },
  { path: '/', component: Home}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
export default router;