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

//variables for people
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
    Sprite.call(this, 15,15);
    this.image = game.assets['images/proj-sheet.png'];
    this.x = xS;
    this.y = yS;
    this.scaleX = 4.0;
    this.scaleY = 4.0;
    this.frame = picNum;
    },
    
    onenterframe:function(){
    
        this.x += moveSpeed;
        if (this.x > stgWidth/1.1)
        {
            game.rootScene.removeChild(this);
            mult = 1;
        }
        else if (this.intersect(pat))
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
				addBubble(this.x + 15, this.y + 30, 4);
               }
               else{
               	pat.frame = 11;
        		addBubble(this.x, this.y, 3);
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
    Sprite.call(this, 16,16);
    this.image = game.assets['images/proj-sheet.png'];
    this.x = xStart + 25;
    this.y = yStart;
    this.scaleX = 4.0;
    this.scaleY = 4.0;
    this.frame = 0;
    },
    
    isJump: false,
    
    onenterframe:function(){
        // need to put code to so x just goes straight
        //key inputs
        if (!this.isJump && this.y >= stgHeight/1.4)
            this.x+= moveSpeed
        else 
        {
            this.isJump = true; 
            this.x += moveSpeed;
            this.y += moveSpeed;
        }
        if (this.x < 0 || this.x > stgWidth/1.1)
        {
            game.rootScene.removeChild(this);
            isOut = false;
        }
        if (this.y < 0 || this.y > stgHeight/1.3)
        {
            game.rootScene.removeChild(this);
            isOut = false;
        }
        
        //rotate
        this.rotate(30);
        //on hit
        for (i = 0 ; i < people.length; i++)
        {
            if (this.intersect(people[i]))
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
		Sprite.call(this, 20, 20);
		this.image = game.assets['images/effect-sheet.png'];
		this.x = xpos;
		this.y = ypos - 80;
		this.scaleX = 4.0;
		this.scaleY = 4.0;
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
		Sprite.call(this, 20, 20);
		this.image = game.assets['images/effect-sheet.png'];
		this.x = stgWidth - xpos;
		this.y = 20;
		this.scaleX = 4.0;
		this.scaleY = 4.0;
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
		Sprite.call(this, 50, 50);
		this.image = game.assets['images/player-sheet.png'];
		this.x = stgWidth/2.5;
		this.y = stgHeight/1.4;
		this.scaleX = 4.0;
		this.scaleY = 4.0;
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
    
    jump: function(time) {
        
        if (this.isJump)
        {
            if (this.y > stgHeight/2.5)
                this.y -= jumpSpeed;
            else if (this.y <= stgHeight/2.5)
                this.isJump = false;
        }
        if (!this.isJump && this.y != stgHeight/1.4)
        {
            this.y += jumpSpeed;
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
            if(!(this.stun > 0) && !(this.wait > 0)){
            	this.frame = 0;
            }
        }
        if (game.input.right && this.x < stgWidth/ 1.1)
        {
            this.x += moveSpeed;
            this.rate = 4;
        }
        
        if(!game.input.right && !game.input.left){
        	this.rate = 2;
        }
		
		//player Controls
		//Jump check
		if (game.input.up && this.y === stgHeight/1.4)
        {
        	game.assets['sounds/playerJump.wav'].play();
            this.isJump = true;
            this.frame = 9;
        }
        
        //Throw check
        if(game.input.b && !thrown && !isOut){
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

//girl class
Girl = Class.create(Sprite, {
    initialize:function(x,y, dude){
        Sprite.call(this, 50,50);
        this.image = game.assets['images/char-sheet.png'];
        this.frame = 0;
        this.scaleX = 4.0;
        this.scaleY = 4.0;
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
        if (this.x <= 0){
            people.pop();
            game.rootScene.removeChild(this);
        }
        if (this.intersect(asdf) && !this.hit)
        {
            if (!this.dude && !this.hit)
                game.score += 100 * mult;
            else if (!this.hit)
                game.score += 750 * mult;
            people.pop();
            
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
        Sprite.call(this, 50,50);
        this.image = game.assets['images/char-sheet.png'];
        this.frame = 0;
        this.scaleX = 4.0;
        this.scaleY = 4.0;
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
            addBubble(this.x,this.y-30, 2);
        }
        this.x -= moveSpeed;
        
        if (this.x <= 0){
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
                game.rootScene.addChild(new npcThrow(this.x, this.y , 2 ));
            else
                game.rootScene.addChild(new npcThrow(this.x, this.y , 3));
        }    
        if (this.intersect(asdf) && !this.hit)
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
        Sprite.call(this, 50,50);
        this.image = game.assets['images/char-sheet.png'];
        this.frame = 0;
        this.scaleX = 4.0;
        this.scaleY = 4.0;
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
        if (this.x <= 0){

            people.pop();
            game.rootScene.removeChild(this);
        }
        if (this.intersect(asdf))
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
    if (x % 99 === 0)
    {
        girly = new Girl(stgWidth,stgHeight/1.4, false);
        people.push(girly);
        game.rootScene.addChild(girly);
        console.log("added girl, people.length is " + people.length);
    }
        
    if (x % 125 === 0) {
        g = new Girl (stgWidth+60, stgHeight/1.4, true);
        b = new Dude (stgWidth,stgHeight/1.4, g);
        people.push(b);
        //people.push(g);
        game.rootScene.addChild(b);
        //game.rootScene.addChild(g);
        console.log("added dude, people.length is " + people.length);
    }
    
    if (x % 170 === 0) {
        lady = new OldLady(stgWidth, stgHeight/1.4);
        people.push(lady);
        game.rootScene.addChild (lady);
        console.log("added oldlady, people.length is " + people.length);
    }
    
        
}

//Sidewalk Class
Sidewalk = Class.create(Sprite, {
	initialize:function(){
		Sprite.call(this, 375, 15);
		this.image = game.assets['images/sidewalk-sheet.png'];
		this.frame = 0;
		this.x = 100;
		this.y = stgHeight - 100;
		this.scaleX = 4.0;
		this.scaleY = 4.0;
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
         
//Begin game code
window.onload = function() {
    game = new Game(stgWidth, stgHeight);
    //Preload images
    //Any resources not preloaded will not appear
    game.preload('images/donut.png', 'images/icon0.png', 'images/bg.png', 'images/fullboxer.png', 'images/flash.png', 'images/chara1.png' ,
    	'images/ouch.png', 'images/skyland.jpg', 'images/player-sheet.png', 'images/char-sheet.png', 'images/dog-sheet.png', 
    	'images/proj-sheet.png', 'images/effect-sheet.png', 'images/sidewalk-sheet.png', 'images/game-bg.png', 'sounds/bgmusic.mp3', 
    	'sounds/dudeSound1.wav', 'sounds/dudeSound2.wav', 'sounds/dudeSound3.wav', 'sounds/gameover.wav',
    	'sounds/girlSound1.wav', 'sounds/girlSound2.wav', 'sounds/girlSound3.wav', 'sounds/girlSound4.wav',
    	'sounds/girlSound5.wav', 'sounds/oldLadySound.wav', 'sounds/playerHit1.wav', 'sounds/playerHit2.wav',
    	'sounds/playerJump.wav', 'sounds/whack.wav', 'sounds/whoosh.wav');
    	
    
    game.onload = function() { //Prepares the game
    	
		//Setup Sound
		this.bgm = game.assets['sounds/bgmusic.mp3'];
		this.bgm.play();
    	
    	//Prepare SFX
    	this.pJump = game.assets['sounds/playerJump.wav'];
    	this.pHit1 = game.assets['sounds/playerHit1.wav'];
    	this.pHit2 = game.assets['sounds/playerHit2.wav'];
    	
    	
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
		});
		multLabel.x = stgWidth/2 - 50;
		multLabel.color = "white";
		multLabel.font = "32px monospace";
		game.rootScene.addChild(multLabel);
		
		//Add hearts
		heart1 = new Heart(50);
		heart2 = new Heart(100);
		heart3 = new Heart(150);
		heart4 = new Heart(200);
		
		game.rootScene.addChild(heart1);
		game.rootScene.addChild(heart2);
		game.rootScene.addChild(heart3);
		game.rootScene.addChild(heart4);
		
		//Add healthcounter
		//using hearts now
		/*
		healthLabel = new Label("Health: ");
		healthLabel.x = 120;
		healthLabel.addEventListener('enterframe', function(){
			this.text = "Health: "+health;
			
			if(health <= 1){
				this.color = "red";
			}
			else{
				this.color = "white";
			}
		});
		healthLabel.color = "white";
		game.rootScene.addChild(healthLabel);
		*/
		
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