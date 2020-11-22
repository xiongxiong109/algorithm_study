// js 深拷贝基本功

/**
 * 非JSON.stringify 实现 -- JSON.stringify 实现有什么问题? 无法实现对对象方法的深拷贝 [Object function]
 * var a = {
 *  b: 'aa',
 *  c: {
 *      d: 'a'
 *  },
 *  d: [1,2]
 * }
 * var b = deepClone(a);
 * b.c.d = 'ss';
 * a.c.d => 'a';
 * b.d[0] = 4;
 * a.d[0] => 1;
 */
function deepClone(obj) {
    const newObj = Array.isArray(obj) ? [] : {};
    for (let item in obj) {
        // item 是数组
        if (typeof obj[item] == 'object') {
            newObj[item] = deepClone(obj[item])
        } else {
            newObj[item] = obj[item];
        }
    }
    return newObj
}

module.exports = deepClone