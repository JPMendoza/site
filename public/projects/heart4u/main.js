enchant(); //the magic words that start enchant.js

//Global Variables
var game;

//health and special counter
var special = 0;
var health = 4;

//For special attack
var flashCount = 0;
var suprSet = false;

//Stage Variables
var stgWidth = 1024;
var stgHeight = 768;
var moveSpeed = 10;
var jumpSpeed = 20;

//variables for things thrown
var vals = [];
var throwPause = 0;
var thrown = false;
var isOut = false;
var throwSpeed = 15;

//variables for people
var standing = stgHeight/1.6;
var people = [];
var girls = [];
var asdf;
var pat;
var hackFix = false; 


// score stuff
var mult = 1;

//hacking function
fixThrow = function() {
    asdf = new throwing(-10,-10);
    game.rootScene.addChild(asdf);
    game.rootScene.removeChild(asdf);
}

npcThrow = Class.create(Sprite, {
    initialize: function(xS, yS, picNum) {
    Sprite.call(this, 60,60);
    this.image = game.assets['images/bigproj-sheet.png'];
    this.x = xS + 10;
    this.y = yS + 50;
    this.frame = picNum;
    this.upSpeed = 0;
    
    ifDiag = Math.random() * 100;
    if(ifDiag >= 65){
            this.upSpeed = 5;
        }
    },
    
    onenterframe:function(){
    
        this.x += throwSpeed;
        this.y -= this.upSpeed;
        if (this.x > stgWidth/1.1)
        {
            game.rootScene.removeChild(this);
            
        }
        else if (this.within(pat, 40))
        { 
        	game.assets['sounds/whack.wav'].play();
        	pat.stun = 10;
        	whichOuch = Math.random() * 100;
        	if(whichOuch <= 50){
        		game.assets['sounds/playerHit1.wav'].play();
        	}
        	else{
        		game.assets['sounds/playerHit2.wav'].play();
        	}
        	
               health -= 1;
               if(health === 0){
               	//game over pose
                pat.frame = 12;    
				addBubble(pat.x + 25, pat.y + 80, 4);
               }
               else{
               	pat.frame = 11;
        		addBubble(pat.x, pat.y, 3);
               }
               game.rootScene.removeChild(this);
               mult = 1;
        }    
        //rotate
        this.rotate(30);
        
    }
});

addBubble = function(xpos, ypos, whichBub){
	bubl = new Bubble(xpos, ypos, whichBub);
	game.rootScene.addChild(bubl);
}

//throwing
throwing = Class.create(Sprite, {
    initialize:function(xStart,yStart){
    Sprite.call(this, 60,60);
    this.image = game.assets['images/bigproj-sheet.png'];
    this.x = xStart + 120;
    this.y = yStart + 65;
    this.frame = 0;
    },
    
    isJump: false,
    
    onenterframe:function(){
        // need to put code to so x just goes straight
        //key inputs
        if (!this.isJump && this.y >= standing)
            this.x+= moveSpeed
        else 
        {
            this.isJump = true; 
            this.x += moveSpeed;
            this.y += moveSpeed;
        }
        if (this.x < 0 || this.x > stgWidth/1.0)
        {
            game.rootScene.removeChild(this);
            isOut = false;
            mult = 1;
            fixThrow();
        }
        if (this.y < 0 || this.y > stgHeight/1.2)
        {
            game.rootScene.removeChild(this);
            isOut = false;
            mult = 1;
            fixThrow();
        }
        
        //rotate
        this.rotate(30);
        //on hit
        for (i = 0 ; i < people.length; i++)
        {
            if (this.within(people[i],50))
            {   
                game.rootScene.removeChild(this); 
                console.log(people.length);
                //fixThrow();
            }
        }
        
        
    }
});    

