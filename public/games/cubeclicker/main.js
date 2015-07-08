enchant();
var game;
var scene;
var score;
var mutableText;
window.onload = function() {
	
    game = new Game(1024, 720);
	game.preload('particles.png');
	score = 0;
   
    game.onload = function() {
        scene = new Scene3D();
        var ball = new Sphere();

        ball.z = -20;
		// MutableText
		var time = 60;
        mutableText = new MutableText(20, 20, 300);
        mutableText.text= "Time Left: 60";
        mutableText.on("enterframe", function() {
			
            if (this.age % 30 == 0) {
                this.text = "Time Left: " + ~~ (100-(this.age/30));
				time = time -1;
			}
			if (time === 0 ){
		
			var scoreLabel = new Label("Score: ");
			scoreLabel.x = 350;
			scoreLabel.y = 200;
			scoreLabel.text = "Score: " + score;
			scoreLabel.color = "red";
			scoreLabel.font = "64px monospace";
			game.rootScene.addChild(scoreLabel);
				game.pause();
			}
			addCubes(this.age);
        });
		
		var scoreText = new MutableText(20,40,3);
		scoreText.text = "Score: 0";
		scoreText.scale = 4;
		scoreText.on('enterframe', function(){
			scoreText.text = "score: "+ score;
		});
		
		game.rootScene.addChild(scoreText);
		
        game.rootScene.addChild(mutableText);
        ball.addEventListener('enterframe', function(e) {
			this.rotateYaw(0.01);
        });
        scene.addChild(ball);

    };
    game.start();
};

//Use this to make vectors
v3 = function(x,y,z){
this.x = x;
this.y = y;
this.z = z;
}

