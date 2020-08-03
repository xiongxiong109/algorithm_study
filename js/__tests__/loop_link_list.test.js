const LoopLinkList = require('../data_structures/loop_link_list')

describe('LoopLinkList', () => {

    let li;

    beforeEach(() => {
        li = new LoopLinkList()
    })

    it('show list', () => {
        li.insert('hello');
        li.insert('world');
        expect(li.toArr()).toEqual(['world', 'hello'])
    })

    it('move方法测试', () => {
        li.insert('hello');
        li.insert('world')
        li.insert('bear')
        li.insert('xiong', 'world')
        expect(li.toArr()).toEqual(['bear', 'world', 'xiong', 'hello'])
        li.move(2)
        expect(li.show()).toEqual('world')
        li.moveToHead()
        li.remove('xiong')
        li.move(3)
        expect(li.show()).toEqual('hello')
    })
})