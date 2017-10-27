function Player(){
    tPlayer = new Sprite(scene, "../assets/img/player.png", 60, 120);
    tPlayer.setBoundAction(STOP);
    tPlayer.setPosition(400, 540);
    tPlayer.setSpeed(0);
    tPlayer.setAngle(90);
    tPlayer.checkKeys = function(){
        tPlayer.setAngle(90);
        if (keysDown[K_A]){
            // left bounds checking
            if(this.x >= (this.width / 2)){
                this.changeXby(-8);
                tPlayer.setAngle(70);
            }
            
        } else if (keysDown[K_D]){
            // right bounds checking
            if(this.x <= (scene.width - (this.width / 2))){
                this.changeXby(8);
                this.setAngle(110);
            }
        }
    }
    return tPlayer;
}