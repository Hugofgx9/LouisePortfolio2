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
			windowWidth: 0,
			condition: false,
		}
	},
	created: function () {
		this.makeCondition();
		this.updateWidth();
		//console.log(this.breakpoints[this.breakpoints.findIndex(e => e.screenTyp === this.mq) - 1 ].value);
	}, 
	methods: {
		updateWidth: function () {
			window.addEventListener( 'resize', () => {
				this.windowWidth = window.innerWidth;
				//this.$store.commit('setWindowWidth')
				//this.windowWidth = this.$store.state.windowWidth;
				this.makeCondition();
			}, false)
		}, 
		makeCondition: function() {
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
	<div v-if="this.condition">
		<slot></slot>
	</div>
	
</template>

<style lang="scss">
	
</style>