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
		let imgContainer = el.querySelector('.hover-img');
		let hover = el.querySelector('.italic-text');

		hover.addEventListener("mouseenter",(ev) => {
			this.showImg(imgContainer);
			console.log(imgContainer);
		});
		hover.addEventListener("mouseleave",(ev) => {
			this.hideImg(imgContainer);
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
		let img = el.querySelector('img');

		gsap.killTweensOf(el);
		gsap.killTweensOf(img);

		let tl = gsap.timeline({
			onStart: () => {
				//gsap.set(img, {x: '+100%'});
			}
		})
		// tl.to(img, 0.1, {
		// 	x: 0,
		// 	ease: "power1.inOut",
		// });
		tl.set(el, {opacity: 1});
	}
	hideImg (el) {
		let img = el.querySelector('img');

		gsap.killTweensOf(el);
		gsap.killTweensOf(img);

		let tl = gsap.timeline({
			delay: 0.1,
			// onComplete: () => {
			// 		gsap.set(el, {opacity: 0});
			// }
		})
		// tl.to(img, 0.1, {
		// 	x: '-100%',
		// 	ease: "power1.inOut",
		// });
		tl.set(el, {opacity: 0});
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