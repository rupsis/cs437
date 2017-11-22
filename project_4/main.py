from Scene import Scene
from Sprite import Sprite
from tkinter import *

def main():

    print("test")
    scene = Scene()
    scene.setTitle("Demo")
    scene.setSize(800, 600)

    player = Sprite(scene, "testImage.gif", 50, 50)

    

    scene.startScene()

main()