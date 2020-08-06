/**
 * js实现字典类型数据结构
 * json ? Set ? Map ?
 */

class Dict {
    constructor(obj = {}) {
        this.dict = {...obj}
    }
    get(item = '') {
        return this.dict[item]
    }
    set(key, val) {
        this.dict[key] = val
    }
    // 是否需要对键进行排序
    items(sorted = false) {
        return Object.items(sorted)
    }
    // keys
    keys() {
        return Object.keys(this.dict)
    }
    remove(key = '') {
        delete this.dict[key]
    }
    // 字典检出
    dump() {
        return this.dict
    }
}

module.exports = Dict