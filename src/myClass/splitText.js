export default class splitText {
	constructor (opt = {}) {
		this.options = opt;
		this.element = document.querySelector(this.options.target);
		this.defaultContent = this.element.innerHTML;

		this.createLines();
		this.separateChars();
	}

	createDiv (text) {

		//turn to div
		let div = document.createElement('div');
		div.style.display = "inline-block";
		div.style.whiteSpace = "break-spaces";
		div.innerText = text;
		return div;
	}

	copyTag (tag) {
		//let tag = document.createElement();
	}

	separateChars() {
		this.chars = new Array ();
		let cloneNode = this.element.cloneNode(true);
		cloneNode.innerHTML = '';

		const ElementToDivs = (element, cloneWrapper) => {
			cloneWrapper.innerHTML = '';
			for (let i = 0; i < element.childNodes.length; i ++) {
				let child = element.childNodes[i];

				if (child.nodeType == 3) {
					let splittedText = child.textContent.split('');

					splittedText.forEach(char => {
						let div = this.createDiv(char);
						div.setAttribute('data-split', 'char');
						//ne prend pas en compte les espaces
						//span.style.display = 'inline-block';
						cloneWrapper.appendChild(div);
						this.chars.push(div);
					})
				} 
				//if child est un node
				else if (child.nodeType !== 3) {
					cloneWrapper.appendChild(child.cloneNode(true));

					//if child has child element
					if (child.firstChild) {
						//reccursive
						ElementToDivs(child, cloneWrapper.lastChild);
					}
				}
			}
		}


		ElementToDivs(this.element, cloneNode);
		//console.log(createLines(cloneNode.cloneNode(true)));
		this.element.parentElement.replaceChild(cloneNode, this.element);
		this.element = cloneNode;
		//console.log(this.element);

	}

	createLines() {
		let cloneNode = this.element.cloneNode(true);
		cloneNode.innerHTML = '';

		this.lines = new Array();
		let top = -1;
		let currentLine;

		//remplace les nodes text par des node pour pouvoir accéder à leur hauteur
		for (let i = 0; i < this.element.childNodes.length; i ++) {
			let child = this.element.childNodes[i];

			if (child.nodeType == 3) {
				let div = this.createDiv(child.textContent);
				this.element.replaceChild(div, child);
			}
		}


		for (let i = 0; i < this.element.childNodes.length; i ++) {
			let child = this.element.childNodes[i];

			//br and similar elements
			if (child.offsetWidth == 0) {
				cloneNode.appendChild(child.cloneNode(true));

			//child is not a br
			} else {

				//if different is on the same line et the height of them is not the same
				//maybe change it by calculate the center 
				let tolerance = child.offsetHeight / 5;

				if (child.offsetTop - tolerance > top) {
					top = child.offsetTop;
					currentLine = this.createDiv('');
					currentLine.setAttribute('data-split', 'line');
					currentLine.style.overflow = 'hidden';
					this.lines.push(currentLine);
					cloneNode.appendChild(currentLine);
				}
				currentLine.appendChild(child.cloneNode(true));
			}
		}
		this.element.parentElement.replaceChild(cloneNode,this.element);
		this.element = cloneNode;

	}

	reverse() {
		this.element.innerHTML = this.defaultContent;
	}
}



