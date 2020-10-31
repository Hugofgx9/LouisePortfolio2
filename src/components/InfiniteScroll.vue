<script>
import infiniteScroll from '../myClass/infiniteScroll.js';

export default {
	name: 'InfiniteScroll',

	data () {
		return {
			projects: [
				{lib: 'Corona Virus', type: 'PRINT + ANIMATION'},
				{lib: 'Marcel Breuer', type: 'BOOK'},
				{lib: 'Bee And Flowers', type: 'ANIMATION'},
				{lib: 'Raving In The Shower', type: 'COVER'},
				{lib: 'Archetype', type: 'IKEA'},
				{lib: 'clic clic', type: 'BIC'},
				{lib: 'Recommandation', type: 'PRESENTATION'},
				{lib: 'Drawings', type: 'SKETCH'},
			]
		}
	},

	mounted: function () {
		const myScroll = new infiniteScroll('#infinit-scroll-box', 'ul');
	},

	methods: {
	},

	computed: {
		windowWidth: function () {
			return this.$store.state.windowWidth;
		}
	}
}
	
</script>

<template>
	<div id='infinit-scroll-box'>
		<ul>
			<li v-for="project in projects" :key="project.lib">
				<a href="" >
					<span class='italic-text'> {{ project.lib }} </span> - {{ project.type }} 
				</a>
			</li>
		</ul>
	</div>
	
</template>

<style lang='scss' scoped>

#infinit-scroll-box {
	height: 100%;
	overflow: scroll;

	li{
		padding-bottom: 0.8vw;

		.italic-text {
			color: black;
		}

		a{

			&:hover {
				color: $second-color;
			}
		}

	}

	&::-webkit-scrollbar {
    display: none;
	}
}

	
</style>