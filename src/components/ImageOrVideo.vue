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
	methods: {
		extension(filename) {
			return filename.split('.').pop();
		}
	},
	computed: {
		webpImages() {
			return this.type == 'image' 
				? this.src.filter(i => this.extension(i) === 'webp')
				: '';
		},
		classicImage() {
			return this.type == 'image' 
				? this.src.filter(i => this.extension(i) !== 'webp')
				: '';
		},

	}
};
</script>

<template>
	<div ref='media' class='media'>

		<picture v-if="type == 'image' && src.length > 1" :alt="alt">
			<source 
			v-for="img in webpImages" 
			:key="img" 
			:srcset="img" 
			:type="`image/${ extension(img) }`">
			<img 
			v-for="img in classicImage" 
			:key="img" 
			:src="img" 
			:type="extension(img)">
		</picture>

		<img 
			v-else-if="type == 'image' && src.length == 1" 
			:src="`${src}`"
			:alt="alt"
		/>

		<video v-else-if="type == 'video'" controls loop playsinline preload >
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
