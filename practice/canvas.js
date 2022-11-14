let canvas = document.getElementById("canvas-1");
canvas.width = 100;
canvas.height = 100;
/** @type {CanvasRenderingContext2d} */let context = canvas.getContext("2d");
let squares = [];
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colSize = 80;
let rowSize = 40;
let gridSize = 4;
let size = canvas.width/gridSize;
function drawSquare(x, y, color, size = 25) {
	let square = new Path2D();
	context.fillStyle = color; 

class ClickBox{ 
	constructor(x, y, size, color){
	 this.x=x;
	 this.y=y; 
	 this.size=size; 
	 this.isClicked = false; 
	 this.refreshRate = 500;
	 this.lastRefresh =0; 
	 this.color = "red"
	{

		
} 



	
context.fillRect(x, y, 25, 25);
	

     

 function drawLoop() {
	for(let row = 0; row < rowSize; row++) {
		for(let col = 0; col < colSize; col++) {
			let colorIndex = Math.floor(Math.random() * colors.length);
			let color = colors[colorIndex];
			drawSquare(col * size, row * size, color, size);

		}
	}requestAnimationFrame(drawLoop)
}
requestAnimationFrame(drawLoop);