import unittest
from data_structures.linklist import ListNode, Linklist

class TestLinkList(unittest.TestCase):
    # 新增节点方法测试
    def test_node(self):
        node = ListNode(item = { 'foo': 'bar' })
        self.assertEqual(node.item, { 'foo': 'bar' })
        self.assertEqual(node.next, None)
    # 链表插入方法测试
    def test_insert(self):
        li = Linklist()
        # 按序插入
        li.insert('hello')
        li.insert('world', 'hello')
        # 在指定元素后面插入
        li.insert('xiong', 'world')
        self.assertEqual(li.toArr(), ['hello', 'world', 'xiong'])