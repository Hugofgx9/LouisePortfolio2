<script>
import mqSlot from '@/components/mq-slot.vue';
import Loader from '@/components/Loader.vue';
import NavBar from '@/components/NavBar.vue';
import MobileNavBar from '@/components/MobileNavBar.vue';
import Date from '@/components/Date.vue';
import gsap from 'gsap';

export default {
	components: {
		NavBar,
		mqSlot,
		MobileNavBar,
		Loader,
		Date,
	},

	data () {
		return {
			appAlreadyOpen: false,
		}
	},

	methods: {
		enter: function (el, done) {
			gsap.from(el, {
				opacity: 0,
				duration: 0.7,
				ease: 'power2.inOut'
			})
			done()
		},
		leave: function (el, done) {
			gsap.to(el, {
				opacity: 0,
				duration: 1,
				ease: 'power2.inOut'
			})
			done()
		}

	},

	mounted() {
		setTimeout(() => {
			this.appAlreadyOpen = true
		}, 1000);
	},
}

</script>

<template>
	<div id="app">
		<loader :isAppMounted='appAlreadyOpen' >
			<mq-slot mq="lg" class="desktop">
				<nav-bar />
				<transition
					v-on:leave="leave" 
					v-on:enter="enter" 
				>
					<router-view :key="$route.path"/>
				</transition>
				<date/>
			</mq-slot>
			
			<mq-slot mq="sm" class="mobile">
				<mobile-nav-bar />
					<router-view name="mobile" :key="$route.path"/>
			</mq-slot>
		</loader>
	</div>
</template>

<style lang="scss">

@font-face {
	font-family: "GGX88 W01 Light";
	src: url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.eot'); /* IE9*/
	src: url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.eot?#iefix') format("embedded-opentype"), /* IE6-IE8 */
	url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.woff2') format("woff2"), /* chrome、firefox */
	url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.woff') format("woff"), /* chrome、firefox */
	url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.ttf') format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
	url('~@/assets/font/2396420f1f8aeec33513457aef0c0297.svg#GGX88 W01 Light') format("svg"); /* iOS 4.1- */
}


</style>
