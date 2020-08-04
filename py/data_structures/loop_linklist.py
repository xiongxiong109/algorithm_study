# 循环链表
from data_structures.linklist import LinkList


# 循环链表实现
class LoopLinkList(LinkList):
    def __init__(self):
        super().__init__()
        # 构建循环链表
        # 链表指针
        self.cur_node = self.head
        self.head.next = self.head

    # 修改to_arr方法
    def to_arr(self):
        cur_node = self.head
        arr = []
        while cur_node.next.item != 'head':
            arr.append(cur_node.next.item)
            cur_node = cur_node.next
        return arr
    
    # 指针向前移动n个位置
    def move(self, n):
        i = 0
        while i < n:
            i += 1
            self.cur_node = self.cur_node.next
            # 处理移动到头部后，自动走到下一位
            if self.cur_node.item == 'head' and self.cur_node.next.item != 'head':
                self.cur_node = self.cur_node.next

    # 回到头部
    def move_to_head(self):
        self.cur_node = self.head

    def show(self):
        return self.cur_node
