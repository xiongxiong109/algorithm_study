/**
 * 不知道什么时候出来一个宏任务与微任务的东西
 * 说是微任务会先执行
 * 对于js而言，目前宏任务，一般是指同步任务，以及setTimeout之类的老的异步方法
 * 微任务，有process.nextTick, Promise, MutationObserver等
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
        // 这是一个微任务
        process.nextTick(() => {
            console.log('nextTick')
        })
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
     * <Promise> -> pr1 <nextTick> [setTimeout2] pr2
     * <nextTick> -> nextTick
     * [setTimeout1] -> timeout1
     * [setTimeout2] -> timeout2
     * end pr1 pr2 nextTick timeout1 timeout2
     */
}

macroAndMicro()