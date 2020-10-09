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

module.exports = {
    fibonacci
}