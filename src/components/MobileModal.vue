<script>
import OvalLink from '@/components/OvalLink.vue';

export default {
	name: 'MobileModal',
	components: {
		OvalLink,
	},
}
	
</script>

<template>
	<div id="modal-menu">
		<ul>
			<li>
				<oval-link text='Home' to='/home'/>
			</li>	
			<li>
				<oval-link text='Works' to='/works'/>
			</li>	
			<li>
				<oval-link text='About' to='/about'/>
			</li>	
			<li>
				<oval-link text='Contact' to='/contact'/>
			</li>	
		</ul>
		
	</div>
	
</template>

<style lang='scss' scoped>

#modal-menu {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100vw;
	height: 100vh;
	background-color: white;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;

	li{
		margin-bottom: 4vh;
	}
}
	
</style>