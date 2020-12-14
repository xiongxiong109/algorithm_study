# GUI 编程
import tkinter
from tkinter import (
    messagebox,
    Tk, Label
)


def main():

    def change_btn_text():
        btn.config(text="box")

    top = Tk()
    top.geometry('240x160')
    top.title('hello world')
    # 创建标签对象并添加到顶层窗口
    label = Label(
        top,
        text="hello"
    )
    label.pack(expand=1)
    # 创建容器
    panel = tkinter.Frame(top)
    # 创建按钮放到容器中
    btn = tkinter.Button(panel, text="greet", command=change_btn_text)
    # 放置元素位置(相对于panel)?
    btn.pack(side="left")

    # 放置容器位置(相对于top)
    panel.pack(side="bottom")

    tkinter.mainloop()


if __name__ == "__main__":
    main()
