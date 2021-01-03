<script>
import OvalLink from '@/components/OvalLink.vue';
import {gsap, Power3}from 'gsap';

export default {
	name: 'MobileModal',
	components: {
		OvalLink,
	},
	data () {
		return {
			ovalStyle: {
				width: '30vh',
				height: '7vh',
			},
			links: [
				{ lib: 'Home', to: '/home', style: {width: '30vh',height: '7vh'}},
				{ lib: 'Works', to: '/works', style: {width: '30vh',height: '7vh'}},
				{ lib: 'About', to: '/about', style: {width: '30vh',height: '7vh'}},
				{ lib: 'Contact', to: '/contact', style: {width: '30vh',height: '7vh'}},
			],
		}
	},
	methods: {
		close () {
			this.$emit('close');
		},
		enterAnimation() {
			let li = document.querySelector('#modal-menu li');
			let height = li.getBoundingClientRect().height + parseFloat(window.getComputedStyle(li).marginBottom);

			gsap.from('#modal-menu li', .5, {
				opacity: 0,
				y: - height,
				stagger: {
					amount: .6,
				},
			});
		}
	}
}
	
</script>

<template>
	<div id="modal-menu">
		<ul>
			<li v-for="link in links" :key="link.lib" @click="close">
				<oval-link :text="link.lib" :to="link.to" :myStyle="link.style" />
			</li>	
		</ul>
		
	</div>
	
</template>

<style lang='scss' scoped>

#modal-menu {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100vw;
	height: 100vh;
	background-color: white;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;

	li{
		margin-bottom: 4vh;
		position: relative;

		@for $i from 1 through 4 {
			&:nth-of-type(#{$i}) {
				z-index: 4 - $i;
			}
		}


	}
}
	
</style>