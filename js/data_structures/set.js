/**
 * set数据结构, 集合
 * 集合中的数据是唯一的, 可以实现子交并补等操作
 * 1. 数组 + class 实现
 * 2. es6原生set
 */

// polyfill实现
class PolySet {
    constructor(arr = []) {
        this.list = [];
        for (const item of arr) {
            this.add(item)
        }
    }
    add(item) {
        if (!this.list.includes(item)) {
            this.list.push(item)
        }
        return this
    }
    delete(item) {
        const idx = this.list.findIndex(item)
        if (idx >= 0) {
            this.list = [
                ...this.list.slice(0, idx),
                ...this.list.slice(idx +1, this.size)
            ]
        }
        return false;
    }
    has(item) {
        return this.list.findIndex(item) >= 0
    }
    clear() {
        this.list = []
    }
    get size() {
        return this.list.length
    }
}

// 原生Set
module.exports = PolySet