<script>
export default {
  name: 'AboutMobile',
}

</script>

<template>
  <div id='about'>
		<p class='paragraph-1'>
			After having graduated from hight school in <span class='italic-text'> Management Science and Technology, </span> speciality <span class='italic-text'> Marketing </span> and <span class='italic-text'> Art </span> option with a <span class='italic-text'> "very good" </span> mention; I joined a <span class='italic-text'> school of Communication and Advertising </span> in Bordeaux 
		</p>
		<div class="cv-container">
			<ul>
				<li class='cv-section curriculum'>
					<h2>Curriculum</h2>
					<ul>
						<li>
							<span>2020</span>
							<span>Volunteer <br/> Graphic Design</span>
							<span>Possession <br/> Collective</span>
						</li>
						<li>
							<span>2020</span>
							<span>Practical Internship Graphic Design</span>
							<span>Possession <br/> Collective</span>
						</li>
					</ul>
				</li>
				<li class='cv-section studies'>
					<h2>Studies</h2>
					<ul>
						<li>
							<span>2019 - 20 Bordeaux</span>
							<span>DUT Information Communication Advertising speciality</span>
						</li>
						<li>
							<span>2017 - 20 Uzes</span>
							<span>BAC Science et Technologie du Management spécialité Marketing option Art</span>
						</li>
					</ul>
				</li>
				<li class='cv-section skills'>
					<h2>Skills</h2>
					<ul>
						<li><span>Adobe Suite</span></li>
						<li><span>Cinema 4D</span></li>
						<li><span>Web Design</span></li>
						<li><span>Web / Digital Marketing</span></li>
						<li><span>Advertising Analysis</span></li>
						<li><span>Advertising Strategy</span></li>
					</ul>
				</li>

			</ul>
			
		</div>

  </div>
</template>

<style lang='scss' scoped>

#about{
	height: 100%;
	margin-top: calc(2* #{$global-padding});

	// align-items: center;
	
	.paragraph-1 {
		font-size: $big-font-mobile;
	}

	.cv-container {
	margin-top: calc(4 * #{$global-padding});

		h2{
			font-size: $big-font-mobile;
			font-weight: normal;
			border-bottom: solid 1px $primary-color;
			padding-bottom: .3em;
		}

		li.cv-section {

			&.curriculum, &.studies{
				li {
					display: grid;
					grid-template-columns: 78px 2fr 2fr;
					margin-top: 24px;

					span:not(:first-of-type) {
							text-align: right;
					}
				}
				&.studies {
					span:nth-of-type(2) {
						grid-column: 2/4;
						padding-left: 40px;
					}
				}
			}

			&.skills ul {
				display: grid;
				grid-auto-flow: column;
				grid-template-rows: repeat(3, auto);
				padding-top: 24px;

				li {
					display: block;
					margin: 0;
					&:nth-last-child(-n+3) {
						text-align: right;
					}
				}
			}

			&:not(:first-of-type) {
				margin-top: 24px;
			}
		}
	}
}
	
</style>