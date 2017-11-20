from tkinter import *

class Scene(Frame):

    root = Tk()

    def _init_(self, master=None):
        Frame.__init__(self, master)
        self.master = master



    def startScene(self):
        app = Scene(self.root)
        # make it so the user cannot resize the window
        self.root.resizable(False, False)
        self.root.mainloop()

    #  set the scenes height and width in pixels
    def setSize(self, width, height):
        self.root.geometry(("%dx%d")%(width,height))

    # set the title of the game window
    def setTitle(self, title):
        self.root.title(title)
