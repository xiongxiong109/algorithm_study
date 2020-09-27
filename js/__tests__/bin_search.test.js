// 二分查找测试

const binSearch = require('../algorithm/bin_search')

test('test BinSearch', () => {
    const list = [1, 3, 2, 5, 6, 7, 2];
    list.sort();
    // console.log(list)
    // [1, 2, 2, 3, 5, 6, 7]
    // list需要是有序的
    const curIdx = binSearch(list, 2);
    expect(curIdx).toEqual(1)
    const nextIdx = binSearch(list, 4.5);
    expect(nextIdx).toEqual(-1)
    let notFound = binSearch(list, 9)
    expect(notFound).toEqual(-1)
    notFound = binSearch(list, 0)
    expect(notFound).toEqual(-1)
})
