from Scene import Scene
from tkinter import *

class Sprite:

    width = 0
    height = 0
    x = 0
    y = 0
    dx = 0
    dy = 0
    speed = 10

    def __init__(self, Scene, width, height):
        Scene.bind('<Any-KeyPress>', self.checkKeys)
        self.width = width
        self.height = height
        self.canvas = Scene.canvas
        self.canvas.create_rectangle(0, 0, width, height , fill="#476042", tag="player")


    # set the postion of the sprite
    def setPosition(self, x, y):
        self.setX(x)
        self.setY(y)
        self.canvas.move('player', x, y)

    def setX(self, x):
        self.x = x

    def setY(self, y):
        self.y = y

    def setDX(self, dx):
        self.dx = dx

    def setDY(self, dy):
        self.dy = dy

    def setSpeed(self, speed):
        self.speed = speed

    def checkKeys(self, event):
        keyDown = event.keysym
        if keyDown == 'a':
            self.dx = -self.speed
        elif keyDown == 'd':
            self.dx = self.speed
        else:
            self.dx = 0
        if keyDown == 'w':
            self.dy = -self.speed
        elif keyDown == 's':
            self.dy = self.speed
        else:
            self.dy = 0

        print(keyDown)
        self.update()

    def update(self):
        self.x += self.dx
        self.y += self.dy
        self.checkbounds()
        self.canvas.delete('player')
        self.canvas.create_rectangle(self.x, self.y, (self.x + self.width), (self.y + self.height), fill="#476042", tag="player")

    # checks the bounds of the sprite object
    def checkbounds(self):
        print("width: {}".format(self.canvas.winfo_width()))
        print("dx: {}".format(self.dx))
        print("x position: {}".format(self.x))
        # basic canvas wrap around bounds checking
        if self.x >= self.canvas.winfo_width():
            self.x = 0
        elif self.x <= 0:
            self.x = self.canvas.winfo_width()
        if self.y >= self.canvas.winfo_height():
            self.y = 0
        elif self.y <= 0:
            self.y = self.canvas.winfo_height()





