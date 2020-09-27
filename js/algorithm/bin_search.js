/**
 * 二分查找法，只能针对有序的数组进行查找， 折半查找法
 */

function binSearch(list, target) {
    let upperBound = list.length + 1;
    let lowerBound = 0;
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