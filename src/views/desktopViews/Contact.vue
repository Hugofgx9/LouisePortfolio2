<script>
import gsap from 'gsap';

export default {
	name: 'Contact',
	mounted() {
	},
	methods: {
	}
}
</script>

<template>
	<div id='contact'>
		<p class='paragraph-1'>
			Contact me in mail
			<a href='mailto:louiseperedesfantozzi@gmail.com'>
				<span class='italic-text'>louiseperedesfantozzi@gmail.com</span>
			</a>
			or if you prefer, <br/>
			I'm present on LinkedIn
			<a href='https://www.linkedin.com/in/louise-peredes-fantozzi-0457a719a/' target='_blank'>
				<span class="italic-text">Louise Peredes Fantozzi</span>
			</a>
			and on Instagram :
			<a href="https://www.instagram.com/louiseperedesfantozzi/" target="_blank">
				<span class="italic-text">@louise.fantozzi</span>
			</a>
		</p>

	</div>
</template>

<style lang='scss' scoped>

#contact{
	font-size: $big-font-size;
	display: grid;
	height: 100%;

	.paragraph-1 {
		text-align: right;

		span {
			display: block;
		}
	}
}
	
</style>