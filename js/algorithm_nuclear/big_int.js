/**
 * BigInt数据类型与实现
 * BigInt之前, js的最大安全数字 2^53 - 1, 可以通过 Number.MAX_SAFE_INTEGER 打印出来
 * 同理，最小安全数字 (- 2^53 - 1)
 */
// 问题:
// 9007199254740990 + 1229007199254740993443 => 1.2290162064539957e+21
// 如何得到： 1229016206453995734433

// 1. BigInt
// 为啥还是不精确?
// BigInt(9007199254740990 + 1229007199254740993443).toString() => 1229016206453995732992

/**
 * 2.实现字符串与进位
 * 996 + 11116
 * 需要考虑的是算法是有可能需要进位的, 所以一开始需要搞一个最大的位数，这个位数为两个数中最大位 + 1, 这样才能保证进位
 * 然后两个数需要做一下对齐, 比如 000996, 011116
 * 从个位数开始计算，逢十进一, 拼接字符串后, 消除最高位的0
 */
function add(n1, n2) {
    // 字符串拆解
    let len1 = n1.length;
    let len2 = n2.length;
    let maxLen = Math.max(len1, len2) + 1; // 需要多取一位，保证最高位的进位
    let temArr = new Array(maxLen);
    let addTen = 0; // 需要往上一位补的数
    let curIdx = 0;

    // 数字要往最高位补全
    n1 = addZero(n1, maxLen - len1)
    n2 = addZero(n2, maxLen - len2)

    function addZero(numStr, disCount) {
        for (let i = 0; i < disCount; i++) {
            numStr = '0' + numStr;
        }
        return numStr
    }

    while (curIdx < maxLen) {
        let curDis = parseInt(n1[maxLen - curIdx - 1]) + parseInt(n2[maxLen - curIdx - 1]);

        if (curDis >= 10) {
            // 取十位
            addTen = Math.floor(curDis / 10);
            // 取个位
            curDis = curDis % 10;
            temArr[curIdx + 1] = addTen
        } else {
            addTen = 0;
        }

        if (temArr[curIdx] >= 0) {
            temArr[curIdx] += curDis;
            if (temArr[curIdx] >= 10) {
                addTen = Math.floor(temArr[curIdx] / 10);
                temArr[curIdx] = temArr[curIdx] % 10;
                temArr[curIdx + 1] = addTen
            }
        } else {
            temArr[curIdx] = curDis
        }

        curIdx++;
    }

    const calcResult = temArr.reverse().join('');
    return calcResult.replace(/^0/, '')
}

// console.log(add('9007199254740990', '1229007199254740993443'))
// console.log(add('9976', '86'))

module.exports = add