from tkinter import *

class Scene:

    def __init__(self):
        print("scene")
        self.root = Tk()
        self.canvas = Canvas(self.root, width=800, height=600)
        self.canvas.pack()




    def startScene(self):
        # make it so the user cannot resize the window
        self.root.resizable(False, False)
        self.root.mainloop()

    #  set the scenes height and width in pixels
    def setSize(self, width, height):
        self.canvas.config(width=width, height=height)
        self.root.geometry(("%dx%d")%(width,height))

    # set the title of the game window
    def setTitle(self, title):
        self.root.title(title)
