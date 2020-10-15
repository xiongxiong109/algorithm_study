/**
 * 不知道什么时候出来一个宏任务与微任务的东西
 * 说是微任务会先执行
 */
function macroAndMicro() {
    // 这是一个微任务
    Promise.resolve()
    .then(() => {
        // 这是一个同步输出
        console.log('pr1')
        // 这是一个微任务执行后遇到的宏任务
        setTimeout(() => {
            console.log('timeout2')
        }, 0)
    })
    .then(() => {
        // 这是一个同步输出
        console.log('pr2')
    })

    // 这是一个宏任务中的宏任务
    setTimeout(() => {
        console.log('timeout1')
    }, 0)

    // 这是一个同步输出
    console.log('end')

    /**
     * 执行顺序是
     * 同步 -> <微任务> -> [宏任务]
     * 所以得到结果
     * end <Promise> [setTimeout1]
     * <Promise> -> pr1 [setTimeout2] pr2
     * [setTimeout1] -> timeout1
     * [setTimeout2] -> timeout2
     * end pr1 pr2 timeout1 timeout2
     */
}

// macroAndMicro()