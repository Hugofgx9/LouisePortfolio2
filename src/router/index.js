import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		component: require('@/views/Home.vue').default
	},
	{
		path: '/works',
		component: require('@/views/Works.vue').default
	},
	{
		path: '/about',
		component: require('@/views/About.vue').default
	},
	{
		path: '/contact',
		component: require('@/views/Contact.vue').default
	},
	{
		path: '/*',
		redirect: '/home'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
