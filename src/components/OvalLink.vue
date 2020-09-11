<script>
export default {
	name: 'OvalLink',
	props: {
		text: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
		},
	},

}
</script>

<template>
	<router-link :to='to'>
		{{ text }}
	</router-link>
</template>

<style lang='scss' scoped>
a {
	height: 30px;
	overflow: hidden;
	border: 1px solid $primary-color;
	width: 120px;
	display: flex;
	font-style: italic;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: all .1s ease;

	&:hover {
		background-color: $primary-color;
		color: white;

	}
}
</style>