<script>
import OvalLink from '@/components/OvalLink.vue';
import gsap from 'gsap';
import ColorSelect from '@/components/ColorSelect.vue';

export default {
	name: 'NavBar',
	components: {
		OvalLink,
		ColorSelect
	}, 
	mounted () {
		let navItem = document.querySelectorAll('nav ul li');

		gsap.from(navItem, {
			duration: 0.5, 
			ease: "sine.inOut", 
			//yPercent: 100,
			opacity: 0, 
			stagger: 0.1,
		});
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
				<ColorSelect/>
			</li>
			<li class='third-column'>
				<OvalLink text='Works' to='/works'/>
			</li>
			<li class='third-column'>
				<OvalLink text='About' to='/about'/>
			</li>
			<li class='third-column'>
				<OvalLink text='Contact' to='/contact'/>
			</li>
		</ul>
	</nav>
	
</template>

<style lang='scss' scoped>



nav>ul {
	display: grid;
	grid-template-columns: 140px 1fr repeat(3, 140px);
	grid-template-rows: auto;
	padding-bottom: 24px;
	position: relative;
	z-index: 1;
	
	li {
		grid-row: 1;

		&.second-column {
			//justify-self: center;
			display: grid;

		}

		&.third-column {
			justify-self: end;
		}

		a.router-link-active {
		}

	}
}
	
</style>