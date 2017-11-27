from Scene import Scene
from Sprite import Sprite
from Player import Player
from random import randint


def main():

    scene = Scene()
    scene.setTitle("Demo")
    scene.setSize(800, 600)

    # image by sujit1717
    player = Player(scene, 'player.png', 50, 100)
    player.setPosition(400, 300)


    box = Sprite(scene, 'box.png', 50, 50)
    box.setPosition(500, 500)


    #  define custom update method that'll be passed to the game loop
    def checkPlayerCollisions():
        if player.checkCollision():
            box.setPosition(
                randint(0, scene.width),
                randint(0, scene.height)
            )



    #  start the game loop
    scene.startScene(checkPlayerCollisions)





main()