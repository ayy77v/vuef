import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'


Vue.use(Router)

let router =  new Router({
  routes: [



  {
    path: '*',
 redirect: '/login',
  
},


{
  path: '/',
  redirect: '/login',
},


    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,

      meta: {
        requiresAuth: true
      }
    },

{
	path: '/login',
	name: 'Login',
	component: Login
},



{
	path: '/signup',
	name: 'Signup',
	component: Signup
},



  ]
})


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record =>record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('hello')
      else next()
});

export default router
