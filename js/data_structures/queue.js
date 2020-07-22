/**
 * 队列数据结构的实现
 * FIFO
 * js中只有数组数据类型, 需要在数组的基础上实现
 * 或者用Set来实现?
 */

class Queue {
    constructor() {
        this.queue = [];
    }
    // 获取队列长度
    size() {
        return this.queue.length
    }
    // 清空队列
    empty() {
        this.queue = [];
    }
    // 入队
    put(item) {
        this.queue.push(item)
        return this
    }
    // 出队FIFO
    get() {
        return this.queue.shift();
    }
}

module.exports = Queue