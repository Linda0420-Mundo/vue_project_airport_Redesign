import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 路由配置
const routes = [
  // 首頁
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首頁',
      description: '台中國際機場官方網站'
    }
  },

  // 航班與交通
  {
    path: '/flights',
    name: 'flights',
    redirect: '/flights/departures',
    meta: {
      title: '航班與交通',
      description: '航班資訊與交通方式'
    },
    children: [
      {
        path: 'departures',
        name: 'departures',
        component: () => import('../views/flights/DeparturesView.vue'),
        meta: {
          title: '出發航班',
          description: '台中國際機場出發航班資訊'
        }
      },
      {
        path: 'arrivals',
        name: 'arrivals',
        component: () => import('../views/flights/ArrivalsView.vue'),
        meta: {
          title: '抵達航班',
          description: '台中國際機場抵達航班資訊'
        }
      }
    ]
  },
  {
    path: '/transportation',
    name: 'transportation',
    redirect: '/transportation/public',
    meta: {
      title: '交通方式',
      description: '前往機場的交通方式'
    },
    children: [
      {
        path: 'public',
        name: 'public-transport',
        component: () => import('../views/transportation/PublicTransportView.vue'),
        meta: {
          title: '大眾運輸',
          description: '前往機場的大眾運輸方式'
        }
      },
      {
        path: 'shuttle',
        name: 'shuttle',
        component: () => import('../views/transportation/ShuttleView.vue'),
        meta: {
          title: '接送與接駁',
          description: '機場接送與接駁車服務'
        }
      }
    ]
  },

  // 通關流程
  {
    path: '/checkin',
    name: 'checkin',
    redirect: '/checkin/steps',
    meta: {
      title: '通關流程',
      description: '機場通關流程指南'
    },
    children: [
      {
        path: 'steps',
        name: 'checkin-steps',
        component: () => import('../views/checkin/CheckinStepsView.vue'),
        meta: {
          title: '報到流程',
          description: '台中國際機場報到流程指南'
        }
      },
      {
        path: 'security',
        name: 'security',
        component: () => import('../views/checkin/BaggageSecurityView.vue'),
        meta: {
          title: '行李安檢',
          description: '台中國際機場行李安檢相關規定與注意事項'
        }
      },
      {
        path: 'customs',
        name: 'customs',
        component: () => import('../views/checkin/CustomsView.vue'),
        meta: {
          title: '海關檢查',
          description: '台中國際機場海關檢查規定'
        }
      }
    ]
  },

  // 航站導覽
  {
    path: '/terminal',
    name: 'terminal',
    redirect: '/terminal/map',
    meta: {
      title: '航站導覽',
      description: '台中國際機場航站設施導覽'
    },
    children: [
      {
        path: 'map',
        name: 'terminal-map',
        component: () => import('../views/terminal/TerminalMapView.vue'),
        meta: {
          title: '航站平面圖',
          description: '台中國際機場航站平面圖'
        }
      },
      {
        path: 'facilities',
        name: 'facilities',
        component: () => import('../views/terminal/FacilitiesView.vue'),
        meta: {
          title: '設施服務',
          description: '台中國際機場設施與服務'
        }
      }
    ]
  },

  // 最新消息
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue'),
    meta: {
      title: '最新消息',
      description: '台中國際機場最新消息與公告'
    }
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: () => import('../views/NewsDetailView.vue'),
    meta: {
      title: '新聞詳情',
      description: '台中國際機場新聞詳情'
    }
  },
  {
    path: '/tender',
    name: 'tender',
    component: () => import('../views/TenderView.vue'),
    meta: {
      title: '招標資訊',
      description: '台中國際機場招標資訊'
    }
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/MediaView.vue'),
    meta: {
      title: '影音專區',
      description: '台中國際機場影音專區'
    }
  },

  // 聯絡我們
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: '聯絡我們',
      description: '台中國際機場聯絡方式'
    }
  },
  {
    path: '/contact/feedback',
    name: 'feedback',
    component: () => import('../views/contact/FeedbackView.vue'),
    meta: {
      title: '意見反映',
      description: '台中國際機場意見反映'
    }
  },
  {
    path: '/sitemap',
    name: 'sitemap',
    component: () => import('../views/SitemapView.vue'),
    meta: {
      title: '網站導覽',
      description: '台中國際機場網站導覽'
    }
  },

  // 關於我們
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: '關於我們',
      description: '關於台中國際機場'
    }
  },

  // 作品集
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: {
      title: '作品集',
      description: '網站頁面作品展示'
    }
  },

  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: '頁面不存在',
      description: '您所尋找的頁面不存在'
    }
  }
]

// 創建路由實例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 全局前置守衛 - 設置頁面標題
router.beforeEach((to, from, next) => {
  // 設置頁面標題
  document.title = to.meta.title ? `${to.meta.title} | 台中國際機場` : '台中國際機場'
  next()
})

export default router
