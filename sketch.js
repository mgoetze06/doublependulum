function setup() {
  createCanvas(800, 800);

  
}

function draw() {
  let len_one = 160;
  let len_two = 160;
  let size = 30;
  var x0 = width/2;
  var y0 = height/2;
  var x1,y1,x2,y2 = 0;
  var theta1 = PI;
  var theta2 = PI;
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
}