export default class splitText {
	constructor (opt = {}) {
		this.options = opt;
		this.element = document.querySelector(this.options.target);
		this.defaultContent = this.element.innerHTML;

		this.createLines();
		//this.separateChars();
	}

	createDiv (text) {

		//turn to div
		let div = document.createElement('div');
		div.style.display = "inline";
		//div.style.whiteSpace = "normal";
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
						div.style.display = "inline-block";
						div.style.whiteSpace = 'pre-wrap';

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
		this.lines = new Array();

		let cloneNode = this.element.cloneNode(true);
		cloneNode.innerHTML = '';

		let top = -1;
		let currentLine;
		let lineWrapper;

		const ElementToLines = () => {
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

				//child is not a br
				if (child.tagName !== 'BR') {
					let tolerance = child.offsetHeight / 5;

					//if different is different line
					//create a new one and add it to array and nodeClone
					//maybe change it by calculate the center 
					if (child.offsetTop - tolerance > top) {

						top = child.offsetTop;
						currentLine = this.createDiv('');
						currentLine.setAttribute('data-split', 'line');
						//currentLine.style.overflow = 'hidden';
						currentLine.style.display = "inline";
						this.lines.push(currentLine);

						lineWrapper = this.createDiv('');
						lineWrapper.setAttribute('data-split', 'line-wrapper');
						lineWrapper.style.overflow = 'hidden';
						lineWrapper.style.display = "block";

						cloneNode.appendChild(lineWrapper);
						lineWrapper.appendChild(currentLine);
					}
					currentLine.appendChild(child.cloneNode(true));
				}
			}		
		} 

		ElementToLines();

		this.element.parentElement.replaceChild(cloneNode,this.element);
		this.element = cloneNode;

	}

	reverse() {
		this.element.innerHTML = this.defaultContent;
	}
}



