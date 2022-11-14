let canvas= document.getElementById("canvas-1");
canvas.width=100;
canvas.hight=100;

/** @type{CanvasRenderingContext2d} */
let context = canvas.getContext("2d");

context.fillRECT(0,0,25,25); 
context.fillStyle = "red";  
(0,0,25,25); 
let square = [];
let gridSize = 4; 
let size=canvas.width / gridSize  
let colors = ["red", "orang", "yellow", "green", "blue", "indigo", "violet",]

// All of these incrementers do the same 
// row = row + 1 
// row += 1
// row++
for(let row =0; row < gridSize; row = row+ 1){
	for(let row =0; row < gridSize; row = row+ 1){
		let colorIndex =  Math.floor (Math.random() * colors.length);
		let color = colors(colorsIndex);
		drawSquare(col * size, row, 0, "red", size ); 
	}
}

// drawSquare(0, 0, "red");
// drawSquare(25, 0, "blue");
// drawSquare(50, 0, "green");
// drawSquare(75, 0, "purple");

function drawSquare(x, y,color, size=25){
	let square= new Path2d();
	square.rect(x, y, size, size);
	
	square.push(square);  
	
	context.fillStyle=color; 
context.fillRect(x, y, size, size); 

} 

console.log(squares); 


function drawLoop()
   for(let row =0; row < gridSize; row = row+ 1){
	for(let row =0; row < gridSize; row = row+ 1){
		let colorIndex =  Math.floor (Math.random() * colors.length);
		let color = colors(colorsIndex);
		drawSquare(col * size, row, 0, "red", size ); 
	
	
	
	
	
	
	
	
	} 


	requestAnimationFrame(drawLoop);  
	


requestAnimationFrame(drawLoopp;