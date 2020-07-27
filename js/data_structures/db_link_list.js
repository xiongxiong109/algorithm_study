const LinkList = require('./link_list')

// 双向链表结构
class DBLinkList extends LinkList {
    constructor() {
        // 继承普通链表, 注入双向节点
        super({ LinkNode })
    }
    insert(newItem, item = 'head') {
        const curNode = this.find(item);
        newItem.next = curNode.next;
        newItem.prev = curNode;
        curNode.next = newItem;
    }
    remove(item) {
        const curNode = this.find(item);
        if (curNode.next != null) {
            // todo
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