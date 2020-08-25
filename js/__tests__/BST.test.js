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
    it('findMin', () => {
        const bst = createTree();
        expect(bst.findMin()).toEqual(2)
    })
    it('findMax', () => {
        const bst = createTree()
        expect(bst.findMax()).toEqual(55)
    })
    it('find', () => {
        const bst = createTree();
        expect(bst.find(32)).toBeFalsy();
        expect(bst.find(13)).toBeTruthy();
        expect(bst.find(19)).toBeTruthy();
    })
    /**
     *       13
     *   12       55
     * 2        19
     *   7     
     */
    it('remove, 没有找到对应元素', () => {
        const bst = createTree();
        bst.remove(33)
        expect(bst.find(33)).toBeFalsy()
    })
    it('remove, 左侧单叶子节点', () => {
        const bst = createTree();
        expect(bst.find(12)).toBeTruthy()
        bst.remove(12)
        expect(bst.find(12)).toBeFalsy()
        expect(bst.root.left.data).toEqual(2)
        bst.midOrder(bst.root)
        /**
         *       13
         *   2       55
         *     7   19    
         */
        expect(bst.show()).toEqual([2, 7, 13, 19, 55])
    })
    /**
     *       13
     *   12       55
     * 2        19
     *   7 
     *     8   
     */
    it('remove, 右侧子节点', () => {
        const bst = createTree()
        bst.insert(8)
        bst.remove(7)
        expect(bst.root.left.left.right.data).toEqual(8)
    })
    /**
     *       13
     *   12       55
     * 2        19
     *   7     
     */
    it('remove, 双叶子节点', () => {
        const bst = createTree();
        bst.insert(12.5)
        /**
         *          13
         *    12                55
         * 2     12.5        19
         *   7  
         */
        bst.remove(12)
        expect(bst.root.left.data).toEqual(12.5)
        bst.midOrder(bst.root)
        expect(bst.show()).toEqual([2, 7, 12.5, 13, 19, 55])
    })
    it('remove, 嵌套子节点', () => {
        const bst = createTree();
        bst.insert(28)
        bst.insert(27)
        bst.insert(18.7)
        /**
         *       13
         *   12                    55
         * 2             19
         *   7     18.7       28
         *                27
         */
        bst.remove(19)
        bst.midOrder(bst.root)
        expect(bst.show()).toEqual([2, 7, 12, 13, 18.7, 27, 28, 55])
    })
})
