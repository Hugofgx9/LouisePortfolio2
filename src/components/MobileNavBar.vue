<script>
import MobileModal from '@/components/MobileModal.vue';

export default {
	name: 'MobileNavBar',
	components: {
		MobileModal,
	},
	data () {
		return {
			isMenuVisible: false,
		}
	},
	methods: {
		showMenu() {
			this.isMenuVisible = true;
		},
		hideMenu() {
			this.isMenuVisible = false;
		},
		menuEnter() {
			this.$refs.modelMenu.enterAnimation();
		},
	},
	computed: {
		windowWidth() {
			return this.$store.state.windowWidth;
		},
	}
}
	
</script>

<template>
	<nav>
		<button @click="showMenu">
			<span>Menu</span>
		</button>

		<transition 
			v-on:enter='menuEnter'>
			<mobile-modal v-show="isMenuVisible" @close="hideMenu" ref="modelMenu"/>
		</transition>

	</nav>
	
</template>

<style lang='scss' scoped>

nav{
	height: 9vw;

	button{
	position: fixed;
	left: -20vw;
	height: 9vw;
	width: 40vw;
	background-color: white;
	overflow: hidden;
	border: 1px solid $primary-color;
	font-family: 'Times New Roman';
	font-style: italic;
	text-align: right;
	border-radius: 50%;
	transition: all .1s ease;
	z-index: 10;

		span{
			padding-right: 9vw;
			font-size: 3.5vw;
		}
	}

	@media only screen and (max-width: 510px) {
		height: 50px;

		button{
			left: -90px;
			height: 50px;
			width: 195px;

			span{
				padding-right: 45px;
				font-size: 18px;
			}
		}
	}
}

	
</style>