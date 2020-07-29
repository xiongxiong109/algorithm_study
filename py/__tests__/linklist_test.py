import unittest
from data_structures.linklist import ListNode, LinkList


class TestLinkList(unittest.TestCase):
    # 新增节点方法测试
    def test_node(self):
        node = ListNode(item={'foo': 'bar'})
        self.assertEqual(node.item, {'foo': 'bar'})
        self.assertEqual(node.next, None)

    # 链表插入方法测试
    def test_insert(self):
        li = LinkList()
        # 按序插入
        li.insert('hello')
        li.insert('world', 'hello')
        # 在指定元素后面插入
        li.insert('xiong', 'world')
        li.insert('box', 'hello')
        self.assertEqual(li.to_arr(), ['hello', 'box', 'world', 'xiong'])

    # 查找前一个节点测试
    def test_find_prev(self):
        li = LinkList()
        li.insert('aaa')
        li.insert('bbb')
        self.assertEqual(li.to_arr(), ['bbb', 'aaa'])
        prev_a = li.find_prev('aaa')
        self.assertEqual(prev_a.item, 'bbb')

    # 删除节点测试
    def test_remove(self):
        li = LinkList()
        li.insert('xiong')
        li.insert('bear', 'xiong')
        li.insert('xxxx', 'xiong')
        li.insert('asas', 'bear')
        self.assertEqual(li.to_arr(), ['xiong', 'xxxx', 'bear', 'asas'])
        # remove
        li.remove('bear')
        self.assertEqual(li.to_arr(), ['xiong', 'xxxx', 'asas'])
        # remove last one
        li.remove('asas')
        self.assertEqual(li.to_arr(), ['xiong', 'xxxx'])