// 排序算法

/**
 * 冒泡排序
 * 与下一个相邻元素比较, 比之大的话, 互换位置
 */
function bubbleSort(list) {
    for (let outter = 0; outter < list.length - 1; outter++) {
        for (let inner = 0; inner < list.length - outter - 1; inner++) {
            if (list[inner + 1] < list[inner]) {
                swap(list, inner, inner + 1)
            }
        }
    }
    return list
}

/**
 * 选择排序
 * 在未排序的数据中找到最小的元素， 放到起始位置
 * 然后从剩余元素中继续找到最小的元素
 * 比较这个最小元素与当前缓存的最小值，如果比缓存值小，则交换两者位置
 */
function selectionSort(list) {
    let minItem = null;
    let minIdx = -1;
    for (let outter = 0; outter < list.length; outter++) {

        // 缓存最小值
        minItem = list[outter]
        minIdx = outter

        for (let inner = outter; inner < list.length - 1; inner++) {
            // 内层循环， 找到最小值
            if (list[inner + 1] < minItem) {
                minItem = list[inner + 1]
                minIdx = inner + 1
                // 交换当前最小值的位置
                swap(list, outter, minIdx)
            }
        }
    }
    return list
}

/**
 * 插入排序
 * 先拿到一个元素
 * 与剩余元素依次做比较，如果待比较元素比当前元素小，则放到当前元素的左侧，后面的元素依次向后推移一位
 * [7, 5, 9, 3, 1]
 * curItem: 7
 * inner: 1
 * [7, 5]
 * 5 < 7
 * 所有元素依次往后推移
 * list[0] = list[1] -> [5, 5]
 * list[1] = curItem -> [5, 7]
 */
function insertionSort(list) {
    for (let i = 1; i < list.length; i++) {
        let temp = list[i]
        let inner = i
        // console.log(list)
        while(inner > 0 && list[inner - 1] > temp) {
            list[inner] = list[inner - 1]
            inner--
        }
        list[inner] = temp
    }
    return list
}

/**
 * 希尔排序
 * 是对标准插入排序的一个改进版本
 * 使用一定的间隔序列，来减少循环的频次, 最终的增量会减到1, 就变成了标准的插入排序
 */
function shellSort(list) {
    let gap = [5, 3, 1]
    // 对不同间隔序列分组进行排序
    for (let g = 0; g < gap.length; g++) {
        // 内层实际仍然是插入排序
        for (let outter = gap[g]; outter < list.length; outter++) {
            let temp = list[outter]
            let inner = outter
            // console.log(list)
            while (inner > 0 && list[inner - 1] > temp) {
                list[inner] = list[inner - 1]
                inner--
            }
            list[inner] = temp
        }
    }
    return list
}

/**
 * 归并排序
 */
function mergeSort(list) {
    // 将数组拆分为左右两部分
    const len = list.length;
    if (len == 1) {
        return list
    }
    const midLen = Math.floor(list.length / 2);
    const leftArr = list.slice(0, midLen)
    const rightArr = list.slice(midLen, list.length)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let li = 0, ri = 0;
    const rst = [];

    // 两个数组归并
    while(li < leftArr.length && ri < rightArr.length) {
        if (leftArr[li] < rightArr[ri]) {
            rst.push(leftArr[li]);
            li++
        } else {
            rst.push(rightArr[ri]);
            ri++
        }
    }

    // 将余下的数组直接拼接合并
    while(li < leftArr.length) {
        rst.push(leftArr[li])
        li++
    }

    while(ri < rightArr.length) {
        rst.push(rightArr[ri])
        ri++
    }

    return rst

}

/**
 * 使用非递归的方法实现归并排序
 * （递归的实现对js而言太深了）
 */
function mergeSortV2(list) {
    // 当迭代到只剩一个数组时，停止归并
    if (list.length < 2) {
        return
    }
    let step = 1;
    let left, right;
    while (step < list.length) {
        left = 0;
        right = step;
        while (right + step <= list.length) {
            mergeArrs(list, left, left + step, right, right + step)
            left = right + step;
            right = left + step;
        }
        if (right < list.length) {
            mergeArrs(list, left, left + step, right, list.length)
        }
        // 递归法是每次二分，迭代法是每次乘二
        step *= 2;
    }
    return list
}

/**
 * 将数组的左右两段子数组合并
 */
function mergeArrs(list, startLeft, stopLeft, startRight, stopRight) {
    // 初始化两个长度的数组, 多给了一个长度的空间，用于设置哨兵值
    const leftArr = new Array(stopLeft - startLeft + 1);
    const rightArr = new Array(stopRight - startRight + 1);

    // 分别给左右数组赋值
    let k = startRight;
    for (let i = 0; i < rightArr.length; i++) {
        rightArr[i] = list[k]
        k++;        
    }

    k = startLeft;
    for (let j = 0; j < leftArr.length; j++) {
        leftArr[j] = list[k]
        k++;
    }

    /**
     * 给最后一个元素设置哨兵值Infinity
     * Infinity 实际上就是无穷大的，所以一定比左边的元素大
     */
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;

    // 对数组元素进行比较与交换
    let m = 0, n = 0;
    for (let i = startLeft; i < stopRight; i++) {
        if (leftArr[m] < rightArr[n]) {
            list[i] = leftArr[m]
            m++
        } else {
            list[i] = rightArr[n]
            n++
        }
    }
}

// 交换列表中两个元素的位置的方法
function swap(list, fromId, toId) {
    let temp = list[fromId]
    list[fromId] = list[toId]
    list[toId] = temp
}

module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
    mergeSort,
    mergeSortV2
}