//Bubble Class
Bubble = Class.create(Sprite, {
	initialize:function(xpos, ypos, type){
		Sprite.call(this, 80, 80);
		this.image = game.assets['images/bigeffect-sheet.png'];
		this.x = xpos + 50;
		this.y = ypos - 60;
		this.countDown = 0;
		this.removeCount = 20;
		this.speed = moveSpeed;
		
		//enjoy
		if(type === 1){
			this.frame = 2;
			this.countDown = 10;
		}
		//anger
		else if(type === 2){
			this.frame = 4;
			this.countDown = 10;
		}
		//ouch
		else if(type === 3){
			this.frame = 6;
			this.removeCount = 10;
		}
		//game over
		else if(type === 4){
			this.frame = 7;
			moveSpeed = 0;
		}
		//bug
		else{
			this.frame = 0;
		}
	},
	
	onenterframe:function(){
		if(this.countDown > 0){
			this.countDown--;
			
			if(this.countDown === 0){
				this.frame++;
			}
		}
		
		this.x -= moveSpeed;
		
		this.removeCount--;
		if(this.removeCount <= 0){
			game.rootScene.removeChild(this);
		}
	}
});


//heart Class
Heart = Class.create(Sprite, {
	initialize:function(xpos){
		Sprite.call(this, 80, 80);
		this.image = game.assets['images/bigeffect-sheet.png'];
		this.x = stgWidth - (xpos + 25);
		this.y = 0;
		this.frame = 0;
		this.countDown = 0;
		this.reset = false;
	},
	
	onenterframe:function(){
		var beatCount = (health * 8) + 5;
		
		
		if(this.countDown > 0){
			this.countDown--;
			
			if(this.countDown <= 0){
				this.reset = true;
			}
		}
		
		if(this.reset === true){
			this.reset = false;
			this.frame = 0;
		}
		else if(this.age % beatCount === 0){
			this.frame = 1;
			this.countDown = 5;
		}
	}
});

//player Class
player = Class.create(Sprite, {
	initialize:function(){
		Sprite.call(this, 200, 200);
		this.image = game.assets['images/bigplayer-sheet.png'];
		this.x = stgWidth/2.5;
		this.y = standing;
        this.frame = 0;
		this.curWalk = 1;
		this.stun = 0;
		this.wait = 0;
		this.rate = 2;
        
    	//Bind the desired keys
    	game.keybind(87, 'up');
    	game.keybind(32, 'b');
        game.keybind(65,'left');
        game.keybind(68,'right');
	},
    isJump: false,
    falling: false,
    
    jump: function(time) {
        
        if (this.isJump)
        {
            if (this.y > stgHeight/3)
                this.y -= jumpSpeed;
            else if (this.y <= stgHeight/3)
                      {
                        this.falling = true;
                      this.isJump = false;
                      }
        }
        if (this.falling && this.y != standing)
        {
            this.y += jumpSpeed;
        }
        if (this.y === standing)
                      {
            this.isJump = false;
                      this.falling = false;
                      }
    },
    
	onenterframe:function(){
		
		//Animate sprite
		//If not jumping do walking animation
		if(!this.isJump && this.stun <= 0 && this.wait <= 0){
			if(this.age % this.rate){
				if(this.curWalk === 6){
					this.curWalk = 1;
				}
				else{
					this.curWalk++;
				}
                if (this.falling)
                      this.frame = 9;
                else
                      this.frame = this.curWalk;
			}
		}
		else{
			if(this.stun >= 0){	
				this.stun--;
				
				console.log("stun is: " + this.stun);
				
				if(this.stun % 2 === 1 && health > 0){
					this.visible = false;
				}
				else if(this.stun === 0){
					this.visible = true;
				}
				else{
					this.visible = true;
					
				}
			}
			
			if(this.wait >= 0){
				this.wait--;
			}
		}
		
		if ((game.input.left && this.x >= 100) || this.wait > 0 || this.stun > 0)
        {
            this.x -= moveSpeed;
            if(!(this.stun > 0) && !(this.wait > 0) && !this.falling && !game.input.up){
            	this.frame = 0;
            }
        }
        if (game.input.right && this.stun <=0 && this.x < stgWidth/ 1.2)
        {
            this.x += moveSpeed;
            this.rate = 4;
        }
        
        if(!game.input.right && !game.input.left){
        	this.rate = 2;
        }
		
		//player Controls
		//Jump check
		if (game.input.up && this.y === standing)
        {
        	game.assets['sounds/playerJump.wav'].play();
            this.isJump = true;
            this.frame = 9;
        }
        
        //Throw check
        if(this.stun <= 0 && game.input.b && !thrown && !isOut){
        	game.assets['sounds/whoosh.wav'].play();
        		if(this.isJump){
        			this.frame = 10;
        		}
        		else{
        			//Ground throw
        			this.wait = 2;
        			this.frame = 8;
        		}
        		
                thrown = true;
                asdf = new throwing(this.x,this.y);
                asdf.isJump = this.isJump;
                isOut = true;
                game.rootScene.addChild(asdf);
        }
        
    
        this.jump(this.age);
	}
    
});


