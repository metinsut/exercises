import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Flexbox from '@/components/Flexbox'
import Button from '@/components/Button'
import Banner from '@/components/Banner'
import VueCss from '@/components/VueCss'
import Transform from '@/components/Transform'
import AnimatedIcon from '@/components/AnimatedIcon'
import BorderEfect from '@/components/BorderEfect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/flexbox',
      name: 'Flexbox',
      component: Flexbox
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/vuecss',
      name: 'VueCss',
      component: VueCss
    },
    {
      path: '/transform',
      name: 'Transform',
      component: Transform
    },
    {
      path: '/animatedicon',
      name: 'AnimatedIcon',
      component: AnimatedIcon
    },
    {
      path: '/borderefect',
      name: 'BorderEfect',
      component: BorderEfect
    }
  ]
})
