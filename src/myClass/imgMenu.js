import gsap from 'gsap';

export default class imgMenu {
	constructor () {
		this.DOM = {};
		this.DOM.liElements = document.querySelectorAll(".infinit-scroll-single-list li");
		this.mousePos = {x: 0,y: 0}; 

		this.DOM.liElements.forEach((li) => this.hoverEvent(li));
		this.onMouseMove();

	}
	hoverEvent(el)  {
		let img = el.querySelector('.hover-img');

		el.addEventListener("mouseenter",(ev) => {
			this.showImg(img);
		});
		el.addEventListener("mouseleave",(ev) => {
			this.hideImg(img);
		});
	}

	onMouseMove () {
		const updateMouse = (ev) => {
			gsap.to(this.mousePos, 0, {
				x: event.clientX,
				y: event.clientY,
			});
		this.imgPosition();
		}

		window.addEventListener("mousemove",(ev) => updateMouse(ev));
	}
	showImg (el) {
		gsap.to(el, 0.2, {
			opacity: 1,
			//delay: 1,
		});
	}
	hideImg (el) {
		gsap.to(el, 0.2, {
			opacity: 0,
		});
	}
	imgPosition () {
		const changeImgPosition = (el) => {
			let img = el.querySelector('.hover-img');

			gsap.to(img, 0, {
				x: this.mousePos.x,
				y: this.mousePos.y,
			})
		}

		this.DOM.liElements.forEach((li) => changeImgPosition(li));
	}
}