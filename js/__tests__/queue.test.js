const Queue = require('../data_structures/queue');

describe('test Queue', () => {

    let queue;

    beforeEach(() => {
        queue = new Queue();
    })

    it('获取队列长度', () => {
        queue.put(1).put(2).put(3);
        expect(queue.size()).toEqual(3);
    })

    it('队列FIFO', () => {
        queue.put(1).put(2).put(3);
        expect(queue.get()).toEqual(1)
        expect(queue.get()).toEqual(2)
        expect(queue.get()).toEqual(3)
    })

    it('清空队列', () => {
        queue.put(1).put(2).put(3);
        queue.empty();
        expect(queue.size()).toEqual(0);
    })

})