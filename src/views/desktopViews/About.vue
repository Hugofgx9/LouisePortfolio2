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
					<DraggableLink text="Contact me" to="/contact" color="black" class="button" />

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

<script>
import {gsap, Power1} from 'gsap';
import DraggableLink from '@/components/DraggableLink.vue';

export default {
	name: 'About',
	components: {
		DraggableLink
	},
	mounted() {
		this.appear();
		
	},
	methods: {
		appear() {
			let tl = gsap.timeline();

			tl.from('#about .paragraph-1', 1, {
				opacity: 0,
				ease: Power1.easeInOut,
			})
			.from('#about .cv-container h2', 1, {
				opacity: 0,
				ease: Power1.easeInOut,
			}, '<0.3')
			.from('#about .cv-container h2', 0.6, {
				y: -10,
				ease: Power1.easeInOut,
			}, '<')
			.from('#about .curriculum li', 0.6, {
				opacity: 0,
				ease: Power1.easeInOut,
				stagger: {
					each: 0.3,
				}
			}, '<0.3')		
			.from('#about .studies li', 0.6, {
				opacity: 0,
				ease: Power1.easeInOut,
				stagger: {
					each: 0.3,
				}
			}, '<')
			.from('#about .skills li', 0.6, {
				opacity: 0,
				ease: Power1.easeInOut,
				stagger: {
					each: 0.1,
				}
			}, '<');

		}
	}
}

</script>


<style lang='scss' scoped>

#about{
	display: grid;
	height: 80vh;
	grid-template-columns: 1fr 405px;
	align-items: center;
	
	.paragraph-1 {
		font-size: $big-font-size;
		padding-right: 7vw;
		position: relative;

	}

	.cv-container {

		h2{
			font-weight: normal;
			border-bottom: solid 1px $primary-color;
			font-size: 2em;
			padding-bottom: .3em;
		}

		li.cv-section {
			position: relative;

			.button{
				cursor: move;
				position: absolute;
				right: 0;
				transform: translate3d(-50%, 100%, 0);
				bottom: 0;
				z-index: 2;
				width: 160px;
				height: 45px;
			}

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
	@media (max-width: 933px) {
		grid-template-rows: auto auto;
		grid-template-columns: 1fr;

	}
	@media (max-width: 768px) {
		.paragraph-1{
			font-size: $big-font-mobile;
			padding: 0;
		}

		.cv-container {
			margin-top: 10vw;

			h2 {
				font-size: $big-font-mobile;
			}

			li.cv-section{
				font-size: 3.5vw;
			}
		}
	}

}
	
</style>