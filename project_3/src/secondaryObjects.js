var NUM_TREES = 2;
var NUM_CONES = 2;

function Tree(postion){
    var spriteLife;
    tTree = new Sprite(scene, "../assets/img/tree0.png", 100, 100); 
    tTree.setBoundAction(CONTINUE);
    tTree.setAngle(90);
    
    
    tTree.reset = function(){
        var newImg = Math.floor(Math.random() * 9);
        spriteLife = Math.floor(Math.random() * 3) + 1;
        this.setImage("../assets/img/tree" + newImg + ".png");
        this.setPosition((70 + (700 * postion)) , -150);
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

function Cone(){
    tCone = new Sprite(scene, "../assets/img/cone1.png", 75, 75); 
    tCone.setBoundAction(CONTINUE);
    tCone.setAngle(90);
    
    
    tCone.reset = function(){
        var newImg = Math.floor(Math.random() * 1);
        //var newX = Math.floor(Math.random() * 1);
        this.setPosition(100, -150);
        //carSpeed += 2; 
        this.setDY(BACKGROUND_SPEED);
        this.setDX(0);        
    }

    tCone.checkBounds = function(){
        if (this.y > ( 2 * scene.height)){
            this.reset();
        } 
    }

    tCone.reset();
    return tCone;
}

function makeSecondaryObject(){
    trees = new Array(NUM_TREES);
    for (i = 0; i < NUM_TREES; i++){
        trees[i] = new Tree(i);
    }

    // cones = new Array(NUM_CONES);
    // for (i = 0; i < NUM_CONES; i++){
    //     trees[i] = new Tree(i);
    // }
}

function updateSecondaryObject(){
    for (i = 0; i < NUM_TREES; i++){
        trees[i].update();
    }
}



