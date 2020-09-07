/**
 * 图结构
 * 单向图，多向图
 * 图由顶点与边组成,
 * 图的信息都在边上
 */

const Queue = require('./queue')

// 图的顶点
// class Vertex {
//     constructor(label, isVisited = false) {
//         this.label = label
//         this.isVisited = isVisited
//     }
// }

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
    constructor(verticles, vertexList = []) {
        // ?
        this.verticles = verticles
        this.edges = 0
        this.adj = []
        this.visited = []; // 存储已遍历的顶点数组
        this.edgeTo = []; // 从一个顶点到另一个顶点到边
        this.searchedList = []; // 搜索遍历后的数组
        this.vertexList = vertexList; // 需要用来进行排序的集合
        this.initAdjList()
    }
    // 初始化邻接列表 Adjacency List
    initAdjList() {
        /**
         * 初始化一个多维数组列表
         */
        for (let i = 0; i < this.verticles; i++) {
            this.adj[i] = [];
            this.visited[i] = false;
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
    /**
     * deep first search
     * 深度优先搜索, 每遍历一个元素，都尽可能地把这个元素的索引都遍历完
     */
    dfs(v) {

        this.visited[v] = true;
        if (this.adj[v]) {
            this.searchedList.push(v)
        }

        for (let i = 0; i < this.adj[v].length; i++) {
            const curItem = this.adj[v][i];
            if (!this.visited[curItem]) { // 该顶点没有被访问过
                this.dfs(curItem)
            }
        }

    }
    /**
     * breadth first search
     * 广度优先搜索
     */
    bfs(v) {
        // 能找到这个顶点
        if (this.adj[v]) {
            /**
             * 使用队列来实现，将已经访问过的顶点入队
             * 最后全部出队即可
            */
            const vertexQueue = new Queue()
            this.visited[v] = true;
            vertexQueue.put(v);
            while (vertexQueue.size()) {
                // 队首元素出队
                const vert = vertexQueue.get();
                this.searchedList.push(vert);
                // 开始访问这个顶点中所关联的其他顶点
                for (const item of this.adj[vert]) {
                    if (!this.visited[item]) {
                        this.visited[item] = true;
                        // 正在探索到顶点，添加一条边
                        this.edgeTo[item] = vert;
                        vertexQueue.put(item)
                    }
                }
            }

        }
    }
    // 从一个顶点到达某一个顶点的最短路径算法
    pathTo(from, to) {

        // 先对该顶点进行一次搜索遍历, 记录下所有对路径点
        this.resetSearchList();
        this.bfs(from);

        const path = [];
        // 是否有路径经过这个点
        if (!this.visited[to]) {
            return null;
        }
        for (let i = to; i != from; i = this.edgeTo[i]) {
            path.unshift(i)
        }
        path.unshift(from)
        return path
    }
    /**
     * 拓扑排序, 有先决条件
     * 针对有向无环图实现拓扑排序
     * 其目的是为了处理图里大小分支的优先级与顺序，
     * 是一种非稳定性的排序，二级排序的顺序可以不是唯一的
     * 从第n个顶点开始排序
     */
    topSort(n = 0) {
        const stack = [];
        // 重置访问节点信息
        this.resetSearchList();
        this.dfs(n);
        this.searchedList.forEach(item => {
            stack.push(this.vertexList[item])
        })
        return stack
    }
    // 清空搜索列表
    resetSearchList() {
        this.searchedList = [];
        // 重置访问记录
        for (let i = 0; i < this.verticles; i++) {
            this.visited[i] = false;
        }
    }
    // 展示图
    showMap(i) {
        if (i >= 0) {
            return this.adj[i]
        }
        return this.adj
    }
}

module.exports = Graph