import unittest
from data_structures.loop_linklist import LoopLinkList


class TestLoopLinkList(unittest.TestCase):
    def test_show(self):
        li = LoopLinkList()
        li.insert('hello')
        li.insert('bear')
        li.insert('xiong', 'hello')
        self.assertEqual(li.to_arr(), ['bear', 'hello', 'xiong'])
