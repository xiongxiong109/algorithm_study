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
})