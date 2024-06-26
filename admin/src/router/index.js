import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: "/",
    name: "login",
    component: () => import('../views/auth/login'),
    meta: { guest: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/deshboard/Dashboard'),
    meta: { auth: true }
  },
  // Product
  {
    path: '/product-list',
    name: 'productList',
    component: () => import('../views/product/product'),
    meta: { auth: true },
  },
  {
    path: '/product-add',
    name: 'addProduct',
    component: () => import('../views/product/createproduct'),
    meta: { auth: true },
  },
  {
    path: '/product-edit',
    name: 'editProduct',
    component: () => import('../views/product/editproduct'),
    meta: { auth: true },
  },

  // Category 
  {
    path: '/category-list',
    name: 'categoryList',
    component: () => import('../views/categories/categories'),
    meta: { auth: true }
  },
  {
    path: '/subcategory-list',
    name: 'subCategoryList',
    component: () => import('../views/categories/subCategory'),
    meta: { auth: true }
  },
  {
    path: '/childcategory-list',
    name: 'childCategoryList',
    component: () => import('../views/categories/childcategory'),
    meta: { auth: true }
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import('../views/categories/brand'),
    meta: { auth: true }
  },
  {
    path: '/offer-category',
    name: 'offerCategory',
    component: () => import('../views/categories/offerCategory'),
    meta: { auth: true }
  },
  // Home page  slider
  {
    path: '/slider',
    name: 'slider',
    component: () => import('../views/home/slider'),
    meta: { auth: true }
  },
  {
    path: '/offer-product',
    name: 'offerproduct',
    component: () => import('../views/home/offerproduct'),
    meta: { auth: true }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/aditonal/news'),
    meta: { auth: true }
  },
  {
    path: '/featured-product',
    name: 'featuredProduct',
    component: () => import('../views/home/featuredProduct'),
    meta: { auth: true }
  },
  {
    path: '/promotional-video',
    name: 'videoAdd',
    component: () => import('../views/home/videoAdd'),
    meta: { auth: true }
  },
  {
    path: '/featured-add',
    name: 'featuredadd',
    component: () => import('../views/home/featuredadd'),
    meta: { auth: true }
  },
  {
    path: '/helmet-filter',
    name: 'helmets',
    component: () => import('../views/home/helmets'),
    meta: { auth: true }
  },
  // Inventory
  {
    path: '/stock-manage',
    name: 'stockManage',
    component: () => import('../views/inventory/stockManage'),
    meta: { auth: true }
  },
  {
    path: '/stock-check',
    name: 'stockCheck',
    component: () => import('../views/inventory/stockCheck'),
    meta: { auth: true }
  },
  // aditional
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/aditonal/contact'),
    meta: { auth: true }
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/aditonal/email'),
    meta: { auth: true }
  },
  {
    path: '/pending-order',
    name: 'pendingOrder',
    component: () => import('../views/aditonal/pendingOrder'),
    meta: { auth: true }
  },
  {
    path: '/approved-order',
    name: 'approvedOrder',
    component: () => import('../views/aditonal/approvedOrder'),
    meta: { auth: true }
  },
  {
    path: '/complete-order',
    name: 'completeOrder',
    component: () => import('../views/aditonal/completeOrder'),
    meta: { auth: true }
  },
  {
    path: '/cancel-order',
    name: 'cenceleOrder',
    component: () => import('../views/aditonal/cenceleOrder'),
    meta: { auth: true }
  },
  {
    path: '/return-order',
    name: 'returnOrder',
    component: () => import('../views/aditonal/returnOrder'),
    meta: { auth: true }
  },
  // Administration 
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/user'),
    meta: { auth: true }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('admin_token');
  axios.get(`${store.state.host}/verification-token`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null
        }
    })
    .then(res => {
    if(!res.data) {
      localStorage.removeItem('admin_token')
          token = null;
          store.dispatch('user/forceLogout');
        router.push('/').catch(()=>{});
    }
    }).catch(e => {
        if(e.response.status == 401){
            localStorage.removeItem('admin_token')
            store.dispatch('user/forceLogout');
            token = null;
            router.push('/');
        }
    })
  if (to.matched.some(record => record.meta.auth)) {
    if (!token) {
      next({
        name: 'login'
      })
    } else {
      const user_data = store.getters['user/GET_AUTH_INFO'];
      const permissionData = JSON.parse(user_data.permission);
      const type = user_data.type;

      if (type === 'admin') {
        next(); // Allow navigation for admin
      } else {
        const requestedLink = to.path;
        let hasPermission = false;

        // Check if any permission is a prefix of the requested path
        for (const item of permissionData) {
          if (requestedLink.startsWith(item.link)) {
            hasPermission = true;
            break;
          }
        }

        if (!hasPermission) {
          next({ path: permissionData[0].link }); // Redirect to the first permission path
        } else {
          next(); // Proceed with navigation
        }
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (token) {
      next({
        name: 'dashboard'
      })
    }
    else {
      next()
    }
  }
})
export default router
