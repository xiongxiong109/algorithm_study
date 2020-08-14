// 使用集合实现子交并补集运算

// 并集
function union(...args) {
    // 支持多个集合的并集
    const set = args.reduce(_unionOne);
    // 将set变回数组
    return [...set]
}
function _unionOne(argA = [], argB = []) {
    return new Set([...argA, ...argB])
}

// 交集
function intersect(...args) {
    return [...args.reduce(_intersectOne)]
}
function _intersectOne(argA = [], argB = []) {
    const setA = new Set(argA)
    const setB = new Set(argB)
    return new Set([...setA].filter(item => setB.has(item)))
}

/**
 * 求集合B相对于集合A的补集
 * const diffWithA = diffWith(argA)
 * const diffArr = diffWithA(argB)
 */
function diffWith(argA = []) {
    return function diff(argB = []) {
        // empty
    }
}

// 判断是否是子集
function isChildren(argA = [], argB = []) {
    // empty
}

module.exports = {
    union,
    intersect,
    diffWith
}