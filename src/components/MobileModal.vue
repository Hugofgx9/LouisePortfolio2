<script>
import OvalLink from '@/components/OvalLink.vue';

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
	
}
	
</script>

<template>
	<div id="modal-menu">
		<ul>
			<li v-for="link in links" :key="link.lib">
				<oval-link :text="link.lib" :to="link.to" :myStyle="link.style"/>
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
	}
}
	
</style>