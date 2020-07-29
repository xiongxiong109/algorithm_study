import unittest
from data_structures.db_linklist import DBLinkList


class TestDbLinkList(unittest.TestCase):
    # 插入方法测试
    def test_insert(self):
        li = DBLinkList()
        li.insert('hello', 'head')
        li.insert('world', 'hello')
        li.insert('xiong', 'world')
        self.assertEqual(li.to_arr(), ['hello', 'world', 'xiong'])
