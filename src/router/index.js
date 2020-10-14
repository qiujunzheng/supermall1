import VueRouter, { createRouter, createWebHistory } from 'vue-router'

//懒加载
const Home =()=>import('../views/home/Home')
const Category =()=>import('../views/category/Category')
const Cart =()=>import('../views/cart/Cart')
const Profile =()=>import('../views/profile/Profile')
const Detail = ()=> import('views/detail/Detail')

const routes = [
  //默认跳转
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  },
  {
    path: '/detail/:id',
    component:Detail
  }
]

const router = createRouter({
  history: createWebHistory(),//默认就是history模式
  routes
})

export default router
