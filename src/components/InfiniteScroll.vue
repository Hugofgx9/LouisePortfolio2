<script>
import infiniteScroll from '@/myClass/infiniteScroll.js';
import WorkPage from '@/views/desktopViews/WorkPage';
import WorkList from '@/components/WorkList';
import { mapState } from 'vuex';
import gsap from 'gsap';

export default {
	name: 'InfiniteScroll',
	components: {
		WorkPage,
		WorkList
	},
	data () {
		return {
			loaded: false,
			numberOfList: 1,
			ContainerHeight: 0,
			ContentHeight: 0,
			myScroll: undefined,
		}
	},
	mounted () {
		this.loaded = true;
		this.myScroll = new infiniteScroll(this.$refs['infinit-scroll'], 
			this.$refs['infinit-scroll'].querySelector('ul'));

		this.numberOfList = 3;
	},
	beforeDestroyed () {
		this.myScroll.removeEventListener();
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
	<div ref="infinit-scroll" id='infinit-scroll' v-if="projects">
		<WorkList ref="scroll-content" v-for="item in numberOfList" :key="item"/>

		<!-- Use to prerender the items -->
		<div v-if="!loaded" style="display: none;">
			<WorkPage v-for="project in projects" :id="project.key" :key="project.key"/>
		</div>

	</div>
	
</template>

<style lang='scss' scoped>

#infinit-scroll {
	height: 100%;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>