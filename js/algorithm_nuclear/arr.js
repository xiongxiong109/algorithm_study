// 以下哪些表达式的值为0？
function getZeroLen() {
    // 考点，function.length, 表示函数形参的个数
    const len1 = (() => { }).length
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


// 如何判断一个js对象是否是Array,arr为要判断的对象，其中最准确的方法是？
/**
 * tm竟然不是 arr instanceof Array
 * 是什么 Object.prototype.toString.call()
 * 说是在iframe场景下会失效...
 */

/**
 * 以下代码执行后，array 的结果是？
 * let array = [,1,,2,,3];
 * array = array.map((i) => ++i)
 * 
 * 答案: [,2,,3,,4]
 * map方法会自动跳过空位, 但是会保留这个元素
 * forEach(), filter(), reduce(), every() 和some()都会跳过空位。
 */

/**
 * 求解数组交集
 * 如 const arr = [[1, 3], [2, 6], [8, 9], [10, 11]]
 * 因为 [1, 3] 与 [2, 6] 的区间有交集, 所以合并成 [1, 6]
 * conca(arr) // [[1, 6], [8, 9], [10, 11]]
 */
// [[1, 3], [2, 6], [5, 9], [10, 11]]
function getCrossArr(arr) {

    let rst = []
    /**
     * 子问题的解是: arr[n] 与 arr[n + 1] 是否有交集, 有的话做合并, 没有的话, 继续比较下一个元素
     * 求解子问题后, 可以存储子问题得到的新数组
     * [[1, 3], [2, 6], [5, 9], [10, 11]] =>
     * [[1, 6], [5, 9], [10, 11]] =>
     * [[1, 9], [10, 11]]
     */
    for (let i = 0; i < arr.length - 1; i++) {

        const preArr = arr[i]
        const nextArr = arr[i + 1]

        const preStart = preArr[0]
        const preEnd = preArr[1]
        const nextStart = nextArr[0]
        const nextEnd = nextArr[1]

        if (
            (preEnd < nextStart || preStart > nextEnd) ||
            (nextEnd < preStart || nextStart > preEnd)
        ) { // 没有交集, 正常对接
            rst.push(nextArr) // [8, 9]
        } else { // 有交集, 合并数组递归处理
            let newRange = [
                ...preArr,
                ...nextArr
            ].sort()
            newRange = [newRange[0], newRange[newRange.length - 1]] // [1, 6]
            rst[i] = newRange
        }

    }

    console.log(rst)
}

// 数组去重
function uniqueArr(arr1, arr2) {
    // 利用set union
    // return [...new Set([...arr1, ...arr2])]
    // 利用对象下标
    const rst = {}
    const arr = [...arr1, ...arr2]
    arr.map(item => {
        if (!rst[item]) {
            rst[item] = item
        }
    })
    return Object.values(rst).sort()
}

// 数组求交集
function insectionArr(arr1, arr2) {
    // 利用数组方法, 和set的has方法, 来处理交集
    // const setA = new Set(arr1)
    // const setB = new Set(arr2)
    // const rst = arr1.filter(item => setB.has(item))
    // return rst
    const rst = arr1.filter(item => arr2.includes(item))
    return rst
}

// const arr = uniqueArr([1, 2, 3], [2, 3, 4])
// const arr = insectionArr([1,2,3], [3, 2, 4, 5])
// console.log(arr)

// 提交数组比较: 提交过来的数组中，不能有大类与小类的包含 如 [3200, 3201]
// 提交数组整体与已保存数组的比较，提交的数组不能与已保存的数组有大小类包含的关系，如 [3200] diff [3201]

// 首先要有一个方法，用于比较两个元素之间是否有大小类包含的关系
function isCrossed(itemA, itemB) {
    // 假设业务逻辑是比较前两位数
    if (parseInt(itemA / 100) == parseInt(itemB / 100)) {
        return true
    }
    return false
}
// 检查一个数组自身元素之间有没有存在大小类包含
function checkArrCross(list) {
    // 可以对数组先做一次排序，
    // 这样数组的先后顺序一定是 [3200, 3201, 4200, 4201] 这种的
    // 只需要比较相邻两个元素isCrossed即可
    list = list.sort((a, b) => a - b);
    for (let i = 0; i < list.length - 1; i++) {
        if (isCrossed(list[i], list[i + 1])) {
            return false
        }
    }
    return true
}

// 检查两个数组之间有没有存在大小类包含关系，实际就是看两个数组合并在一起之后是否能通过checkArrCross
function checkArr(funcType, reFuncType) {
    if (checkArrCross(funcType)) { // 先只校验传入值
        // 传入值正确的话，再校验两个数组的合并值
        return  checkArrCross([...funcType, ...reFuncType])
    }
    // 否则校验失败
    return false
}

module.exports = {
    checkArr
}