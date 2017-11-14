function Background(){
    tBackground = new Sprite(scene, "../assets/img/background.png", 800, 1440);
    tBackground.setDX(0);
    tBackground.setDY(BACKGROUND_SPEED);
    tBackground.setPosition(400, 0);
           
    tBackground.checkBounds = function(){
        if (this.y > 655){
            this.setPosition(400, -120);
            tBackground.setDY(BACKGROUND_SPEED);
        } 
    }
           
    return tBackground;    
}
