import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/frame/MainPage'
import Home from '@/components/home/index'
import Particulars from '@/components/particulars/particulars'
import Works from '@/components/works/works'
import WorksPage from '@/components/works/worksPage'
import CompanyProfile from '@/components/works/companyProfile'
import Login from '@/components/login/login'
import myCenter from '@/components/myCenter/myCenter'


import MainPageEnd from '@/views/frame/MainPage'
import HomeEnd from '@/views/page/index'
import addCase from '@/views/page/addCase'
import recruit from '@/views/page/recruit'
import endLogin from '@/views/page/endLogin'
import traffic from '@/views/page/traffic'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        { path: '/',
          name: '首页',
          component: Home
        },
        { path: '/particulars', name: '案例详情', component: Particulars },
        { path: '/works', name: '作品集', component: Works },
        { path: '/worksPage', name: '公司作品', component: WorksPage },
        { path: '/companyProfile', name: '公司详情', component: CompanyProfile },
        { path: '/myCenter', name: '个人中心', component: myCenter }
      ]
    },
    { path: '/login', name: '登录注册', component: Login },
    {
      path: '/admin',
      component: MainPageEnd,
      children: [
        { path: '/', name: '创建公司', component: HomeEnd },
        { path: 'addCase', name: '添加案例', component: addCase },
        { path: 'recruit', name: '发布招聘', component: recruit },
        { path: 'traffic', name: '流量统计', component: traffic }
      ]
    },
    { path: '/endLogin', name: '后台登陆', component: endLogin }
  ]
})

export default router
