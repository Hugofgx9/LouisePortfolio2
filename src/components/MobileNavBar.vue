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
		openMenu: function() {
			this.isMenuVisible = !this.isMenuVisible;
		}
	},
	computed: {
		windowWidth: function () {
			return this.$store.state.windowWidth;
		}
	}
}
	
</script>

<template>
	<nav>
		<button @click="openMenu">
			<span>Menu</span>
		</button>

		<mobile-modal v-show="isMenuVisible"/>

	</nav>
	
</template>

<style lang='scss' scoped>

button{
	position: absolute;
	left: -95px;
	height: 45px;
	overflow: hidden;
	border: 1px solid $primary-color;
	width: 190px;
	text-align: right;
	// display: flex;
	// font-style: italic;
	// justify-content: center;
	// align-items: center;
	border-radius: 50%;
	transition: all .1s ease;
	z-index: 10;

	span{
		padding-right: 50px;
	}
}

	
</style>