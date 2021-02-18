<template>
	<div class="date">
		<span class="month" > {{ month.substr(0,4) }} </span>
		<span> - </span>
		<span class="year" > {{ year }} </span>
	</div>
</template>

<script>
export default {
	name: 'Date',

	data() {
		return {
			year: 0,
			month: '',
		};
	},
	mounted() {
		this.month = Intl.DateTimeFormat(navigator.language, { month: 'long'}).format(new Date()) // Friday, Dec 27
		this.year = Intl.DateTimeFormat(navigator.language, { year: 'numeric'}).format(new Date()) // Friday, Dec 27
	}
};
</script>

<style lang="scss" scoped>

.date {
	display: inline-block;
	position: absolute;
	//font-size: 12px;
	top: calc( #{$global-padding} - 4px);
	right: calc( 0px - #{$global-padding});
	transform-origin: center center;
	transform: rotate(90deg) translate3d(50%, 50%, 0);

	.month {
		text-transform: uppercase;
	}
}
</style>
