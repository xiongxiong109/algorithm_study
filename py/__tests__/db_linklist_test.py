import unittest
from data_structures.db_linklist import DBLinkList


class TestDbLinkList(unittest.TestCase):
    # 插入方法测试
    def test_insert(self):
        li = DBLinkList()
        li.insert('hello', 'head')
        li.insert('world', 'hello')
        li.insert('xiong', 'world')
        li.insert('bear')
        self.assertEqual(li.to_arr(), ['bear', 'hello', 'world', 'xiong'])

    # 删除方法
    def test_remove(self):
        li = DBLinkList()
        li.insert('hello', 'head')
        li.insert('bear', 'hello')
        li.insert('xiong', 'bear')
        self.assertEqual(li.to_arr(), ['hello', 'bear', 'xiong'])
        li.remove('bear')
        self.assertEqual(li.to_arr(), ['hello', 'xiong'])

    # 测试倒序方法
    def test_reverse(self):
        li = DBLinkList()
        li.insert('hello', 'head')
        li.insert('bear', 'hello')
        li.insert('xiong', 'hello')
        self.assertEqual(li.to_arr(), ['hello', 'xiong', 'bear'])
        self.assertEqual(li.to_reverse_arr(), ['bear', 'xiong', 'hello'])
