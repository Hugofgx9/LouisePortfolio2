import gsap from 'gsap';
import { getTranslateValues } from '@/utils/getTranslateValues';

export default class draggable {
	constructor (element, link, vue) {

		this.$btn = element;
		this.link = link;
		this.vue = vue;

		this.isDown = false;

		this.bindEvents();
	}

	//actions
	onScroll () {
	}
	resize () {
	}
	mouseDown (ev) {
		this.isDown = true;
		this.prevMousePos = {
			x: ev.clientX,
			y: ev.clientY,
		},
		//this.transform = getTranslateValues(this.$btn);
		this.startDate = new Date();
	}
	mouseUp (ev) {
		ev.preventDefault();
		let endDate = new Date();
		if (this.startDate) {
			let seconds = (endDate.getTime() - this.startDate.getTime()) / 1000;

			if (seconds < 0.2) this.vue.$router.push(this.link).catch(err => {});
		}

		this.isDown = false;
	}
	updateLink(newLink) {
		this.link = newLink;
	}
	moveEvent (ev) {
		ev.preventDefault();

		// calculate new cursor Pos
		let newPos = {
			x: this.prevMousePos.x - ev.clientX,
			y: this.prevMousePos.y - ev.clientY,
		};
		this.prevMousePos.x = ev.clientX;
		this.prevMousePos.y = ev.clientY;



		gsap.set(this.$btn, {
			x: `-=${newPos.x}`,
			y: `-=${newPos.y}`,
		})
	}


	//bind events
	bindEvents() {
		this.$btn.addEventListener('mousedown', (ev) => this.mouseDown(ev) );
		window.addEventListener('mouseup', (ev) => this.mouseUp(ev) );
		window.addEventListener('scroll', () => this.onScroll() );
		window.addEventListener('resize', () => this.resize() );
		//btn.addEventListener('mouseleave', () => mouseUp() );
		window.addEventListener('mousemove', (ev) => this.isDown && this.moveEvent(ev), false);
	} 

}