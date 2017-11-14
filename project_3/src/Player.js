var joy;

function Player(){
    tPlayer = new Sprite(scene, "../assets/img/player.png", 60, 120);
    tPlayer.setBoundAction(STOP);
    tPlayer.setPosition(400, 540);
    tPlayer.setSpeed(0);
    tPlayer.setAngle(90);
    if (scene.touchable){joy = new Joy(); } 

    // for desktop
    tPlayer.checkKeys = function(){
        tPlayer.setAngle(90);
        var playSound = Math.floor(Math.random() * 6);
        if (keysDown[K_A]){
            // left bounds checking
            if(this.x >= (this.width / 2)){
                this.changeXby(-PLAYER_SPEED);
                tPlayer.setAngle(70);
                if(playSound == 0){skrrt.play()}
            }
            
        } else if (keysDown[K_D]){
            // right bounds checking
            if(this.x <= (scene.width - (this.width / 2))){
                this.changeXby(PLAYER_SPEED);
                this.setAngle(110);
                if(playSound == 0){skrrt.play()}
            }
        }
    }

    // for mobile
    tPlayer.checkJoyStick = function(){
        tPlayer.setAngle(90);
        var playSound = Math.floor(Math.random() * 6);
        dx = joy.getDiffX();
        if (dx < 0){
            // left bounds checking
            if(this.x >= (this.width / 2)){
                this.changeXby(-PLAYER_SPEED);
                tPlayer.setAngle(70);
                if(playSound == 0){skrrt.play()}
            }
            
        } else if (dx > 0){
            // right bounds checking
            if(this.x <= (scene.width - (this.width / 2))){
                this.changeXby(PLAYER_SPEED);
                this.setAngle(110);
                if(playSound == 0){skrrt.play()}
            }
        }
    }
    return tPlayer;
}