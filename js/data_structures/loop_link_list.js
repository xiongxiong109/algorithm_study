// 循环链表
const LinkList = require('./link_list')

class LoopLinkList extends LinkList {
    constructor() {
        super();
        this.head.next = this.head
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