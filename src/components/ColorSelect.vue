<template>
	<ul class='select-color'>
		<li v-for="color in colors" :key="color"> 
			<ColorButton :color="color" @click="changeColor(color)"/>
		</li>
	</ul>
</template>

<script>
import ColorButton from '@/components/ColorButton.vue';

export default {
	name: 'ColorSelect',
	components: {
		ColorButton,
	},
	data() {
		return {
			colors: ['green', 'black', 'blue'],
		};
	},
	methods: {
		changeColor(newColor) {
			document.body.classList.remove(...this.colors);
			document.body.classList.add(newColor);
		}
	}
};
</script>

<style lang="scss" scoped>
.select-color {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 5vw;
}
</style>
