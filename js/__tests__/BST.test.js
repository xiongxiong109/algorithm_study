// BST测试
const BST = require('../data_structures/BST')

function createTree() {
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
    return bst
}

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
        expect(leftNode.right.show()).toEqual(4)
        expect(rightNode.left.show()).toEqual(13)
        expect(rightNode.right.data).toEqual(59)
    })
    it('中序遍历 method', () => {
        const bst = createTree()
        bst.midOrder(bst.root)
        expect(bst.show()).toEqual([2, 7, 12, 13, 19, 55])
    })
    /**
     *       13
     *   12       55
     * 2        19
     *   7     
     */
    it('先序遍历', () => {
        const bst = createTree();
        bst.preOrder(bst.root);
        expect(bst.show()).toEqual([13, 12, 2, 7, 55, 19]);
    })
    it('后序遍历', () => {
        const bst = createTree();
        bst.postOrder(bst.root)
        expect(bst.show()).toEqual([7, 2, 12, 19, 55, 13])
    })
})
