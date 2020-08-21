# 二叉查找树
class BST:

    # 最终遍历之后展示的数组
    # 这个玩意如果写在这里，每次计算都会保留上一次的结果
    # order_list = []

    def __init__(self):
        # 根节点
        self.root = None
        self.order_list = []

    # 插入节点
    def insert(self, data):
        cur_node = self.root
        insert_node = BNode(data)
        if cur_node is None:
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

    # 先序遍历
    def pre_order(self, node):
        if node is not None:
            self.order_list.append(node.data)
            self.pre_order(node.left)
            self.pre_order(node.right)

    # 中序遍历
    def mid_order(self, node):
        # 遍历前重置元素序列
        # if node == self.root:
        #     self.order_list = []
        if node is not None:
            self.mid_order(node.left)
            self.order_list.append(node.data)
            self.mid_order(node.right)

    # 后序遍历
    def post_order(self, node):
        if node is not None:
            self.post_order(node.left)
            self.post_order(node.right)
            self.order_list.append(node.data)

    # 查找最小值, 找到最左边的元素即可
    def find_min(self):
        node = self.root
        while node.left:
            node = node.left
        return node.data

    # 查找最大值, 返回最右侧的元素
    def find_max(self):
        node = self.root
        while node.right:
            node = node.right
        return node.data


# 树节点
class BNode:
    def __init__(self, data):
        self.data = data
        # 左子树
        self.left = None
        # 右子树
        self.right = None
