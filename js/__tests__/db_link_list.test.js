const DBLinkList = require('../data_structures/db_link_list')

describe('双向链表测试', () => {

    let li;

    beforeEach(() => {
        li = new DBLinkList();
    })

    it('insert', () => {
        li.insert('hello');
        li.insert('world', 'hello');
        expect(li.toArr()).toEqual(['hello', 'world'])
    })

    it('remove', () => {
        li.insert('hello');
        li.insert('world', 'hello'); // 默认头部插入暂时有点问题
        li.insert('bear', 'hello')
        expect(li.toArr()).toEqual(['hello', 'bear', 'world'])
        li.remove('bear');
        expect(li.head.next.item).toEqual('hello')
        expect(li.toArr()).toEqual(['hello', 'world'])
    })

})
