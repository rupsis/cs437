from Scene import Scene
from tkinter import *

class Sprite:

    def __init__(self, Scene, imagePath, width, height):
        # open the image
        spriteImage = PhotoImage(file=imagePath)
        spriteImage.zoom(width, height)
        Sprite = Label(Scene, image=spriteImage)

        Sprite.pack()
        Sprite.update()

    # def update(self, image):


