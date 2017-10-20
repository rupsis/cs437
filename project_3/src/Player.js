function Player(){
    tPlayer = new Sprite(scene, "../assets/img/player.png", 100, 100);
    tPlayer.setPosition(400, 550);
    tPlayer.setSpeed(0);
    tPlayer.setAngle(90);
    tPlayer.checkKeys = function(){
        tPlayer.setAngle(90);
        if (keysDown[K_A]){
            this.changeXby(-7);
            tPlayer.setAngle(70);
        } else if (keysDown[K_D]){
            this.changeXby(7);
            this.setAngle(110);
        }
    }
    return tPlayer;
}