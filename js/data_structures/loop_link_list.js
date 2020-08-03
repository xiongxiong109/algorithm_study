// 循环链表
const LinkList = require('./link_list')

class LoopLinkList extends LinkList {
    constructor() {
        super();
        // 放置一个记录当前指针位置的索引
        this.curNode = this.head
        this.head.next = this.head
    }
    // 从当前索引向后移动n个位置
    move(n) {
        for (let i = 0; i < n; i++) {
            this.curNode = this.curNode.next
            // 跳过头节点
            if(this.curNode.item == 'head' && this.curNode.next.item != 'head') {
                this.curNode = this.curNode.next
            }
        }
    }
    // 回到头部
    moveToHead() {
        this.curNode = this.head
    }
    // 展示当前指针位置
    show() {
        return this.curNode.item
    }
    toArr() {
        let curNode = this.head
        const arr = [];

        while (curNode.next.item != 'head') {
            arr.push(curNode.next.item)
            curNode = curNode.next
        }

        return arr
    }
}

module.exports = LoopLinkList