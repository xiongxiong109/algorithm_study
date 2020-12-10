"""
oop
封装，继承，多态
python通过命名来尝试限制访问
private: __
protected: _
"""


# class Foo:
#
#     # 限定只能修改特定的属性
#     __slots__ = ('_box', '_name')
#
#     def __init__(self):
#         print('init foo')
#         self._box = 'hello'
#         self._name = 'asas'
#
#     def show(self):
#         print(self._box)
#
#     # 修改属性的getter方法
#     @property
#     def box(self):
#         return self._box + ' blabla'
#
#     # 修改属性的setter方法
#     @box.setter
#     def box(self, val):
#         self._box = 'haha' + val
#
#     # 定义类方法，可以创建新的实例, 默认第一个参数是cls
#     # @classmethod
#
#     # 定义静态方法, 静态方法自然是没有self的
#     @staticmethod
#     def is_valid():
#         print('ok')
#
#
# if __name__ == "__main__":
#     foo = Foo()
#     foo.show()
#     # print(foo.__box)
#     # 可以通过这个玩意访问
#     # print(foo._Foo__box)
#
#     # 通过修改属性的getter/setter, 来安全地访问内部变量
#     print(foo.box)
#     foo.box = 'jqxiong'
#     print(foo.box)
#     Foo.is_valid()
