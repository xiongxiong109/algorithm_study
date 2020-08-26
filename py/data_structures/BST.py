# 二叉查找树


# 获取当前节点左子树中的最大值, 即访问最右侧节点
def get_max_left(node):
    cur_node = node
    while cur_node.right:
        cur_node = cur_node.right
    return cur_node


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

    # 查找元素
    def find(self, data):
        cur_node = self.root
        while cur_node:
            if cur_node.data == data:
                return True
            else:
                if data < cur_node.data:
                    cur_node = cur_node.left
                else:
                    cur_node = cur_node.right
        return False

    # 删除节点
    def remove(self, data):
        root = self.__remove_node(self.root, data)
        return root

    # 根据节点内容, 处理待删除子树剩余节点
    def __remove_node(self, node, data):
        if node is None:
            return None
        else:
            # 当前节点是待删除节点
            if node.data == data:
                # 待删除节点没有子节点
                if node.left is None and node.right is None:
                    return None
                # 无左子树有右子树
                elif node.left is None:
                    node = node.right
                    return node
                # 无右子树有左子树
                elif node.right is None:
                    node = node.left
                    return node
                # 左右子树均存在
                # 这里取左子树中的最大值替换原来的节点
                # -- 另一种方案是取右子树中的最小值，已经在js版本中实现
                else:
                    tem_node = get_max_left(node.left)
                    node.data = tem_node.data
                    node.left = self.__remove_node(node.left, tem_node.data)
                    return node

            # 数据比当前节点小，向左递归
            elif data < node.data:
                node = self.__remove_node(node.left, data)
                return node
            # 数据比当前节点大，向右递归
            else:
                node = self.__remove_node(node.right, data)
                return node


# 树节点
class BNode:
    def __init__(self, data):
        self.data = data
        # 左子树
        self.left = None
        # 右子树
        self.right = None
