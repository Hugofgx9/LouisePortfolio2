<script>
export default {
  name: 'Home',
}
</script>

<template>
  <div id='home'>
		<p class='paragraph-1'>Hi, <br/>
			My name is <span class='italic-text'> Louise Peredes Fantozzi </span>
		</p>
		<p class='paragraph-2'>
			I'm <span class='italic-text'> French </span> student <br/> 
			in the <span class='italic-text'> DUT Information Communication </span> <br/>
			speciality <span class='italic-text'> Advertising </span> and <br/>
			I'm passionate about <span class='italic-text'> Graphic Design </span> <br/>
		</p>
  </div>
</template>

<style lang='scss' scoped>

#home{
	font-size: $big-font-size;
	display: grid;
	height: 100%;
	grid-template-rows: 1.1fr 1fr;
	align-items: center;

	.paragraph-1 {
	}

	.paragraph-2 {
		text-align: right;
	}
}
	
</style>