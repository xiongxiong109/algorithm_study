/**
 * 使用队列来实现基数排序 radix sort
 * 一种无需比较和交换的算法
 * https://baike.baidu.com/item/%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F/7875498?fr=aladdin
 */

const Queue = require('../data_structures/queue');

function radixSort(args = []) {
    // 需要创建10个队列 bin0 - bin9;
    const binArr = []; // 用于存储binx的对象
    let dataArr = [];

    for (let i = 0; i <= 9; i++) {
        binArr.push({ id: `bin${i}`, queue: new Queue() });
    }

    // 对数组中的数取个位数入队, 进行第一次排序;
    for (let i = 0; i < args.length; i++) {
        const item = args[i];
        const itemSingle = item % 10;
        binArr[itemSingle].queue.put(item)
    }
    // 第一次排序后依次出队，得到第一次排序的结果
    dataArr = popArr(binArr);

    // 对弹出的数取十位数再排序一次
    for (let i = 0; i < dataArr.length; i++) {
        const item = dataArr[i];
        const itemSingle = Math.floor(item / 10);
        binArr[itemSingle].queue.put(item)
    }

    // 第二次排序后，返回最终结果
    return popArr(binArr)

}

// 弹出bin队列
function popArr(queueArr) {
    const singleArr = [];
    for (let i = 0; i < queueArr.length; i++) {
        const curQue = queueArr[i].queue;
        while(curQue.size() > 0) {
            singleArr.push(curQue.get());
        }
    }
    return singleArr;
}

module.exports = radixSort