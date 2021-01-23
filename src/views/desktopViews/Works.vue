<script>
import InfiniteScroll from '@/components/InfiniteScroll.vue';

export default {
	name: 'Works',
	components: {
		InfiniteScroll,
	},
}
</script>

<template>
	<div id="works">
		<InfiniteScroll/>
	</div>
</template>

<style lang='scss' scoped>

#works{
	height: calc(100vh - (32px + 3 * 24px));
	max-height: 60vw;
	font-size: $big-font-size;
/* 	mask-image: linear-gradient(0deg, 
		rgba(255,255,255,0) 0%, 
		rgba(255,255,255,0.3) 3%, 
		rgba(255,255,255,0.5) 4%, 
		rgba(255,255,255,1) 7%, 
		rgba(255,255,255,1) 93%, 
		rgba(255,255,255,0.5) 96%, 
		rgba(255,255,255,0.3) 97%, 
		rgba(255,255,255,0) 100%
	); */
}
	
</style>