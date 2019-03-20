import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chooseClassPage from '@/components/chooseClassPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/chooseClassPage',
      name: 'chooseClassPage',
      component: chooseClassPage
    }
  ]
})
