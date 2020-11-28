<script>
import infiniteScroll from '@/myClass/infiniteScroll.js';
import WorkPage from '@/views/desktopViews/WorkPage';
import WorkList from '@/components/WorkList';
import { mapState } from 'vuex';

export default {
	name: 'InfiniteScroll',
	components: {
		WorkPage,
		WorkList
	},
	data () {
		return {
			loaded: false,
			numberOfList: 3,
			ContainerHeight: 0,
			ContentHeight: 0,
			myScroll: undefined,
		}
	},
	mounted () {
		this.myScroll = new infiniteScroll(this.$refs['infinit-scroll-box'], this.$refs['infinit-scroll-box'].querySelector('ul'));
		this.loaded = true;

		//how to determine number of list ?
		this.numberOfList = 3;
	},
	beforeDestroyed () {
		this.myScroll.removeEventListener();
	},
	methods: {
		onScroll (element) {
			element.addEventListener('scroll', () => {
				console.log(element.scrollTop);
			})
		}
	},
	computed: {
		...mapState(['works', 'windowWidth']),
		projects() {
			return Object.entries(this.works).map(([key, value]) => ({key,value}));
		},
		// workListHeight() {
		// 	return this.$refs['infinit-scroll-box'].
		// }
	}
}
	
</script>

<template>
	<div ref="infinit-scroll-box" id='infinit-scroll-box' v-if="projects">
		<WorkList ref="scroll-content" v-for="item in numberOfList" :key="item"/>

		<!-- Use to prerender the items -->
		<div v-if="!loaded" style="display: none;">
			<WorkPage v-for="project in projects" :id="project.key" :key="project.key"/>
		</div>

	</div>
	
</template>

<style lang='scss' scoped>

#infinit-scroll-box {
	height: 100%;
	overflow: scroll;

	&::-webkit-scrollbar {
    display: none;
	}
}
</style>