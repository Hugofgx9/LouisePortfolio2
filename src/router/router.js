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
		component: require('@/views/desktopViews/Works.vue').default
	},
	{
		path: '/about',
		component: require('@/views/desktopViews/About.vue').default
	},
	{
		path: '/contact',
		component: require('@/views/desktopViews/Contact.vue').default
	},
	{
		path: '/workpage/:id',
		component: require('@/views/desktopViews/WorkPage.vue').default
	},
	{
		path: '/workpage',
		component: require('@/views/desktopViews/WorkPage.vue').default
	},
	{
		path: '/*',
		redirect: '/home',
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router