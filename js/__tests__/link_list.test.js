const LinkList = require('../data_structures/link_list')

describe('链表结构测试', () => {

    let li;

    /**
     * 不能使用beforeAll, beforeAll只执行一次，会影响下一个测试用例的执行结果
     * beforeEach可以在每个测试用例之前都执行
     */
    beforeEach(() => {
        li = new LinkList()
    })

    it('插入节点测试', () => {
        li.insert('hello');
        li.insert('world');
        li.insert('bear', 'hello'); // 在hello 后插入 bear
        expect(li.toArr()).toEqual(['world', 'hello', 'bear']);
    })

    it('删除节点测试', () => {
        li.insert('xx');
        li.insert('asas');
        li.insert('bear');
        li.insert('xiong', 'asas');
        expect(li.toArr()).toEqual(['bear', 'asas', 'xiong', 'xx']);
        li.remove('asas')
        expect(li.toArr()).toEqual(['bear', 'xiong', 'xx']);
    })

})