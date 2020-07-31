// 循环链表
import LinkList from './link_list'

class LoopLinkList extends LinkList {
    constructor() {
        super();
        this.head.next = this.head
    }
}

export default LoopLinkList