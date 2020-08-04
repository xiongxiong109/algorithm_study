import unittest
from data_structures.loop_linklist import LoopLinkList


class TestLoopLinkList(unittest.TestCase):
    def test_show(self):
        li = LoopLinkList()
        li.insert('hello')
        li.insert('bear')
        li.insert('xiong', 'hello')
        self.assertEqual(li.to_arr(), ['bear', 'hello', 'xiong'])

    def test_move(self):
        li = LoopLinkList()
        li.insert('leoo')
        li.insert('bear')
        li.insert('xx')
        self.assertEqual(li.to_arr(), ['xx', 'bear', 'leoo'])
        li.move(2)
        self.assertEqual(li.cur_node.item, 'bear')
        li.move_to_head()
        self.assertEqual(li.cur_node.item, 'head')
        li.move(4)
        self.assertEqual(li.cur_node.item, 'xx')
