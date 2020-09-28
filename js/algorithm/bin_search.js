/**
 * 二分查找法，只能针对有序的数组进行查找， 折半查找法
 */

function binSearch(list, target) {
    let upperBound = list.length - 1;
    let lowerBound = 0;
    // 当查找区间中没有该元素时，返回-1
    // if (target > list[list.length - 1] || target < list[0]) {
    //     return -1
    // }
    while (lowerBound <= upperBound) {
        const mid = Math.floor((lowerBound + upperBound) / 2)
        if (list[mid] < target) {
            lowerBound = mid + 1
        } else if (list[mid] > target) {
            upperBound = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

module.exports = binSearch