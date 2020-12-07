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
		color: {
			type: String,
			default: 'white',
		},
		myStyle: {
			type: Object,
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
	}, 
	computed: {
		style: function () {
			return this.myStyle;
		},
		colorClass: function () {
			return this.color;
		}
	},

	// data () {
	//   return { 
	//   	windowWidth: 1 }
	// },
}

</script>

<template>
	<router-link :class="[classScreen, colorClass]" :to='to' :style="style">
		{{ text }}
	</router-link>
</template>

<style lang='scss' scoped>
a {
	height: 30px;
	overflow: hidden;
	border: 1px solid;
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: all .1s ease;
  font-family: 'Times New Roman';
  font-style: italic;
  font-size: 18px;

	&.white {
		border-color: $primary-color;
		background-color: white;
		color: black;

		&:hover, &.router-link-active {
			background-color: $primary-color;
			color: white;
		}
	}

	&.black {
		border-color: $primary-color;
		background-color: $primary-color;
		color: white;

		&:hover, &.router-link-active {
			background-color: white;
			color: $primary-color;
		}
	}

	&.sm {
		width: 20vw;
	}
}
</style>