function addCubes(x) {
	var temp = Math.random()*100;
	if(x%30 == 0) {
		var cube = new Cube();
		cube.scale(0.25,0.25,0.25);
        cube.retrace = false;
		cube.x = -5
        cube.addEventListener('enterframe', function(e) {
            this.rotateYaw(0.1);
            this.rotateRoll(0.1);

			if (this.retrace && this.age/100 % 1 == 0)
				game.rootScene.removeChild(this);
			else
				this.retrace = true;
			
			if (temp > 50)	
				cubeMot(this,new v3(-2,-1,0),new v3(8,4,0),new v3(-8,-3,0),new v3(3,0,0));
			else
				cubeMot(this,new v3(3,0,0),new v3(-8,3,0), new v3(8,4,0), new v3(-2,-1,0));
		});
		cube.addEventListener('touchend', function(e) {
			addParticles(e.x,e.y,1,1);
			score += 10;
			scene.removeChild(this);
		});
        scene.addChild(cube);
	}
	if(x%50 == 0) {
	var cube = new Cube();
		cube.scale(0.25,0.25,0.25);
        cube.retrace = false;
		cube.x = -5
        cube.addEventListener('enterframe', function(e) {
            this.rotateYaw(0.1);
            this.rotateRoll(0.1);

			if (this.retrace && this.age/100 % 1 == 0)
				game.rootScene.removeChild(this);
			else
				this.retrace = true;
			

			if (temp > 50)	
				quadMot(this,new v3(-2,3,0),new v3(0,-4,0),new v3(2,3,0));
			else
				quadMot(this,new v3(-2,-3,0),new v3(0,4,0), new v3(2,-3,0));
		});
		cube.addEventListener('touchend', function(e) {

			addParticles(e.x,e.y,1,1);
			score += 10;
			scene.removeChild(this);
		});
        scene.addChild(cube);
	}
	if (x%80 == 0) {
		var cube = new Cube();
		cube.scale(0.25,0.25,0.25);
        cube.retrace = false;
		cube.x = -5
        cube.addEventListener('enterframe', function(e) {
            this.rotateYaw(0.1);
            this.rotateRoll(0.1);

			if (this.retrace && this.age/100 % 1 == 0)
				game.rootScene.removeChild(this);
			else
				this.retrace = true;
			

			if (temp > 50)	
				sqrMot(this,new v3(-5,0,-10),new v3(3,0,15));
			else
				sqrMot(this,new v3(1,0,5),new v3(-5,0,-15));
		});
		cube.addEventListener('touchend', function(e) {

			addParticles(e.x,e.y,1,1);
			score += 10;
			scene.removeChild(this);
		});
        scene.addChild(cube);
	
	}
		if (x%80 == 0) {
		var cube = new Cube();
		cube.scale(0.25,0.25,0.25);
        cube.retrace = false;
		cube.x = -5
        cube.addEventListener('enterframe', function(e) {
            this.rotateYaw(0.1);
            this.rotateRoll(0.1);

			if (this.retrace && this.age/100 % 1 == 0)
				game.rootScene.removeChild(this);
			else
				this.retrace = true;
			

			if (temp > 50)	
				sinMot(this,new v3(5,0,-10),new v3(-3,0,15));
			else
				sinMot(this,new v3(-1,0,5),new v3(5,0,-15));
		});
		cube.addEventListener('touchend', function(e) {

			addParticles(e.x,e.y,1,1);
			score += 10;
			scene.removeChild(this);
		});
        scene.addChild(cube);
	}
	if (x%80 == 0) {
		var cube = new Cube();
		cube.scale(0.25,0.25,0.25);
        cube.retrace = false;
		cube.x = -5
        cube.addEventListener('enterframe', function(e) {
            this.rotateYaw(0.1);
            this.rotateRoll(0.1);

			if (this.retrace && this.age/100 % 1 == 0)
				game.rootScene.removeChild(this);
			else
				this.retrace = true;
			

			if (temp > 50)	
				sqrMot(this,new v3(-5,0,-10),new v3(3,0,15));
			else
				sqrMot(this,new v3(1,0,5),new v3(-5,0,-15));
		});
		cube.addEventListener('touchend', function(e) {

			addParticles(e.x,e.y,1,1);
			score += 10;
			scene.removeChild(this);
		});
        scene.addChild(cube);
	
	}
		if (x%2000 == 0) {
		var cube = new Cube();
		cube.scale(0.25,0.25,0.25);
		cube.mesh.setBaseColor('#FF0000');
        cube.retrace = false;
		cube.x = -5
        cube.addEventListener('enterframe', function(e) {
            this.rotateYaw(0.1);
            this.rotateRoll(0.1);

			if (this.retrace && this.age/100 % 1 == 0)
				game.rootScene.removeChild(this);
			else
				this.retrace = true;
			

			if (temp < 24)	
				sinMot(this,new v3(2,-4,0),new v3(2,4,0));
			else if (temp > 25 && temp <50)
				sinMot(this,new v3(1,4,0),new v3(1,-4,0));
			else if (temp > 51 && temp <75)
				sinMot(this,new v3(-1,-4,0),new v3(-1,4,0));
			else
				sinMot(this,new v3(-2,4,0),new v3(-2,-4,0));
		});
		cube.addEventListener('touchend', function(e) {

			addParticles(e.x,e.y,1,1);
			score += 50;
			scene.removeChild(this);
		});
        scene.addChild(cube);
	}

}
//use this move an object between 2 points
function linMot(shape,p1,p2) {
	shape.x = (p1.x + (shape.age/100)*(p2.z - p1.x));
	shape.y = (p1.y + (shape.age/100)*(p2.y - p1.y));
	shape.z = (p1.z + (shape.age/100)*(p2.z - p1.z));
}

function sinMot(shape,p1,p2) {
	shape.x = (p1.x +  Math.sin((3.14/2)*(shape.age/100))*(p2.x - p1.x));
	shape.y = (p1.y +  Math.sin((3.14/2)*(shape.age/100))*(p2.y - p1.y));
	shape.z = (p1.z +  Math.sin((3.14/2)*(shape.age/100))*(p2.z - p1.z));
}

