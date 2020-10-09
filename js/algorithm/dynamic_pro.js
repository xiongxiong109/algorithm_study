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

module.exports = {
    fibonacci,
    dynamicFibonacci
}