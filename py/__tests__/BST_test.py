from data_structures.BST import BST
import unittest


# 二叉查找树测试
class TestBST(unittest.TestCase):

    def test_insert(self):
        tree = BST()
        tree.insert(22)
        tree.insert(33)
        tree.insert(14)
        tree.insert(65)
        #        22
        #    14      33
        #               65
        self.assertEqual(tree.root.data, 22)
        self.assertEqual(tree.root.left.data, 14)
        self.assertEqual(tree.root.right.right.data, 65)

    def test_mid_order(self):
        tree = BST()
        tree.insert(22)
        tree.insert(33)
        tree.insert(14)
        tree.insert(65)
        tree.mid_order(tree.root)
        self.assertEqual(tree.order_list, [14, 22, 33, 65])
