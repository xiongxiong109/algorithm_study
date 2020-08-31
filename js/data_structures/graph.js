/**
 * 图结构
 * 单向图，多向图
 * 图由顶点与边组成,
 * 图的信息都在边上
 */

// 图的顶点
class Vertex {
    constructor(label, isVisited = false) {
        this.label = label
        this.isVisited = isVisited
    }
}

// 图
class Graph {
    /**
     * 采用邻接列表方式或者邻接矩阵方式实现
     * 每一个顶点会存储一个从它这里开始的边的列表
     * 1 -> [2]
     * 2 -> [1, 3, 4]
     * 3 -> [2]
     * 4 -> [2]
     */
    constructor(verticles) {
        // ?
        this.verticles = verticles
        this.edges = 0
        this.adj = []
        this.initAdjList()
    }
    // 初始化邻接列表 Adjacency List
    initAdjList() {
        /**
         * 初始化一个多维数组列表
         */
        for (let i = 0; i < this.verticles; i++) {
            this.adj[i] = [];
        }
    }
    // 添加一条边(两点决定一条边)
    addEdge(a, b) {
        // a顶点添加一个对b的索引
        this.adj[a].push(b);
        // b顶点添加一个对a的索引
        this.adj[b].push(a);
        // 边数加1
        this.edges++;
    }
    // 展示图
    showMap(i) {
        if (idx) {
            return this.adj[i]
        }
        return this.adj
    }
}

module.exports = Graph