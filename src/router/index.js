import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
  routes:[{
    path:'/',
    name:"Home",
    component:()=>import("../views/Home.vue")
  },{
    path:'/list',
    name:"List",
    component:()=>import("../views/List.vue")
  },{
    path:'/cart',
    name:"Cart",
    component:()=>import("../views/Cart.vue")
  },{
    path:'/user',
    name:"User",
    component:()=>import("../views/User.vue")
  }
],
  history:createWebHashHistory(),
})

export default router;