//Dog Class
Dog = Class.create(Sprite, {

    initialize: function(x,y){
    Sprite.call(this,120,100);
    this.image = game.assets['images/bigdog-sheet.png'];
    this.frame = 0;
    this.x = x;
    this.y = y + 35;
    this.touchEnabled = false;
    
    },
    
    hit: false,
    
    onenterframe:function(){
        this.x -= moveSpeed;
        if (this.within(pat,60) && !this.hit )
        {
            this.hit = true;
            pat.stun = 10;
        	whichOuch = Math.random() * 100;
        	if(whichOuch <= 50){
        		game.assets['sounds/playerHit1.wav'].play();
        	}
        	else{
        		game.assets['sounds/playerHit2.wav'].play();
        	}
        	
               health -= 1;
               if(health === 0){
               	//game over pose
                pat.frame = 12;    
				addBubble(pat.x + 15, pat.y + 30, 4);
               }
               else{
               	pat.frame = 11;
        		addBubble(pat.x, pat.y, 3);
               }
        }
        if (this.x <= (0 - this.width)){
            people.pop();
            game.rootScene.removeChild(this);
        }
    }
    
});

//girl class
Girl = Class.create(Sprite, {
    initialize:function(x,y, dude){
        Sprite.call(this, 200,200);
        this.image = game.assets['images/bigchar-sheet.png'];
        this.frame = 0;
        this.x = x;
        this.y = y;
        this.touchEnabled = false;
        this.frame = 1;
        this.dude = dude;
        
        whichGirl = Math.random()*100;
        if(whichGirl <= 33){
        	this.frame = 0;
        }
        else if(whichGirl <= 66){
        	this.frame = 2;
        }
        else{
        	this.frame = 4;
        }
        
    },
    
    hit: false,
    onenterframe:function(){
        this.x -= moveSpeed;
        if (this.x+200 <= 0){
            people.pop();
            game.rootScene.removeChild(this);
        }
        if (this.within(asdf,50) && !this.hit)
        {
            if (!this.dude && !this.hit)
                game.score += 100 * mult;
            else if (!this.hit)
                game.score += 750 * mult;
            people.pop();
            
            //fireworks call
            if(mult >= 4){
            	console.log()
				var xpos = Math.random() * stgWidth;
				var ypos = (Math.random() * (3 * stgHeight/8));
				
				if(ypos < 120){
					ypos = 120;
				}
				
				var chooseColor = Math.random() * 100;
				
        		var chosen = 0;
        	
        		if(chooseColor <= 33){
        		chosen = 0;
        			console.log("red color");
        		}
	        	else if(chooseColor <= 66){
	        		chosen = 1;
	        		console.log("blue color");
	        	}
	        	else{
	        		chosen = 2;
	        		console.log("green color");
	        	}
	        	
	        	addHearticles(xpos, ypos, 2, chosen);
			}
            
            //play sound
            whichOoh = Math.random() * 100;
            
            if(whichOoh <= 20){
            	game.assets['sounds/girlSound1.wav'].play();
            }
            else if(whichOoh <= 40){
            	game.assets['sounds/girlSound2.wav'].play();
            }
            else if(whichOoh <= 60){
            	game.assets['sounds/girlSound3.wav'].play();
            }
            else if(whichOoh <= 80){
            	game.assets['sounds/girlSound4.wav'].play();
            }
            else{
            	game.assets['sounds/girlSound5.wav'].play();
            }
            
            this.frame++;
            //add heart bubble
            addBubble(this.x, this.y, 1);
            
            this.hit = true;
            game.rootScene.removeChild(asdf);
            isOut = false;
            console.log("Object was removed");
            //game.rootScene.removeChild(this);
            fixThrow();
            mult += 1;
        }
    }
});

