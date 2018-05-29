import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// Router练习
import parentRouter from '@/components/routerTest/parentRouter'
import defaultRouter from '@/components/routerTest/prChildren/defaultRouter'
import parentControl from '@/components/routerTest/prChildren/parentControl/parentControl'
import pc1 from '@/components/routerTest/prChildren/parentControl/pc1'
import pc2 from '@/components/routerTest/prChildren/parentControl/pc2'
import ownerControl from '@/components/routerTest/prChildren/ownerControl/ownerControl'
import oc1 from '@/components/routerTest/prChildren/ownerControl/oc1'
import oc2 from '@/components/routerTest/prChildren/ownerControl/oc2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parentRouter',
      component: parentRouter,
      children: [
        {
          path: '/',
          component: defaultRouter
        },
        {
          path: 'parentControl',
          component: parentControl,
          children: [
            {
              path: 'pc1',
              component: pc1
            },
            {
              path: 'pc2',
              component: pc2
            }
          ]
        },
        {
          path: 'ownerControl',
          component: ownerControl,
          children: [
            {
              path: '/',
              component: oc1
            },
            {
              path: 'oc2',
              component: oc2
            }
          ]
        }
      ]
    }
  ]
})
