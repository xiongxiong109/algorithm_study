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
    // 查找最小值, 最左边节点
    findMin() {
        let curNode = this.root;
        while(curNode.left) {
            curNode = curNode.left
        }
        return curNode.data
    }
    // 顺着当前node, 查找最小值的节点
    findMinNode(node) {
        let curNode = node;
        while (curNode.left) {
            curNode = curNode.left
        }
        return curNode
    }
    // 查找最大值, 最右边节点
    findMax() {
        let curNode = this.root;
        while(curNode.right) {
            curNode = curNode.right
        }
        return curNode.data
    }
    // 查找特定的值
    find(data) {
        let curNode = this.root;
        while (curNode) {
            if (curNode.data == data) {
                return curNode;
            } else {
                if (data < curNode.data) {
                    curNode = curNode.left
                } else {
                    curNode = curNode.right
                }
            }
        }
        return null
    }
    /**
     * 二叉树删除节点操作
     * 仍然使用递归进行,
     * 1. 找到待删除节点
     * 2. 判断待删除节点是否有子节点
     * 3. 单个子节点时，挪上去
     * 4. 两个子节点时，可选左边上去或者右边上去
     */
    remove(data) {
        const root = this.removeNode(this.root, data)
        return root
    }
    removeNode(node, data) {
        if (!node) {
            return null
        }
        // 找到该节点
        if (node.data == data) {
            // 没有子节点
            if (!node.left && !node.right) {
                return null
            } else if (!node.left) { // 只有右节点
                return node.right
            } else if (!node.right) { // 只有左节点
                return node.left
            } else {
                /**
                 * 有两个节点
                 * 找到最右边相对于需要删除的节点的最小值
                 * 或者找到最左边相对于需要删除节点的最大值
                 */
                const temNode = this.findMinNode(node.right)
                node.data = temNode.data;
                node.right = this.removeNode(node.right, temNode.data)
                return node

            }
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else {
            node.right = this.removeNode(node.right, data)
            return node
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