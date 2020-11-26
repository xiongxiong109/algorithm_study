# 用链表实现栈，队列的相关操作方法
# 不同的数据结构可以相互实现, 是一种抽象数据类型的体现 (算法 第四版)


# LinkNode
class LinkNode:
    def __init__(self, item):
        self.item = item
        # 双向链表
        self.next = None
        self.prev = None


# 链表结构
class LinkList:

    def __init__(self):
        self.list = []
        # 初始化head
        self.head = LinkNode('head')
        self.last = LinkNode('last')

        # 指针关系绑定
        self.head.next = self.last
        self.head.prev = self.last
        self.last.prev = self.head
        self.last.next = self.head

    # 栈的相关方法实现(总是在最后添加元素)
    def push(self, item):

        link_node = LinkNode(item)

        self.last.prev.next = link_node
        link_node.prev = self.last.prev
        link_node.next = self.last
        self.last.prev = link_node

    # 出栈, 总是弹出最后一个元素
    def pop(self):
        last_node = self.last.prev
        # 避免把头给干没了
        if last_node.item != 'head':
            last_node.prev.next = self.last
            self.last.prev = last_node.prev
        return last_node

    # 出栈实现，FILO
    def show_stack(self):
        self.list = []
        cur_node = self.last
        while cur_node.prev.item != 'head':
            cur_node = cur_node.prev
            self.list.append(cur_node.item)
        return self.list

    # 入队, 从头部开始插入元素
    def put(self, item):

        link_node = LinkNode(item)
        link_node.next = self.head.next
        self.head.next.prev = link_node
        self.head.next = link_node
        link_node.prev = self.head

    # 出队
    def get(self):
        cur_node = self.last.prev
        if cur_node.item != 'head':
            cur_node.prev.next = self.last
            self.last.prev = cur_node.prev
            return cur_node


# if __name__ == "__main__":
    # link_stack = LinkList()
    # link_stack.push('aaa')
    # link_stack.push('sdsdsd')
    # link_stack.push('baababa')
    # link_stack.pop()
    # link_stack.pop()
    # link_stack.pop()
    # link_stack.pop()
    # rst = link_stack.show_stack()
    # link_stack.put('aa')
    # link_stack.put('sas')
    # link_stack.put('fgdfg')
    # print(link_stack.get().item)
    # print(link_stack.get().item)
    # print(link_stack.get().item)
    # print(link_stack.get().item)
    # print(rst)
