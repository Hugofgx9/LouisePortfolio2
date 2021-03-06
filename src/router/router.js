import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
	{
		path: '/home',
		components: {
			default: () => import('@/views/desktopViews/Home.vue'),
			mobile: () => import('@/views/mobileViews/MobileHome.vue'),
		},
	},
	{
		path: '/works',
		components: {
			default: () => import('@/views/desktopViews/Works.vue'),
		},
		//if mobile
		//redirect : '/home',
	},
	{
		path: '/about',
		components: {
			default: () => import('@/views/desktopViews/About.vue'),
			mobile: () => import('@/views/mobileViews/MobileAbout.vue'),
		}
	},
	{
		path: '/contact',
		components: {
			default: () => import('@/views/desktopViews/Contact.vue'),
			mobile: () => import('@/views/mobileViews/MobileContact.vue'),
		}
	},
	{
		path: '/work/:id',
		components: {
			default: () => import('@/views/desktopViews/WorkPage.vue'),
			mobile: () => import('@/views/mobileViews/MobileWorkPage.vue'),
		},
		props: {
			default: true,
			mobile: true
		}
	},
	{
		path: '/*',
		redirect: '/home',
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})

export default router
