import Vue from 'vue'
import VueRouter from 'vue-router'
import EditableTable from '../views/EditableTable.vue'
import fakerTable from '../views/viewFakerTable.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'EditableTable',
    component: EditableTable
  },
  {
    path:'fakerEditTable',
    name: 'fakerTable',
    component: fakerTable
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