//dude class
Dude = Class.create(Sprite, {
    initialize:function(x,y, girl){
        Sprite.call(this, 200,200);
        this.image = game.assets['images/bigchar-sheet.png'];
        this.frame = 0;
        this.x = x;
        this.y = y;
        this.touchEnabled = false;
        
        this.girl = girl;
        game.rootScene.addChild(this.girl);
        
        whichDude = Math.random()*100;
        
        if(whichDude <= 33){
        	this.frame = 6;
        }
        else if(whichDude <= 66){
        	this.frame = 9;
        }
        else{
        	this.frame = 12;
        }
    },
    
    girl: "" ,
    hit: false,
    hit2: false,
    hit3: false,
    
    onenterframe:function(){
    
        if (this.girl.hit && !this.hit3)
        {
        	whichGrr = Math.random() * 100;
        	
        	if(whichGrr <= 33){
        		game.assets['sounds/dudeSound1.wav'].play();
        	}
        	else if(whichGrr <= 66){
        		game.assets['sounds/dudeSound2.wav'].play();
        	}
        	else{
        		game.assets['sounds/dudeSound3.wav'].play();
        	}
            this.hit2 = true;
            this.hit3 = true;
            addBubble(this.x,this.y-30, 2);
        }
        this.x -= moveSpeed;
        
        if (this.x+200 <= 0){
            people.pop();
            game.rootScene.removeChild(this);
        }
        if (this.hit2 && this.x <= 200)
        {
            this.hit2 = false;
            this.hit3 = true;
            this.frame = this.frame + 2;
            
            whichThrow = Math.random()*100;
            if (whichThrow >= 50)
                game.rootScene.addChild(new npcThrow(this.x, this.y , 2));
            else
                game.rootScene.addChild(new npcThrow(this.x, this.y , 3));
        }    
        if (this.within(asdf,50) && !this.hit)
        {
        	whichGrr = Math.random() * 100;
        	
        	if(whichGrr <= 33){
        		game.assets['sounds/dudeSound1.wav'].play();
        	}
        	else if(whichGrr <= 66){
        		game.assets['sounds/dudeSound2.wav'].play();
        	}
        	else{
        		game.assets['sounds/dudeSound3.wav'].play();
        	}
        	
            this.hit = true;
            addBubble(this.x,this.y-30,2);
            mult = 1;
            people.pop();
           // game.rootScene.removeChild(this);
            isOut = false;
            console.log("Object was removed");
            game.rootScene.removeChild(asdf);
            fixThrow();
            
        }

    }
    
});

//Old Lady
OldLady = Class.create(Sprite, {
    initialize:function(x,y){
        Sprite.call(this, 200,200);
        this.image = game.assets['images/bigchar-sheet.png'];
        this.frame = 0;
        this.x = x;
        this.y = y;
        this.touchEnabled = false;
        this.frame = 15;
    },
    
    hit: false,
    
    onenterframe:function(){
        this.x -= moveSpeed;
        
        if (this.hit && this.x <= 200)
        {
            console.log("gpthere");
            this.frame = 17;
            
            game.rootScene.addChild(new npcThrow(this.x, this.y , 4));
            this.hit = false;
        }
        if (this.x+200 <= 0){

            people.pop();
            game.rootScene.removeChild(this);
        }
        if (!this.hit && this.within(asdf,40))
        {
            this.frame = 16;
            game.assets['sounds/oldLadySound.wav'].play();
            
            //Add anger bubble
            addBubble(this.x, this.y, 2);
            this.hit = true;
            game.score += 500 * mult;
            game.rootScene.removeChild(asdf);
            isOut = false;
            console.log("Objeact was removed");
            //game.rootScene.removeChild(this);
            fixThrow();
            mult += 1;
        }
        
    }
});


