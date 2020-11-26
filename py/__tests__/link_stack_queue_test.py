from data_structures.link_stack_que import LinkList
import unittest


class TestLinkStackQueue(unittest.TestCase):
    def test_stack(self):
        link_stack = LinkList()
        link_stack.push(1)
        link_stack.push(2)
        link_stack.push(3)
        self.assertEqual(link_stack.pop().item, 3)
        self.assertEqual(link_stack.pop().item, 2)
        self.assertEqual(link_stack.pop().item, 1)

    def test_queue(self):
        link_queue = LinkList()
        link_queue.put(1)
        link_queue.put(2)
        link_queue.put(3)
        self.assertEqual(link_queue.get().item, 1)
        self.assertEqual(link_queue.get().item, 2)
        self.assertEqual(link_queue.get().item, 3)
