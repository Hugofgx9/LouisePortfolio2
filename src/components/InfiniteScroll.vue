<script>
import infiniteScroll from '@/myClass/infiniteScroll.js';
import { mapState } from 'vuex';

export default {
	name: 'InfiniteScroll',

	data () {
		return {
		}
	},
	beforeRouteEnter (to, from, next) {
  },
	mounted: function () {
		const myScroll = new infiniteScroll('#infinit-scroll-box', 'ul');
		if (this.projects) {
			this.fetchAllImage();
		}
		//this.preloadImg(`https://drive.google.com/uc?id=${this.projects[0].value.illustrations[0].id}`);
	},
	methods: {
		preloadImg: (url) => {
			let img = new Image();
			img.src = url;
			img.onload = () => console.log('img loaded');
		},
		fetchAllImage: () => {
			this.projects.map((project) => {
				console.log(project);
				this.preloadImg(`https://drive.google.com/uc?id=${project.value.illustrations[0].id}`);
				this.preloadImg(`https://drive.google.com/uc?id=${project.value.illustrations[1].id}`);
			});
			console.log('all imgs loaded')
		}
	},
	computed: {
		...mapState(['works', 'windowWidth']),
		projects: function() {
			return Object.entries(this.works).map(([key, value]) => ({key,value}));
		},
	}
}
	
</script>

<template>
	<div id='infinit-scroll-box' v-if="projects">
		<ul>
			<li v-for="project in projects" :key="project.key">
				<router-link :to="`work/${project.key}`">
					<span class='italic-text'> {{ project.value.title }} </span> - {{ project.value.type }} 
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