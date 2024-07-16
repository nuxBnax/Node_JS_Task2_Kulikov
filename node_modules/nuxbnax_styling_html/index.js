/**
 * 
 * @param {*} elementClass - class of element. Don't forget (.) before className, or (#) for id
 * @param {*} color - color of element color of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)'...)
 * @param {*} background - background of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)'...)
 * @param {*} fontFamily - fontFamily of element ('2px','5px','12px'...)
 * @param {*} padding - padding of element('0 10px', '10px 0', '10px 15px 16px', '10px 24px 16px'...)
 * @param {*} border - border of element ('3px solid black', '1px dashed red'...)
 */
function elementStyle(elementClass, color, background, fontFamily, padding, border) {

	const elements = document.querySelectorAll(elementClass); 
	elements.forEach(el => {
		el.style.color = (color === 0) ? 'initial' : color;
		el.style.background = (background === 0) ? 'initial' : background;
		el.style.fontSize = (fontFamily === 0) ? 'initial' : fontFamily;
		el.style.padding = (padding === 0) ? 'initial' : padding;
		el.style.border = (border === 0) ? 'initial' : border;
	});
}

/**
 * 
 * @param {*} elementClass - class of element. Don't forget (.) before className, or (#) for id
 * @param {*} color - color of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)')
 * @param {*} background - background of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)')
 * @param {*} boxShadow - boxShadow of element ('20px 20px 30px red', '10px 0px 15px grey'... and more -> https://active-vision.ru/icon/box-shadow/ or https://cssgenerator.org/box-shadow-css-generator.html ) 
 * @param {*} transition - you need just a number like(1, 0.5, 1.5, 0.3...) to set timeout
 */
function elementStyleHover(elementClass, color, background, boxShadow, transition) {
	const elements = document.querySelectorAll(elementClass);

	elements.forEach(el => {
		let currentColor;
		let currentBackground;
		let currentBoxShadow;
		el.addEventListener('mouseover', () => {
			currentColor = el.style.color;
			currentBackground = el.style.background;
			currentBoxShadow = el.style.boxShadow;
			el.style.color = (color === 0) ? currentColor : color;
			el.style.background = (background === 0) ? currentBackground : background;
			el.style.boxShadow = (boxShadow === 0) ? currentBoxShadow : boxShadow;
			el.style.transition = 'all ' + transition + 's';
		});
		el.addEventListener('mouseout', () => {
			el.style.color = currentColor;
			el.style.background = currentBackground ;
			el.style.boxShadow = currentBoxShadow;
			el.style.transition = 'initial';
		});
	});
}

export { elementStyle, elementStyleHover };
