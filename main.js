canvas = document.getElementById('myCanvas'); //Create a reference for canvas 
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height = 100;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5; //Set initial position for a car image.
greencar_y = 225; 

function add() {
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

greencar_imgtag = new Image();
greencar_imgtag.onload = uploadgreencar
greencar_imgtag.src = greencar_imgtag	
}

function uploadBackground() {
ctx.drawImage(background_imgtag, 0, 0, canvas.widh, canvas.height); //Define function ‘uploadBackground’
}

function uploadgreencar() {
ctx.drawImage(greencar_imgtag, greencar_x, greencar_y, greencar_width, greencar_height);	//Define function ‘uploadgreencar’.
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if (greencar_y >=0)	//Define function to move the car upward
{
greencar_y = greencar_y - 10;
console.log("when up arrow is pressed", x="+ greencar_x", y = "+greencar_y");
uploadBackground();
uploadgreencar();
}
}

function down()
{
if (greencar_y <=500)	//Define function to move the car downward
{
	greencar_y = greencar_y + 10;
	console.log("when down arrow is pressed", x="+ greencar_x", y = "+greencar_y");
	uploadBackground();
	uploadgreencar();
	}
}

function left()
{
if (greencar_y >=0)	//Define function to move the car left side
{
	greencar_y = greencar_y - 10;
	console.log("when left arrow is pressed", x="+ greencar_x", y = "+greencar_y");
	uploadBackground();
	uploadgreencar();
	}
}

function right()
{
if (greencar_y <=700) //Define function to move the car right side
{
	greencar_y = greencar_y + 10;
	console.log("when right arrow is pressed", x="+ greencar_x", y = "+greencar_y");
	uploadBackground();
	uploadgreencar();
	}
}
