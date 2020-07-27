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

    })
})
