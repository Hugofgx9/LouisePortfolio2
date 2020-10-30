<script>
export default {
	name: 'mqSlot',
	props: {
		mq: {
			type: String,
			required: true,
		} 			
	},
	data() {
		return {
			breakpoints: {
				sm: 768,
				lg: Infinity,
			},
			windowWidth: 0,
		}
	},
	created: function () {
		this.updateWidth();
		console.log(this.breakpoints[this.mq]);
	}, 
	methods: {
		updateWidth: function () {
			window.addEventListener( 'resize', () => {
				this.$store.commit('setWindowWidth')
				this.windowWidth = this.$store.state.windowWidth;
				console.log(this.breakpoints[this.mq] > this.windowWidth);
			}, false)
		}
	},
}
</script>

<template>
	<div v-if="this.breakpoints[mq] > this.windowWidth">
		<slot></slot>
	</div>
	
</template>

<style lang="scss">
	
</style>