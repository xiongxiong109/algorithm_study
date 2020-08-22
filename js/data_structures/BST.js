/**
 * binary search tree
 * 二叉查找树
 * 重点条件：
 * 左子树中的所有节点的数据域都小于或等于根节点的数据域，
 * 而右子树中的所有节点的数据域都大于等于根节点的数据域
 */
class BST {
    constructor() {
        // 根节点
        this.root = null
        this.dataList = []; // 遍历节点的数组
    }
    // bst的插入方法
    insert(data) {
        const insertNode = new BNode(data)
        // 根节点插入
        if (!this.root) {
            return this.root = insertNode; 
        }
        let curNode = this.root;
        let parent = null;
        while(true) {
            parent = curNode
            if (data <= curNode.data) {
                // 存入数据比当前节点数据小，向左遍历
                curNode = curNode.left
                if (curNode == null) { // 找到空位置, 插入
                    return parent.left = insertNode
                }
            } else {
                // 存入数据比当前节点数据大，向右遍历
                curNode = curNode.right
                if (curNode == null) {
                    return parent.right = insertNode
                }
            }
        }
    }
    /**
     * 中序遍历, 使用递归实现
     * 先遍历左子树，再到根节点，再到右子树
     */
    midOrder(node) {
        if (node != null) {
            this.midOrder(node.left);
            this.dataList.push(node.data)
            this.midOrder(node.right)
        }
    }
    /**
     * 先序遍历
     * 根 -> 左子树 -> 右子树
     */
    preOrder(node) {
        if (node) {
            this.dataList.push(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    /**
     * 后序遍历
     * 左子树 -> 右子树 -> 根
     */
    postOrder(node) {
        if (node) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            this.dataList.push(node.data)
        }
    }
    show() {
        return this.dataList
    }
}

/**
 * 二叉树节点
 * 左子树，右子树
 */
class BNode {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
    show() {
        return this.data
    }
}

module.exports = BST