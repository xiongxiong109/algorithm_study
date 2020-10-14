// 跳台阶问题
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// 已经明确是用递归解决, 那么可以假设一个函数fn(), 就是解决该问题的子问题的方案
function jumpFloor(num) {
    // 跳法只有1和2两种
    // 如果先跳1, 则剩下 n - 1
    // 先跳2, 剩下 n - 2
    // jumpFloor(n) 有 n 种跳法
    // jumpFloor(n - 1) 有以1起步的 所有跳法
    // jumpFloor(n - 2) 有以2起步的 所有跳法
    // jumpFloor(n) = jumpFloor(n - 1) + jumpFloor(n - 2)
    if (num == 1 || num == 2) {
        return num
    }
    return jumpFloor(num -1) + jumpFloor(num - 2)
}