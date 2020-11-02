<script>
import OvalLink from '@/components/OvalLink.vue';
export default {
	name: 'MobileHome',
	components: {
		OvalLink,
	},
	data() {
		return {
			ovalStyle: {
				width: 'max(40vw, 180px)', 
				height: 'max(10vw, 50px)',
			}
		}
	}
}
</script>

<template>
	<div id='home'>
		<p class='paragraph-1'>Hi, <br/>
			My name is <span class='italic-text'> Louise Peredes Fantozzi </span>
		</p>
		<p class='paragraph-2'>
			I'm <span class='italic-text'> French </span> student in the <br/> 
			<span class='italic-text'> DUT Information Communication </span> <br/>
			speciality <span class='italic-text'> Advertising </span> and <br/>
			I'm passionate <br/>
			about <span class='italic-text'> Graphic Design </span> <br/>
		</p>
		<div class="button-container">
			<oval-link class="view-my-work" text="View my work" to="/" :myStyle="this.ovalStyle"/>
		</div>

	</div>
</template>

<style lang='scss' scoped>

#home{
	font-size: $big-font-mobile;
	display: grid;
	height: 80vh;
	grid-template-rows: 1fr 1fr 1fr;
	align-items: center;

	.paragraph-1 {
	}

	.paragraph-2 {
		text-align: right;
		align-self: start;
	}

	.button-container {
		.view-my-work{
			position: absolute;
			right: -4vw;
			font-size: 3.5vw;
		}
	}
}
	
</style>