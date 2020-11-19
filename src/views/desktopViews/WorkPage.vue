<script>
export default {
  name: 'WorkPage',
  
}
</script>

<template>
  <div id="my-work">

		<h2> Bee and Flowers </h2>

		<div class="about-my-work">
			<ul class="about-list">
				<li class="software">
					<h3>SoftWare</h3>
					<ul class="about-item">
						<li>Cinema 4D</li>
						<li>Photoshop</li>
					</ul>
				</li>
				<li class="project">
					<h3>Project</h3>
					<div class="about-item">
						<p>Cover and animation for BastonBstnBaston</p>
					</div>
				</li>
			</ul>
		</div>

		<div>
			<img src="" alt=""/>
			<img src="" alt=""/>
		</div>

  </div>
</template>

<style lang='scss' scoped>

#my-work {
	display: grid;
	grid-template-columns: 1fr 405px;

	.about-my-work {
		grid-column: 2;

			h3 {
				font-weight: normal;
				border-bottom: solid 1px #111111;
				font-size: 2em;
				padding-bottom: .3em;
			}

			.about-item {
				margin-top: 18px;
				margin-bottom: 18px;
			}

	}
}

</style>