function sqrMot(shape,p1,p2) {
	shape.x = (p1.x + Math.pow((shape.age/100),2)*(p2.x - p1.z));
	shape.y = (p1.y + Math.pow((shape.age/100),2)*(p2.y - p1.y));
	shape.z = (p1.z + Math.pow((shape.age/100),2)*(p2.z - p1.z));
}

function quadMot(shape,p1,p2,p3) {
	var t = shape.age/100;
	shape.x = Math.pow(1-t,2)*p1.x + 2*t*(1-t)*p2.x + t*t*p3.x;
	shape.y = Math.pow(1-t,2)*p1.y + 2*t*(1-t)*p2.y + t*t*p3.y;
	shape.z = Math.pow(1-t,2)*p1.z + 2*t*(1-t)*p2.z + t*t*p3.z;
}

function cubeMot(shape,p1,p2,p3,p4) {
	var t = shape.age/100;
	shape.x = Math.pow((1-t),3)*p1.x + 3*t*Math.pow((1-t),2)*p2.x +3*t*t*(1-t)*p3.x + t*t*t*p4.x;
	shape.y = Math.pow((1-t),3)*p1.y + 3*t*Math.pow((1-t),2)*p2.y +3*t*t*(1-t)*p3.y + t*t*t*p4.y;
	shape.z = Math.pow((1-t),3)*p1.z + 3*t*Math.pow((1-t),2)*p2.z +3*t*t*(1-t)*p3.z + t*t*t*p4.z;
}

//Add Fireworks Classes
//Particle Class
Particle = Class.create( Sprite, {
	initialize:function(xpos, ypos, mx, my, countDown, whichColor){
		Sprite.call(this, 4, 4);
		this.image = game.assets['particles.png'];
		this.x = xpos;
		this.y = ypos;
		this.mx = mx;
		this.my = my;
		this.color = whichColor;
		
		this.countDown = countDown-1;
		
		//Set sprite color
		if(whichColor === 0){
			this.frame = 0;
		}
		else if(whichColor === 1){
			this.frame = 3;
		}
		else{
			this.frame = 6;
		}
	},
	
	onenterframe:function(){
		if(this.age % 20 === 0 && this.age != 0){
			this.frame++;
		}
		
		if(this.countDown === 0){
			if(this.age % 2 === 0){
				this.opacity = 0;
			}
			else{
				this.opacity = 1;
			}
			
			
			//this.opacity = (60 - this.age)/60;
		}
		
		//Move particles
		this.x += this.mx;
		this.y += this.my;
		
		this.my += .05;
		
		//Make a new particle on the way out
		if(this.age >= 60 || (this.age >= 30 && this.countDown <= 0)){
			if(this.countDown > 0){
				addParticles(this.x, this.y, this.countDown, this.color);
			}
			
			game.rootScene.removeChild(this);
		}
	}
});
function addParticles(xpos, ypos, countDown, whichColor){
	//console.log("Countdown is: " + countDown);
	
	for(i = 0; i < 2*Math.PI; i+= Math.PI/4){
		particle = new Particle(xpos, ypos, Math.sin(i), Math.cos(i), countDown, whichColor);
		game.rootScene.addChild(particle);
	}
}

//Add Particles
function addHearticles(xpos, ypos, countDown, whichColor){
	//console.log("Countdown is: " + countDown);
	var mvX = 0;
	var mvY = 0;
	
	for(i = 0; i < 2*Math.PI; i+= Math.PI/8){
		mvX = 16 * Math.pow((Math.sin(i)), 3);
		mvY = (13 * Math.cos(i)) - (5 * Math.cos(2*i)) - (2 * Math.cos(3 * i)) - Math.cos(4 * i);
		
		mvY *= -1;
		
		//Tone down
		mvX *= 0.125;
		mvY *= 0.125;
		
		particle = new Particle(xpos, ypos, mvX, mvY, countDown, whichColor);
		game.rootScene.addChild(particle);
	}
}

