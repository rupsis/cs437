var NUM_CARS = 5;

function Car(position){
    tCar = new Sprite(scene, "../assets/img/car0.png", 60, 120); 
    tCar.setAngle(-90);
    tCar.cHeight = 1600;
    tCar.setBoundAction(CONTINUE);


    // reset the car into some lane, making it slightly faster 
    tCar.reset = function(){
        // randomize what sprite the car will be
        var newSprite = Math.floor(Math.random() * 6);
        // fake how long it takes for the sprite to reset it's self
        spriteLife = (Math.random() * 3) + 1;
        console.log("spriteLife " + spriteLife);
        this.setImage("../assets/img/car" + newSprite + ".png");
        // as background speed progresses, the cars will get faster
        this.setDY(BACKGROUND_SPEED);
        this.setDX(0);
        var strtingPostion = Math.floor(Math.random() * 2) + 1;
        this.setPosition((250 + (75 * position)), (-150 * strtingPostion));
    }

    tCar.checkBounds = function(){
        if (this.y > ( spriteLife * scene.height)){
            this.reset();
        } 
    }

    tCar.reset();
    // start the cars just off the bottom of the canvas 
    tCar.setPosition((250 + (75 * position)), (scene.height + 100));
    return tCar;
}


function makeCars(){
    cars = new Array(NUM_CARS);
    for (i = 0; i < NUM_CARS; i++){
        cars[i] = new Car(i);
    }
}

function updateCars(){
    for (i = 0; i < NUM_CARS; i++){
        cars[i].update();
    } 
} 