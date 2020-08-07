// 利用字典数据结构, 实现字符串中单词统计

const Dict = require('../data_structures/dictionary')

function wordCounter(str = '') {
    const strArr = str.split(' ')
    const dict = new Dict();
    if (!str) {
        return dict.dump()
    }
    for (let item of strArr) {
        item = item.replace(',', '').trim();
        const curDir = dict.get(item)
        if (!curDir) {
            dict.set(item, 1)
        } else {
            dict.set(item, curDir + 1)
        }
    }
    return dict.dump();
}

module.exports = wordCounter