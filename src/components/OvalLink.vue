<script>
export default {
	name: 'OvalLink',

	props: {
		text: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
		},
	},

	data () {
		return {
			classScreen: 'lg'
		}
	},

	methods: {
		sortWidth: function () {
			if ( this.$store.state.windowWidth > 700) {
				this.classScreen = 'lg';
			} else {
				this.classScreen = 'sm';
			}
		}
	},
	watch: {
		'$store.state.windowWidth': function() {
			this.sortWidth();
		},
	}

	// data () {
	//   return { 
	//   	windowWidth: 1 }
	// },
}

</script>

<template>
	<router-link :class="classScreen" :to='to'>
		{{ text }}
	</router-link>
</template>

<style lang='scss' scoped>
a {
	height: 30px;
	overflow: hidden;
	border: 1px solid $primary-color;
	width: 120px;
	display: flex;
	font-style: italic;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: all .1s ease;

	&:hover {
		background-color: $primary-color;
		color: white;

	}

	&.sm {
		width: 20vw;
	}
}
</style>