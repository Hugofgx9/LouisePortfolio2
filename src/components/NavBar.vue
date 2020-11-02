<script>
import OvalLink from '@/components/OvalLink.vue'

export default {
	name: 'NavBar',
	components: {
		OvalLink,
	}, 
	computed: {
		windowWidth: function () {
			return this.$store.state.windowWidth;
		}
	}
}
	
</script>

<template>
	<nav>
		<ul>
			<li class='first-column'>
				<OvalLink text='Home' to='/home'/>
			</li>
			<li class='second-column'>
				<OvalLink text='Works' to='/works'/>
			</li>
			<li class='second-column'>
				<OvalLink text='About' to='/about'/>
			</li>
			<li class='second-column'>
				<OvalLink text='Contact' to='/contact'/>
			</li>
		</ul>
	</nav>
	
</template>

<style lang='scss' scoped>


ul {
	display: grid;
	grid-template-columns: 1fr repeat(3, 140px);
	grid-template-rows: auto;
	padding-bottom: 24px;



	li {
		grid-row: 1;

		&.second-column {
			justify-self: end;
		}

		a.router-link-active {
			display: none;
		}
	}
}
	
</style>