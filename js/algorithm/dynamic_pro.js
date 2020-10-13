/**
 * 动态规划，代替递归实现的某些场景下的更高效的算法
 */

// 递归实现斐波那契
// 1 1 2 3 5 8 13 ...
function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// 动态规划实现
function dynamicFibonacci(n) {
    const fibArr = [];
    if (n == 1 || n == 2) {
        return 1
    }
    // 初始化一个长度为n的数组
    for (let i = 0; i < n; i++) {
        fibArr[i] = 0
    }
    fibArr[0] = fibArr[1] = 1
    for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr[n - 1]
}

/**
 * 求解嵌套数组的深度
 * const arr = [1, [2, [3, [4]]], [5, 6], [7, 8], 9]
 * getDepth(arr) // 4
 * 建立状态转移方程
 * 缓存并复用以往的结果
 * 按序从小到大计算
 */
function getDepth(arr) {

    const depArr = []

    for (let i = 0; i < arr.length; i++) {
        depArr[i] = 0
    }

    _loopArr(arr)

    function _loopArr(arList) {
        for (let i = 0; i < arList.length; i++) {
            _getDeep(arList[i], i)
        }
    }

    function _getDeep(item, idx) {
        if (item instanceof Array) {
            depArr[idx]++
            _loopArr(item, idx)
        }
    }

    return Math.max.apply(null, depArr) + 1
}

module.exports = {
    fibonacci,
    dynamicFibonacci,
    getDepth
}