import Vue from 'vue'
import VueRouter from 'vue-router'
import EditableTable from '../views/EditableTable.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'EditableTable',
    component: EditableTable
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
