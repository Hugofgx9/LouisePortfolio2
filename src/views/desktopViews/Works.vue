<script>
import InfiniteScroll from '@/components/InfiniteScroll.vue';

export default {
	name: 'Works',
	components: {
		InfiniteScroll,
	}
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
}
	
</style>