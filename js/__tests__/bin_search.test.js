// 二分查找测试

const binSearch = require('../algorithm/bin_search')

test('test BinSearch', () => {
    const list = [1, 3, 2, 5, 6, 7, 2];
    list.sort();
    const curIdx = binSearch(list, 2);
    expect(curIdx).toEqual(2)
    const notFound = binSearch(list, 9)
    expect(notFound).toEqual(-1)
})
