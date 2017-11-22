from Scene import Scene
from PIL import Image, ImageTk
from tkinter import *

class Sprite():

    def _init_(self, Scene, imagePath, width, height):
        # open the image
        spriteImage = ImageTk.PhotoImage(open(imagePath))
        Sprite = Label(Scene, image = spriteImage)
        Sprite.pack()
