<script>
import infiniteScroll from '@/myClass/infiniteScroll.js';
import { mapState } from 'vuex';
import WorkPage from '@/views/desktopViews/WorkPage';

export default {
	name: 'InfiniteScroll',
  components: {
    WorkPage
  },

	data () {
		return {
		}
	},
	mounted: function () {
		// les ul dupliquer contiennet des a et non des link, il faudrait les changer en link;
		//const myScroll = new infiniteScroll('#infinit-scroll-box', 'ul');
	},
	methods: {
	},
	computed: {
		...mapState(['works', 'windowWidth']),
		projects() {
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
		<div style="display: none;">
			<!-- Use to prerender the items -->
			<WorkPage v-for="project in projects" :id="project.key" :key="project.key"/>
		</div>
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