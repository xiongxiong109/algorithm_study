# 二叉查找树
class BST:

    # 最终遍历之后展示的数组
    order_list = []

    def __init__(self):
        # 根节点
        self.root = None

    # 插入节点
    def insert(self, data):
        cur_node = self.root
        insert_node = BNode(data)
        if cur_node.data is None:
            self.root = insert_node
        else:
            # 遍历节点，将小的元素放到左边，大的放到右边
            while True:
                parent_node = cur_node
                if insert_node.data <= cur_node.data:
                    cur_node = cur_node.left
                    if cur_node is None:
                        parent_node.left = insert_node
                        break
                else:
                    cur_node = cur_node.right
                    if cur_node is None:
                        parent_node.right = insert_node
                        break

    # 中序遍历
    def mid_order(self, node):
        if node is not None:
            self.mid_order(node.left)
            self.order_list.append(node.data)
            self.mid_order(node.right)


# 树节点
class BNode:
    def __init__(self, data):
        self.data = data
        # 左子树
        self.left = None
        # 右子树
        self.right = None
