<script>
export default {
	name: 'NavBar',
}
	
</script>

<template>
	<nav>
		<ul>
			<li>
				<router-link to='/'>Home</router-link>
			</li>
			<li>
				<router-link to='/'>Works</router-link>
			</li>
			<li>
				<router-link to='/'>About</router-link>
			</li>
			<li>
				<router-link to='/'>Contact</router-link>
			</li>
		</ul>
	</nav>
	
</template>

<style lang='scss' scoped>
	
</style>