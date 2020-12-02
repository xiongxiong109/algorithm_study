/**
 * lodash, underscore
 * 数组reduce方法的实现
 * _.reduce(collectio, iterator, init?)
 * _.reduce([1, 2], function(sum, n) {
        return sum + n;
   }, 0);
 */

function reduce(collection, iteratorFn, init) {
    let rst = init || collection.shift();
    // collection 还可能是个对象
    if (collection instanceof Array) {
        // 模拟pipe
        while (collection.length) {
            const nextItem = collection.shift();
            rst = iteratorFn(rst, nextItem);
        }
    }
    return rst
}

// const rst = reduce([1, 2, 3], (sum, n) => {
//     return sum + n;
// }, 10)

// console.log(rst)

module.exports = reduce