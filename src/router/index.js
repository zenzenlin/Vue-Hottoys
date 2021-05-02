import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/frontend/Index.vue'),
    children: [
      {
        name: 'index',
        path: '/',
        component: () => import('../views/frontend/Main.vue')
      },
      {
        name: 'Products',
        path: '/products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        name: 'Features',
        path: '/features',
        component: () => import('../views/frontend/Features.vue')
      },
      {
        name: 'singleproduct',
        path: '/product/:productId',
        component: () => import('../views/frontend/SingleProduct.vue')
      },
      {
        name: 'checkout',
        path: '/checkout',
        component: () => import('../views/frontend/Checkout.vue')
      },
      {
        name: 'payCheck',
        path: '/paycheck/:orderId',
        component: () => import('../views/frontend/PayCheck.vue')
      },
      {
        name: 'finishpayment',
        path: '/finishpayment',
        component: () => import('../views/frontend/FinishPayment.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/frontend/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/backend/Product.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'productlist',
        name: 'ProductList',
        component: () => import('../views/backend/ProductList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/backend/Coupon.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
  // {
  //   path: '/',
  //   name: 'Dashboard',
  //   component: () => import('../views/backend/Dashboard.vue'),
  //   children: [
  //     {
  //       path: 'customorder',
  //       name: 'CustomOrder',
  //       component: () => import('../views/backend/CustomOrder.vue')
  //     },
  //     {
  //       path: 'customcheckout/:orderId',
  //       name: 'CustomCheckout',
  //       component: () => import('../views/backend/CustomCheckout.vue')
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  // 切換路由時回到畫面頂部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
