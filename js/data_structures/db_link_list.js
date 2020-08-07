const LinkList = require('./link_list')

// 双向链表结构
class DBLinkList extends LinkList {
    constructor() {
        // 继承普通链表, 注入双向节点
        super({ LinkNode })
    }
    insert(newItem, item = 'head') {
        const curNode = this.find(item);
        const newNode = new this.LinkNode(newItem);
        /**
         * head -> preNode -> curNode -> nextNode
         * head -> preNode -> curNode -> newNode -> nextNode
         */
        if (curNode.next) {
            // 下一个的上一级索引也是需要修改的，不然任意插入会有问题
            curNode.next.prev = newNode
        }
        newNode.next = curNode.next;
        newNode.prev = curNode;
        curNode.next = newNode;
    }
    remove(item) {
        const curNode = this.find(item);
        if (curNode.next != null) {
            /**
             * preNode -> curNode -> nextNode -> nextNextNode
             * preNode -> nextNode -> nextNextNode
             */
            curNode.prev.next = curNode.next
            curNode.next.prev = curNode.prev
            // gc ?
            curNode.next = null
            curNode.prev = null
        } else {
            curNode.prev.next = null
            curNode.prev = null
            // curNode = null
        }
    }
    // 查找最后一个元素
    findLastOne() {
        let curNode = this.head;
        while(curNode.next) {
            curNode = curNode.next
        }
        return curNode
    }
    // 倒序遍历
    toReverseArr() {
        let curNode = this.findLastOne();
        const reverseArr = [];
        while(curNode.prev) {
            reverseArr.push(curNode.item)
            curNode = curNode.prev;
        }
        return reverseArr
    }
}

// 双向链表节点
class LinkNode {
    constructor(item = 'head') {
        this.item = item;
        // 存在prev 节点和 next节点
        this.prev = null;
        this.next = null;
    }
}

module.exports = DBLinkList