# 循环链表
from data_structures.linklist import LinkList


# 循环链表实现
class LoopLinkList(LinkList):
    def __init__(self):
        super().__init__()
        # 构建循环链表
        self.head.next = self.head

    # 修改to_arr方法
    def to_arr(self):
        cur_node = self.head
        arr = []
        while cur_node.next.item != 'head':
            arr.append(cur_node.next.item)
            cur_node = cur_node.next
        return arr
