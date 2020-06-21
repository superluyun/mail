export default [
    {
      path:'/item1',
      name:'item1',
      component:() => import('@admin/item1.vue')
    },
    {
      path:'/item2',
      name:'item2',
      component:() => import('@admin/item2.vue')
    }
]