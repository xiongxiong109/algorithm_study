/**
 * 快速排序算法
 * @param {Array} list 
 * 选择一个基准值，每次都跟这个基准值做比较
 */
function quickSort(list) {
    if (list.length == 0) {
        return [];
    }
    const baseItem = list[0];
    const ltArr = [];
    const gtArr = [];
    // 比基准值小的，push到ltArr，大的push到gtArr
    for (let i = 1; i < list.length; i++) {
        const curItem = list[i];
        if (curItem < baseItem) {
            ltArr.push(curItem)
        } else {
            gtArr.push(curItem)
        }
    }
    // 然后将数组合并，重复迭代
    return [...quickSort(ltArr), baseItem, ...quickSort(gtArr)]
}

module.exports = quickSort