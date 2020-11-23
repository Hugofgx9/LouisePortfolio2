<script>
import infiniteScroll from '@/myClass/infiniteScroll.js';

export default {
	name: 'InfiniteScroll',

	data () {
		return {
			projects: [
				{lib: 'Corona Virus', type: 'PRINT + ANIMATION', link:'work/coronavirus'},
				{lib: 'Marcel Breuer', type: 'BOOK', link:'work/coronavirus'},
				{lib: 'Bee And Flowers', type: 'ANIMATION', link:'work/coronavirus'},
				{lib: 'Raving In The Shower', type: 'COVER', link:'work/coronavirus'},
				{lib: 'Archetype', type: 'IKEA', link:'work/coronavirus'},
				{lib: 'clic clic', type: 'BIC', link:'work/coronavirus'},
				{lib: 'Recommandation', type: 'PRESENTATION', link:'work/coronavirus'},
				{lib: 'Drawings', type: 'SKETCH', link:'work/coronavirus'},
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
				<router-link :to='project.link'>
					<span class='italic-text'> {{ project.lib }} </span> - {{ project.type }} 
				</router-link>
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

		a, a span{
			color: black;
			transition: all .2s ease;

			
			&:hover, &:hover span{
				color: $second-color;
			}
		}
	}

	&::-webkit-scrollbar {
    display: none;
	}
}

	
</style>