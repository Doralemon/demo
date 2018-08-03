import Vue from 'vue'
import Router from 'vue-router'
import PreferenceInfo from '../views/PreferenceInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/preference/:id',
        name:'PreferenceInfo',
        component: PreferenceInfo 
    }
  ]
})
