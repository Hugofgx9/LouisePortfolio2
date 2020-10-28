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
	<div>
		<div id='works'>
			<p class='paragraph-1'>
				With my <span class='italic-text'> studies, </span> I work a lot in <span class='italic-text'> groups </span><br/> 
				around briefs, together we imagine <br/> 
				a <span class='italic-text'> communication </span> and <span class='italic-text'> creative strategies </span> <br/> 
				to meet the <span class='italic-text'> needs </span> and <span class='italic-text'> demand of the client </span> <br/> 
			</p>
			<p class='paragraph-2'>
				For <span class='italic-text'> my part, </span> I work around <br/> 
				often <span class='italic-text'> fictitious personal projects. </span> <br/> 
				This allowed me to <span class='italic-text'> discover graphic design </span> <br/> 
				and <span class='italic-text'> complete my schooling </span> <br/> 
			</p>
		</div>
		<div>
			<InfiniteScroll/>
		</div>
		
	</div>
</template>

<style lang='scss' scoped>

#works{
	font-size: $big-font-size;
	display: grid;
	height: 100%;
	grid-template-rows: 1fr 1fr;
	align-items: center;

	.paragraph-1 {
		padding-bottom: 3vw;
	}

	.paragraph-2 {
		text-align: right;
	}
}
	
</style>