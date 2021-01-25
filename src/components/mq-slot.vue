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
			breakpoints: [
				{ screenTyp:'sm', value: 768 },
				{ screenTyp:'lg', value: Infinity },
			],
			windowWidth: 1300,
			condition: false,
		}
	},
	mounted() {
	},
	created () {
		this.updateWidth();
		window.addEventListener( 'resize', () => {
			this.updateWidth();
		}, false)
	}, 
	methods: {
		updateWidth () {
				this.windowWidth = window.innerWidth;
				this.checkWidth();
		}, 
		checkWidth () {
			let index = this.breakpoints.findIndex(e => e.screenTyp === this.mq);
			if (index == 0) {
				this.condition = this.breakpoints[index].value > this.windowWidth;
			} 
			else {
				this.condition = this.breakpoints[index - 1].value < this.windowWidth 
				&& this.windowWidth < this.breakpoints[index].value;
			}
		}
	},
}
</script>

<template>
	<div class="app-container" v-if="this.condition">
		<slot></slot>
	</div>
	
</template>

<style lang="scss">
	.app-container {
	}
	
</style>