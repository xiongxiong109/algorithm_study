// 二分查找测试

const binSearch = require('../algorithm/bin_search')

describe('bin search', () => {
    it('test BinSearch', () => {
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
    
    it('test BinSearch idx', () => {
        const list = [1, 3, 4, 4, 4, 3, 2, 3 ,1];
        list.sort();
        // [1, 1, 2, 3, 3, 3 ,4, 4, 4]
        // 根据二分法的查找规律，如果find 4, 应该会找到三个3中，居中的那一个， 而不是靠右或者靠左
        const curIdx = binSearch(list, 3)
        expect(curIdx).toEqual(4)
    })
})

