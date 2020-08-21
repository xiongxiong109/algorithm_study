from data_structures.BST import BST
import unittest


# 二叉查找树测试
def _create_tree():
    tree = BST()
    tree.insert(22)
    tree.insert(33)
    tree.insert(14)
    tree.insert(65)
    tree.insert(18)
    tree.insert(6)
    #          22
    #    14         33
    # 6     18          65
    return tree


class TestBST(unittest.TestCase):

    def test_insert(self):
        tree = _create_tree()
        self.assertEqual(tree.root.data, 22)
        self.assertEqual(tree.root.left.data, 14)
        self.assertEqual(tree.root.right.right.data, 65)

    # 中序 左 -> 根 -> 右
    def test_mid_order(self):
        tree = _create_tree()
        tree.mid_order(tree.root)
        self.assertEqual(tree.order_list, [6, 14, 18, 22, 33, 65])

    # 先序 根 -> 左 -> 右
    def test_pre_order(self):
        tree = _create_tree()
        tree.pre_order(tree.root)
        self.assertEqual(tree.order_list, [22, 14, 6, 18, 33, 65])

    # 后序 左 -> 右 -> 根
    def test_post_order(self):
        #          22
        #    14         33
        # 6     18          65
        tree = _create_tree()
        tree.post_order(tree.root)
        self.assertEqual(tree.order_list, [6, 18, 14, 65, 33, 22])

    def test_find_min(self):
        tree = _create_tree()
        self.assertEqual(tree.find_min(), 6)
        tree_only = BST()
        # 考虑临界值情况
        tree_only.insert(7)
        self.assertEqual(tree_only.find_min(), 7)

    def test_find_max(self):
        tree = _create_tree()
        self.assertEqual(tree.find_max(), 65)
