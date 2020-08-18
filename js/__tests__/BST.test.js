// BST测试
const BST = require('../data_structures/BST')

describe('BST', () => {
    it('插入 method', () => {
        const bst = new BST();
        bst.insert(10)
        expect(bst.root.data).toEqual(10)
        bst.insert(20)
        bst.insert(3)
        expect(bst.root.right.data).toEqual(20)
        expect(bst.root.left.data).toEqual(3)
        // 第二次插入
        bst.insert(13)
        bst.insert(59)
        bst.insert(4)
        /**
         *         10
         *     3        20
         *       4   13    59
         */
        const leftNode = bst.root.left;
        const rightNode = bst.root.right;
        expect(leftNode.right.data).toEqual(4)
        expect(rightNode.left.data).toEqual(13)
        expect(rightNode.right.data).toEqual(59)
    })
    it('中序遍历 method', () => {
        const bst = new BST();
        bst.insert(13)
        bst.insert(55)
        bst.insert(12)
        bst.insert(2)
        bst.insert(7)
        bst.insert(19)
        /**
         *       13
         *   12       55
         * 2        19
         *   7     
         */
        bst.midOrder(bst.root)
        expect(bst.show()).toEqual([2, 7, 12, 13, 19, 55])
    })
})
