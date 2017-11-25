from Scene import Scene
from Sprite import Sprite


def main():

    scene = Scene()
    scene.setTitle("Demo")
    scene.setSize(800, 600)

    player = Sprite(scene, 50, 50)
    player.setPosition(400, 300)
    scene.startScene()

    print("test")

    # the actual game loop
    while True:
        pass


main()