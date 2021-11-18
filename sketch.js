/*function preload(){
	const data = loadJSON(data.json);
	console.log(data);
		let len_one = 160;
	let len_two = 160;
	let size = 30;
	var x0 = width/2;
	var y0 = height/2;
	var x1,y1,x2,y2 = 0;
	var theta1 = PI;
	var theta2 = PI;
}*/
let len_one;
let len_two;
let size;
var x0;
var y0;
var x1,y1,x2,y2;
var theta1,theta2 = 0;
var dtheta1,dtheta2;

function setup() {
  createCanvas(800, 800);
  stopAnimation();
}

function draw() {
  len_one = 160;
  len_two = 160;
  size = 30;
  x0 = width/2;
  y0 = height/2;
  x1,y1,x2,y2 = 0;
  theta1 += dtheta1;
  theta2 += dtheta2;
  background(220);
  x1 = round(x0 + (len_one * sin(theta1)));
  y1 = round(y0 + (len_one * cos(theta1)));
  x2 = round(x1 + len_two * sin(theta2));
  y2 = round(y1 + len_two * cos(theta2));
  
  line(x0,y0,x1,y1);
  line(x1,y1,x2,y2);
  ellipse(x0,y0,size,size);
  ellipse(x1,y1,size,size);
  ellipse(x2,y2,size,size);

}

function startAnimation(){
	/*
	let id = null;
	let pos = 0;
	clearInterval(id);
	id = setInterval(frame, 5);
	function frame() {
		if (pos == 350) {
		  clearInterval(id);
		} else {
		  pos++; 
		  elem.style.top = pos + "px"; 
		  elem.style.left = pos + "px"; 
		  theta1 += 0.11;
		}
		}
		*/
		
	dtheta1 += 0.005;
	dtheta2 += 0.02;
}
function stopAnimation(){
    theta1 = 0;
	theta2= 0;
	dtheta1 = 0;
	dtheta2 = 0;
	
}