addingPeople = function(x)
{

    if (x % 123 === 0){
        dog = new Dog(stgWidth,stgHeight/1.4);
        game.rootScene.addChild(dog);
        console.log("added dog, people.length is " + people.length);
    }
    if (x % 99 === 0)
    {
        girly = new Girl(stgWidth,standing, false);
        people.push(girly);
        game.rootScene.addChild(girly);
        console.log("added girl, people.length is " + people.length);
    }
        
    if (x % 125 === 0) {
        g = new Girl (stgWidth+60, standing, true);
        b = new Dude (stgWidth,standing, g);
        people.push(b);
        //people.push(g);
        game.rootScene.addChild(b);
        //game.rootScene.addChild(g);
        console.log("added dude, people.length is " + people.length);
    }
    
    if (x % 170 === 0) {
        lady = new OldLady(stgWidth, standing);
        people.push(lady);
        game.rootScene.addChild (lady);
        console.log("added oldlady, people.length is " + people.length);
    }
    
        
}

//Sidewalk Class
Sidewalk = Class.create(Sprite, {
	initialize:function(){
		Sprite.call(this, 1600, 60);
		this.image = game.assets['images/bigsidewalk-sheet.png'];
		this.frame = 0;
		this.x;
		this.y = stgHeight - 130;
		this.touchEnabled = false;
	},
	
	onenterframe:function(){
		if(this.age % 2 == 0){
			if(this.frame >= 3){
				this.frame = 0;
			}
			else{
				this.frame++;
			}
		}
	}
});

//SceneButton Class
var SceneButton = Class.create(Sprite, {
	initialize:function(whichBtn, xpos, ypos){
		Sprite.call(this, 360, 111);
		this.image = game.assets['images/button-sheet.png'];
		this.x = xpos;
		this.y = ypos;
		this.frame = whichBtn;
	},
	ontouchend:function(){
		//credits
		if(this.frame === 0){
			var credits = new CreditScene();
			game.pushScene(credits);
		}	
		//play
		else if(this.frame === 1){
			console.log("starting game");
			game.assets['sounds/ready.wav'].play();
    		game.assets['sounds/bgmusic.ogg'].play();
			game.popScene(this);
		}
		//controls
		else if(this.frame === 2){
			var controls = new ControlScene();
			game.pushScene(controls);
		}
		else{
			console.log("what the fuck happened");
		}
		
	}
});

//Controls Scene Class
var ControlScene = Class.create(Scene, {
	initialize: function(){
		
		console.log("controls created!");
		
		Scene.apply(this);
		
		controls = new Sprite(stgWidth, stgHeight);
		controls.image = game.assets['images/controls.png'];
		//credits.x = 1;
		
		this.addChild(controls);
	},
	
	ontouchend: function(){
		console.log("exiting controls");
		game.popScene(this);
	}	
});

//Credits Scene Class
var CreditScene = Class.create(Scene, {
	initialize: function(){
		
		console.log("credits created!");
		
		Scene.apply(this);
		
		credits = new Sprite(stgWidth, stgHeight);
		credits.image = game.assets['images/credits.png'];
		credits.x = 1;
		
		this.addChild(credits);
	},
	
	ontouchend: function(){
		console.log("exiting credits");
		game.popScene(this);
	}	
});

//Title Scene Class
var TitleScene = Class.create(Scene, {
	initialize: function(){
		
		console.log("title created!");
		
		Scene.apply(this);
		
		credits = new Sprite(stgWidth, stgHeight);
		credits.image = game.assets['images/title.png'];
		
		this.addChild(credits);
		
		var btnx = 11 * stgWidth/16 - 38;
		var btny = 17 * stgHeight/32;
		var btndist = 120;
		
		//create buttons
		playButton = new SceneButton(1, btnx, btny);
		creditButton = new SceneButton(0, btnx, btny + btndist);
		controlsButton = new SceneButton(2, btnx, btny + 2*btndist);
		
		this.addChild(playButton);
		this.addChild(creditButton);
		this.addChild(controlsButton);
	},
});

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

//Scrolling Background Class
ScrollingBG = Class.create( Sprite, {
	initialize:function(xpos){
		Sprite.call(this, 1024, 576);
		this.image = game.assets['images/scbg.png'];
		this.startX = xpos;
		this.x = xpos;
		this.y = 70;
	},
	
	onenterframe:function(){
		if(this.x <= (0 - this.width) + 10){
			this.x = 1022;
		}
		
		if(this.age % 60 === 0){
			//this.x -= 1;
		}
	}
});
         
