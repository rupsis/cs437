from Scene import Scene
import tkinter as tk
from PIL import Image, ImageTk
import uuid
import math

class Sprite:

    angle = 0
    width = 0
    height = 0
    x = 0
    y = 0
    dx = 0
    dy = 0
    speed = 10

    def __init__(self, Scene, imagePath, width, height):
        self.id = uuid.uuid1()
        self.width = width
        self.height = height
        self.canvas = Scene.canvas
        self.imagePath = imagePath
        self.img = Image.open(imagePath)
        self.spriteImage = ImageTk.PhotoImage(self.img)
        # self.canvas.create_rectangle(0, 0, width, height , fill="#476042", tag="player")
        self.canvas.create_image(0, 0, image=self.spriteImage, anchor='center', tag=self.id)


    # set the postion of the sprite
    def setPosition(self, x, y):
        self.setX(x)
        self.setY(y)
        self.canvas.delete(self.id)
        self.canvas.create_image(self.x, self.y, image=self.spriteImage, anchor='center', tag=self.id)

    def setX(self, x):
        self.x = x

    def setY(self, y):
        self.y = y

    def setDX(self, dx):
        self.dx = dx

    def setDY(self, dy):
        self.dy = dy

    def setSize(self, width, height):
        self.height += height
        self.width += width
        # make sure the object stays at least 1x1
        if self.width <= 1:
            self.width = 1

        if self.height <= 1:
            self.height = 1

        self.spriteImage = ImageTk.PhotoImage(self.img.resize((self.width, self.height)))



    def rotate(self, angle):

        self.angle += angle

        # keep rotation between 0-360
        if self.angle < 0:
            self.angle = (360 - angle)
        if self.angle > 360:
            self.angle = (0 + angle)
        self.spriteImage = ImageTk.PhotoImage(self.img.rotate(self.angle, expand=1))


    def setSpeed(self, speed):
        self.speed = speed

    # update the sprite object
    def update(self):
        self.x += self.dx
        self.y += self.dy
        self.checkbounds()
        self.canvas.delete(self.id)
        self.canvas.create_image(self.x, self.y, image=self.spriteImage, anchor='center', tag=self.id)

    def checkCollision(self):

        # Check to see if there is a collision with this game object
        if len(self.canvas.find_overlapping(*self.canvas.bbox(self.id))) > 1:
            return True

        return False


    # checks the bounds of the sprite object
    def checkbounds(self):
        # basic canvas wrap around bounds checking
        if self.x >= self.canvas.winfo_width():
            self.x = 0
        elif self.x <= 0:
            self.x = self.canvas.winfo_width()
        if self.y >= self.canvas.winfo_height():
            self.y = 0
        elif self.y <= 0:
            self.y = self.canvas.winfo_height()





