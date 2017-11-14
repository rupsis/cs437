var NUM_OBJECTS = 2;


function Tree(postion){
    var spriteLife;
    tTree = new Sprite(scene, "../assets/img/tree0.png", 100, 100); 
    tTree.setBoundAction(CONTINUE);
    tTree.setAngle(90);
    
    
    tTree.reset = function(){
        var newImg = Math.floor(Math.random() * 9);
        spriteLife = Math.floor(Math.random() * 3) + 1;
        this.setImage("../assets/img/tree" + newImg + ".png");
        this.setPosition((70 + (675 * postion)) , -150);
        //carSpeed += 2; 
        this.setDY(BACKGROUND_SPEED);
        this.setDX(0);        
    }

    tTree.checkBounds = function(){
        if (this.y > ( spriteLife * scene.height)){
            this.reset();
        } 
    }

    tTree.reset();
    return tTree;
}

function Cone(position){
    var spriteLife;
    tCone = new Sprite(scene, "../assets/img/cone1.png", 40, 40); 
    tCone.setBoundAction(CONTINUE);
    tCone.setAngle(90);
    
    
    tCone.reset = function(){
        spriteLife = Math.floor(Math.random() * 3) + 1;
        var newImg = Math.floor(Math.random() * 2);
        this.setImage("../assets/img/cone" + newImg + ".png");
        this.setPosition(150 + (500 * position), -300);
        this.setDY(BACKGROUND_SPEED);
        this.setDX(0);        
    }

    tCone.checkBounds = function(){
        if (this.y > ( spriteLife * scene.height)){
            this.reset();
        } 
    }

    tCone.reset();
    return tCone;
}

function makeSecondaryObject(){
    trees = new Array(NUM_OBJECTS);
    for (i = 0; i < NUM_OBJECTS; i++){
        trees[i] = new Tree(i);
    }

    cones = new Array(NUM_OBJECTS);
    for (i = 0; i < NUM_OBJECTS; i++){
        cones[i] = new Cone(i);
    }
}

function updateSecondaryObject(){
    for (i = 0; i < NUM_OBJECTS; i++){
        trees[i].update();
    }

    for (i = 0; i < NUM_OBJECTS; i++){
        cones[i].update();
    }
}



