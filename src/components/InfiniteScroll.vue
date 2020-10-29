<script>
import infiniteScroll from '../myClass/infiniteScroll.js';

export default {
	name: 'InfiniteScroll',

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
			<li>First element</li>
			<li>Second element</li>
			<li>Third element</li>
			<li>Fourth element</li>
		</ul>
	</div>
	
</template>

<style lang='scss' scoped>

#infinit-scroll-box {
	height: 200px;
	overflow: scroll;

	li{
		font-size: 40px;
	}

	&::-webkit-scrollbar {
    display: none;
	}
}

	
</style>