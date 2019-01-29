import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// Router练习
import ParentRouter from '@/components/routerTest/parentRouter'
import DefaultRouter from '@/components/routerTest/prChildren/defaultRouter'
import ParentControl from '@/components/routerTest/prChildren/parentControl/parentControl'
import PC1 from '@/components/routerTest/prChildren/parentControl/pc1'
import PC2 from '@/components/routerTest/prChildren/parentControl/pc2'
import OwnerControl from '@/components/routerTest/prChildren/ownerControl/ownerControl'
import OC1 from '@/components/routerTest/prChildren/ownerControl/oc1'
import OC2 from '@/components/routerTest/prChildren/ownerControl/oc2'
// other练习
import ColorJs from '@/components/otherTest/colorJs/ColorJs.vue'
import GlobalProps from '@/components/otherTest/globalProps/GlobalProps.vue'

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
      component: ParentRouter,
      children: [
        {
          path: '/',
          component: DefaultRouter
        },
        {
          path: 'parentControl',
          component: ParentControl,
          children: [
            {
              path: 'pc1',
              component: PC1
            },
            {
              path: 'pc2',
              component: PC2
            }
          ]
        },
        {
          path: 'ownerControl',
          component: OwnerControl,
          children: [
            {
              path: '/',
              component: OC1
            },
            {
              path: 'oc2',
              component: OC2
            }
          ]
        }
      ]
    },
    {
      path: '/ColorJs',
      component: ColorJs
    },
    {
      path: '/GlobalProps',
      component: GlobalProps
    }
  ]
})
