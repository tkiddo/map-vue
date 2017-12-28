import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import homeMap from '../views/Map.vue'
import heatMap from '../views/heatmap.vue'
import components from '../views/components.vue'
import compoItem from '../views/compoItem.vue'
const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: homeMap
},{
  path:'/heatmap',
  component:heatMap
},{
  path:'/components',
  component:components
},{
  path:'/compoItem/:name',
  component:compoItem,
  name:'compoItem'
}]

const scrollBehavior = (to, from, savePosition) => {
  if (savePosition) {
    return savePosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior,
  // mode:'history'
})

export default router
