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
        }
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