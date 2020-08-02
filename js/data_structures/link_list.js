// 链表数据结构

class LinkList {
    // 初始化头节点
    constructor(props = {}) {
        this.LinkNode = props.LinkNode || LinkNode;
        this.head = new this.LinkNode();
    }
    /**
     * 插入节点
     * head -> curNode -> nextNode
     * head -> curNode -> newNode -> nextNode
     */
    insert(newItem, item = 'head') {
        const preNode = this.find(item)
        const nextNode = new this.LinkNode(newItem)
        // 节点引用继承
        nextNode.next = preNode.next;
        preNode.next = nextNode;
    }
    // 查找节点
    find(item) {
        let curNode = this.head;
        while(curNode.item != item) {
            curNode = curNode.next
        }
        return curNode
    }
    // 删除节点
    remove(item) {
        // 找到待删除节点的上一个节点
        const preNode = this.findPrev(item);
        preNode.next = preNode.next.next; // 跳过当前的next
        // preNode.next.next = null; // 这里是否需要gc?
    }
    // 查找前一个节点
    findPrev(item) {
        let curNode = this.head;
        while(curNode.next.item != item) {
            curNode = curNode.next
        }
        return curNode
    }
    // 列出节点展示
    toArr() {
        const arr = [];
        let curNode = this.head;
        while(curNode.next != null) {
            arr.push(curNode.next.item)
            curNode = curNode.next; // 容易忘记移动指针
        }
        return arr
    }
}

// 创建节点
class LinkNode {
    constructor(item = 'head') {
        this.item = item;
        this.next = null;
    }
}

module.exports= LinkList