var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

setCanvasDimension();
createShape('rect', 0, 0, canvas.width, canvas.height, 0, 0, 'black');



// ================ Utility Function ================== //

//Set Canvas Width & Height
function setCanvasDimension(fullscreen = true, w = 300, h = 150){
	if(fullscreen){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}else{
		canvas.width = w;
		canvas.height = h;
	}
}


//Helper for creating shapes
function createShape(shape = 'rect', xPos, yPos, w, h, radius, sides, fillColor = 'black'){
	c.beginPath();

	//Check start-end point, set middle position if undefined
	if(typeof xPos === "undefined" || typeof yPos === "undefined"){
		//set middle position
	}else{
		c.moveTo(xPos,yPos);
	}


	//Draw the shape
	switch(shape){
		case 'rect':
			c.rect(xPos,yPos,w,h);
			c.fillStyle = fillColor;
			c.fill();
	}
		//Please continue to add arc, polygon routine
}