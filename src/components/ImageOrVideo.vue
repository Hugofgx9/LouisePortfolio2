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
			:src="`${src}`"
			:alt="alt"
		/>
		<video v-else-if="type == 'video'" autoplay loop muted >
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
