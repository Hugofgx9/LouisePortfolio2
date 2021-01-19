<template>
	<ul class='select-color'>
		<li v-for="color in colors" :key="color.className"> 
			<ColorButton :color="color.btnColor" @click="changeColor(color.className)"/>
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
			colors: [
				{btnColor: '#00ff3d' , className: 'green'},
				{btnColor: 'black' , className: 'black'},
				{btnColor: '#1900FF' , className: 'blue'},
				],
		};
	},
	methods: {
		changeColor(newColor) {
			document.body.classList.remove(...this.colors.map( color => color.className ));
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