//Begin game code
window.onload = function() {
    game = new Game(stgWidth, stgHeight);
    //Preload images
    //Any resources not preloaded will not appear
    game.preload('images/bigplayer-sheet.png', 'images/bigchar-sheet.png', 'images/bigdog-sheet.png', 'images/particles.png', 
    	'images/bigproj-sheet.png', 'images/bigeffect-sheet.png', 'images/bigsidewalk-sheet.png', 'images/game-bg.png', 'images/scbg.png', 'sounds/bgmusic.ogg', 
    	'sounds/dudeSound1.wav', 'sounds/dudeSound2.wav', 'sounds/dudeSound3.wav', 'sounds/gameover.wav',
    	'sounds/girlSound1.wav', 'sounds/girlSound2.wav', 'sounds/girlSound3.wav', 'sounds/girlSound4.wav',
    	'sounds/girlSound5.wav', 'sounds/oldLadySound.wav', 'sounds/playerHit1.wav', 'sounds/playerHit2.wav',
    	'sounds/playerJump.wav', 'sounds/whack.wav', 'sounds/whoosh.wav', 'images/credits.png', 'images/button-sheet.png', 'images/title.png', 'images/controls.png',
    	'sounds/ready.wav');
    	
    
    game.onload = function() { //Prepares the game
    	
		//Setup Sound
		var title = new TitleScene();
		game.pushScene(title);
    	
    	//Add scrolling bg first
    	sc1 = new ScrollingBG(0);
    	sc2 = new ScrollingBG(1022);
    	
    	game.rootScene.addChild(sc1);
    	game.rootScene.addChild(sc2);
    	
    	
    	//Make bg
    	bg = new Sprite(1024, 768);	//Create new sprite, with given size
		bg.image = game.assets['images/game-bg.png'];
		game.rootScene.addChild(bg);
		
		
		//Add sidewalk
		sw = new Sidewalk();
		game.rootScene.addChild(sw);
        
		//Add scorecounter
		game.score = 0;
		scoreLabel = new Label("Score: ");
		scoreLabel.addEventListener('enterframe', function(){
			this.text = "Score: " + game.score;
		});
		scoreLabel.color = "white";
		scoreLabel.font = "32px monospace";
		game.rootScene.addChild(scoreLabel);
		
		//Mult Counter
		multLabel = new Label("x ");
		multLabel.addEventListener('enterframe', function(){
			this.text = "x" + mult;
			
			if(mult >= 5){
				this.color = "red";
			}
			else{
				this.color = "white";
			}
		});
		multLabel.x = stgWidth/2 - 50;
		multLabel.color = "white";
		multLabel.font = "32px monospace";
		game.rootScene.addChild(multLabel);
		
		//Add hearts
		heart1 = new Heart(55);
		heart2 = new Heart(110);
		heart3 = new Heart(165);
		heart4 = new Heart(220);
		
		game.rootScene.addChild(heart1);
		game.rootScene.addChild(heart2);
		game.rootScene.addChild(heart3);
		game.rootScene.addChild(heart4);
		
		//Add ship;
		pat = new player();
		game.rootScene.addChild(pat);
        
        //Game Condition Check
        game.rootScene.addEventListener('enterframe', function(){
        	
        	//Heart check
        	if(health === 3){
        		heart4.visible = false;
        	}
        	else if(health === 2){
        		heart3.visible = false;
        	}
        	else if(health === 1){
        		heart2.visible = false;
        	}
        	else if(health === 0){
        		heart1.visible = false;
        	}
        	
        	//Game condition check
        	if(health <= 0){
        		game.end();
        	}
            if (!hackFix)
            {
                hackFix = true;
                fixThrow();
            }
            if (thrown)
            {
                throwPause +=1;
            }
            if (throwPause === 3)
            {    
                thrown = false;
                throwPause = 0;
            }
            //bg.x -= 1;
            addingPeople(pat.age);	
        });
            
    }
    game.start(); //Begin the game
}