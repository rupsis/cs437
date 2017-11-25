import tkinter as tk
import time

class Scene:

    #define the minimum framerate
    time = 0.033

    def __init__(self):
        print("scene")
        self.root = tk.Tk()
        self.canvas = tk.Canvas(self.root, width=800, height=600)
        self.canvas.pack()




    def startScene(self):
        # make it so the user cannot resize the window
        self.root.resizable(False, False)
        # self.root.mainloop()
        while True:
            self.root.update_idletasks()
            self.root.update()
            time.sleep(self.time)

    #  set the scenes height and width in pixels
    def setSize(self, width, height):
        self.canvas.config(width=width, height=height)
        self.root.geometry(("%dx%d")%(width,height))

    # set the title of the game window
    def setTitle(self, title):
        self.root.title(title)

    def setFrameRate(self, fps):
        self.time = float((1 / fps))

    # bind and an even to a function
    def bind(self, key, function):
        self.root.bind(key, function)
