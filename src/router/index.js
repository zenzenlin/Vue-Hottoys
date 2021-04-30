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
    component: () => import('../views/Index.vue'),
    children: [
      {
        name: 'index',
        path: '/',
        component: () => import('../views/NewMain.vue')
      },
      {
        name: 'list',
        path: '/products',
        component: () => import('../views/List.vue')
      },
      {
        name: 'singleproduct',
        path: '/product/:productId',
        component: () => import('../views/SingleProduct.vue')
      },
      {
        name: 'cart',
        path: '/cart',
        component: () => import('../views/Cart.vue')
      },
      {
        name: 'checkout',
        path: '/checkout',
        component: () => import('../views/Checkout.vue')
      },
      {
        name: 'payCheck',
        path: '/paycheck/:orderId',
        component: () => import('../views/PayCheck.vue')
      },
      // {
      //   name: 'payment',
      //   path: '/payment',
      //   component: () => import('../views/Payment.vue')
      // },
      {
        name: 'finishpayment',
        path: '/finishpayment',
        component: () => import('../views/FinishPayment.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/Product.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'productlist',
        name: 'ProductList',
        component: () => import('../views/ProductList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/Coupon.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'customorder',
        name: 'CustomOrder',
        component: () => import('../views/CustomOrder.vue')
      },
      {
        path: 'customcheckout/:orderId',
        name: 'CustomCheckout',
        component: () => import('../views/CustomCheckout.vue')
      }
    ]
  }
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
