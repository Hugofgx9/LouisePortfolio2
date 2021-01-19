<script>
export default {
	name: 'ImageOrVideo',
	props: ['type', 'src', 'alt'],
	data() {
		return {

		};
	},
	mounted() {
		// autoplay video
		// if (this.type == 'video') {
		// 	let video = this.$refs.media.querySelector('video');
		// 	if (video.paused) {
		// 		video.play();
		// 	}
		// }
	},
};
</script>

<template>
	<div ref='media' class='media'>
		<img 
			v-if="type == 'image'" 
			:src="`${src}`"
			:alt="alt"
		/>
		<video v-else-if="type == 'video'" controls loop playsinline >
			<source 
				:src="`${src}`"
				:alt="alt"
			/>
		</video>
	</div>
</template>

<style lang="scss" scoped>

img, video {
	width: 100%;
	height: auto;

}
</style>
