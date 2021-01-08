<template>
	<button :style="bgColor" @click="$emit('click')"/>
</template>

<script>
export default {
	name: 'ColorButton',
	props: ['color', 'className'],
	computed: {
		bgColor () {
			return `background-color:${this.color}`;
		}
	},
	methods: {
		changeTextColor() {
			let italicText = document.querySelectorAll('.italic-text')
			italicText.forEach((el) => {
				el.classList.add('blue');
			})
		},
	},
	data() {
		return {
		};
	},
};
</script>

<style lang="scss" scoped>
	button{
		height: 1vw;
		width: 1vw;
		border-radius: 50%;
		cursor: pointer;
	}
</style>
