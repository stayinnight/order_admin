import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `·redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/pms',
  }
]

export const asyncRouterMap = [
  {
    path: '/pms',
    component: Layout,
    redirect: '/pms/product',
    name: 'pms',
    meta: { title: '商品', icon: 'product' },
    children: [{
      path: 'product',
      name: 'product',
      component: () => import('@/views/pms/product/index'),
      meta: { title: '商品列表', icon: 'product-list' }
    },
    {
      path: 'addProduct',
      name: 'addProduct',
      component: () => import('@/views/pms/product/add'),
      meta: { title: '添加商品', icon: 'product-add' }
    },
    {
      path: 'productCate',
      name: 'productCate',
      component: () => import('@/views/pms/productCate/index'),
      meta: { title: '商品分类', icon: 'product-cate' }
    },
    {
      path: 'addProductCate',
      name: 'addProductCate',
      component: () => import('@/views/pms/productCate/add'),
      meta: { title: '添加商品分类' },
      hidden: true
    },
    {
      path: 'productAttr',
      name: 'productAttr',
      component: () => import('@/views/pms/productAttr/index'),
      meta: { title: '商品类型', icon: 'product-attr' }
    },
    {
      path: 'brand',
      name: 'brand',
      component: () => import('@/views/pms/brand/index'),
      meta: { title: '品牌管理', icon: 'product-brand' }
    },
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: { title: '订单', icon: 'order' },
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/oms/order/index'),
        meta: { title: '订单列表', icon: 'product-list' }
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        component: () => import('@/views/oms/order/setting'),
        meta: { title: '订单设置', icon: 'order-setting' }
      },
      {
        path: 'returnApply',
        name: 'returnApply',
        component: () => import('@/views/oms/apply/index'),
        meta: { title: '退货申请处理', icon: 'order-return' }
      },
      {
        path: 'returnReason',
        name: 'returnReason',
        component: () => import('@/views/oms/apply/reason'),
        meta: { title: '退货原因设置', icon: 'order-return-reason' }
      },
    ]
  },
  {
    path: '/monitor',
    component: Layout,
    redirect: '/monitor/grafana',
    name: 'monitor',
    meta: { title: '监控', icon: 'oms' },
    children: [
      {
        path: 'grafana',
        name: 'grafana',
        component: () => import('@/views/monitor/grafana/index'),
        meta: { title: '看板', icon: 'product-list' }
      },
      {
        path: 'pressure',
        name: 'pressure',
        component: () => import('@/views/monitor/pressure/index'),
        meta: { title: '压测' },
        hidden: true
      },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export const customMenus = [
  {
    createTime: "2020-02-07T08:29:13.000+00:00",
    hidden: 0,
    icon: "ums",
    id: 26,
    level: 0,
    name: "monitor",
    parentId: 0,
    sort: 0,
    title: "监控"
  },
  {
    createTime: "2020-02-07T08:29:13.000+00:00",
    hidden: 0,
    icon: "ums",
    id: 27,
    level: 1,
    name: "pressure",
    parentId: 1,
    sort: 0,
    title: "压测"
  },
  {
    createTime: "2020-02-07T08:29:13.000+00:00",
    hidden: 0,
    icon: "ums",
    id: 26,
    level: 1,
    name: "grafana",
    parentId: 1,
    sort: 0,
    title: "看板"
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

