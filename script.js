const svg = document.getElementById('dvd');
const container = document.getElementById('container');
const path = document.getElementById('path');
const svgCords = svg.getBoundingClientRect();
const containerCords = container.getBoundingClientRect();
let elementPosition = [0,1];
let moveDown = true;
let moveLeft = true;
let colorNum = 0;

svg.style.left = 1;
svg.style.top = 1;

setInterval(function step() {
	const touchLeft = elementPosition[0] < 0;
	const touchTop = elementPosition[1] < 0;
	const touchRight = (svgCords.width + elementPosition[0]) > containerCords.width;
	const touchBottom = (svgCords.height + elementPosition[1]) > containerCords.height;
	let distX = 3;
	let distY = 4;

	if (touchRight) {
		moveLeft = false;
		changeColor();
	}
	if (touchBottom) {
		moveDown = false;
		changeColor();
	}
	if (touchLeft) {
		moveLeft = true;
		changeColor();
	}
	if (touchTop) {
		moveDown = true;
		changeColor();
	}
	elementPosition[0] += moveLeft ? distX : -distX;
	elementPosition[1] += moveDown ? distY : -distY;
	svg.style.left = elementPosition[0];
	svg.style.top = elementPosition[1];
	
}, 50);

function changeColor() {
	const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple', 'Brown', 'Coral', 'Cyan', 'Aqua', 'Beige', 'Chocolate', 'Crimson', 'DarkGrey', 'Bisque', 'Cornsilk'];
	let rndInt = Math.floor(Math.random() * colors.length) + 1;
	path.setAttribute('style', `fill: ${colors[rndInt - 1]}`);
}