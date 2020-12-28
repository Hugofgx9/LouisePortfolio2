<script>
export default {
  name: 'ImageOrVideo',
  props: ['type', 'src', 'alt'],
  data() {
    return {

    };
  },
};
</script>

<template>
	<div class='media'>
		<img 
			v-if="type == 'image'" 
			:src="`https://drive.google.com/uc?id=${src}`"
			:alt="alt"
		/>
		<video v-else-if="type == 'video'" autoplay loop muted >
			<source 
				:src="`https://drive.google.com/uc?export=download&id=${src}`"
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
