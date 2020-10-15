// 以下哪些表达式的值为0？
function getZeroLen() {
    // 考点，function.length, 表示函数形参的个数
    const len1 = (() => {}).length
    // 位运算, 数字都转换成二进制, 这里做 01 AND 10 运算 => 0
    const len2 = 1 & 2
    // js弱类型之间的强制转换
    /**
     * 如果其中有一个操作数为string，则将另一个操作数隐式的转换为string，然后进行字符串拼接得出结果。 
     * 如果操作数为对象({})或者是数组([])这种复杂的数据类型，那么就将两个操作数都转换为字符串，进行拼接
     * String([]) => ""
     * +"" => 0
     */
    const len3 = +[]
    // 数组reduce方法的计算
    /**
     * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
     * initialVaue: 传递给函数的初始值
     * 0 - 1 = -1
     * -1 - 2 = -3
     * -3 - -3 = 0
     */
    const len4 = [1, 2, -3].reduce((a, b) => a - b, 0)
    console.log([len1, len2, len3, len4])
}
// getZeroLen()