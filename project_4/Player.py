from Sprite import Sprite

# inherit from the sprite class, and add checkKeys method to update object
class Player(Sprite):
    def __init__(self, Scene, imagePath, width, height):
        super().__init__(Scene, imagePath, width, height)
        Scene.bind('<Any-KeyPress>', self.checkKeys)


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

        # rotation
        if keyDown == 'Left':
            self.rotate(10)
        elif keyDown == 'Right':
            self.rotate(-10)

        # scale
        if keyDown == 'q':
            self.setSize(-1, -1)
        elif keyDown == 'e':
            self.setSize(1, 1)


        self.update()
