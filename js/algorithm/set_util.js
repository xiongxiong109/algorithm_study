// 使用集合实现子交并补集运算

// 并集
function union(...args) {
    // 支持多个集合的并集
    const set = args.reduce(_unionOne);
    // 将set变回数组
    return [...set]
}
function _unionOne(argA, argB) {
    return new Set([...argA, ...argB])
}

// 交集
function intersect(...args) {
    return [...args.reduce(_intersectOne)]
}
function _intersectOne(argA, argB) {
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
        // 如果连子集都不是，return []
        if (!isSubset(argA, argB)) {
            return []
        }
        const setA = new Set(argA);
        const diffArr = [...new Set(argB)].filter(item => !setA.has(item))
        return diffArr
    }
}

// 判断是否是子集
function isSubset(argA, argB) {
    // empty
    if (argA.length >= argB.length) {
        return false
    }
    const setB = new Set(argB);
    const setA = new Set(argA);

    let isChild = true;
    for (const item of setA.values()) {
        // 如果A中存在B不存在的元素, 则不是子集
        if (!setB.has(item)) {
            isChild = false;
            return isChild;
        }
    }

    return isChild
}

module.exports = {
    union,
    intersect,
    diffWith
}