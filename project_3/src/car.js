var NUM_CARS = 1;

function Car(sprit, speed){
    var carSpeed = BACKGROUND_SPEED;
    tCar = new Sprite(scene, "../assets/img/car" + sprit + ".png", 60, 120); 
    tCar.setAngle(-90);
    tCar.cHeight = 1600;
    tCar.setBoundAction(CONTINUE);


    // reset the car into some lane, making it slightly faster 
    // then previous 
    tCar.reset = function(){
        // randomize what column the vehicle will appear
        var newX = Math.floor(Math.random() * 4);
        //carSpeed += 2; 
        this.setDY(BACKGROUND_SPEED + speed);
        this.setDX(0);
        this.setPosition((250 + (100 * newX)), -150);
    }

    tCar.checkBounds = function(){
        if (this.y > ( 2 * scene.height)){
            this.reset();
        } 
    }

    tCar.reset();
    return tCar;
}

// 
function makeCars(){
    cars = new Array(NUM_CARS);
    for (i = 0; i < NUM_CARS; i++){
        var sprite = Math.floor(Math.random() * 6);
        var speed = Math.random() * 2;
        cars[i] = new Car(sprite, speed);
    }
}

function updateCars(){
    for (i = 0; i < NUM_CARS; i++){
        cars[i].update();
    } 
} 