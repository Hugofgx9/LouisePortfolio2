<script>
import infiniteScroll from '@/utils/infiniteScroll.js';
import WorkList from '@/components/WorkList';
import { mapState } from 'vuex';
import gsap from 'gsap';

export default {
	name: 'InfiniteScroll',
	components: {
		WorkList
	},
	data () {
		return {
			numberOfList: 1,
			ContainerHeight: 0,
			ContentHeight: 0,
			myScroll: undefined,
		}
	},
	mounted () {
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
	</div>
</template>

<style lang='scss' scoped>

#infinit-scroll {
	height: calc(38vw + (2 * #{$global-padding}));
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>