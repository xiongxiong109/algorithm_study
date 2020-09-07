// 建立有向图，实现拓扑排序

// 顶点类
class Vertex {
    constructor(props = {}) {
        this.data = props.data; // 顶点数据
        this.id = props.id;
        this.isVisited = false; // 顶点是否被访问过
        this.from = []; // 顶点的来源
        this.to = []; // 顶点的下一个去处
    }
}

class Graph {
    // 图里的数据
    constructor(vertexList = []) {
        // 邻接列表
        // this.adj = [];
        this.verticles = vertexList.length;
        // 初始化所有顶点的信息
        this.initVertex(vertexList);
    }
    initVertex(vertexList) {
        for (let i = 0; i < vertexList.length; i++) {
            const vertex = new Vertex({
                data: vertexList[i],
                id: i
            })
            // this.adj[i] = []
            this[`vertex${i}`] = vertex;
        }
    }
    // 添加从一个顶点到另一个顶点的单向边
    addEdge(fromId, toId) {
        if (this[`vertex${fromId}`] && this[`vertex${toId}`]) {
            const fromVertex = this[`vertex${fromId}`];
            const toVertex = this[`vertex${toId}`];
            // 没有添加过单向边
            if (fromVertex.to.indexOf(toId) < 0) {
                fromVertex.to.push(toId);
                toVertex.from.push(fromId);
            }
        }
    }
    topSort() {
        this.stack = []
        const topVer = this.findTop();
        if (!topVer.isVisited) {
            this._loopTop(topVer);
        }
        return this.stack
    }
    _loopTop(vertex) {
        vertex.isVisited = true;
        // 深度优先搜索
        for (let i = 0; i < vertex.to.length; i++) {
            const toId = vertex.to[i];
            const toItem = this[`vertex${toId}`];
            if (toItem && !toItem.isVisited) {
                this._loopTop(toItem);
            }
        }
        this.stack.unshift(vertex.data)
    }
    // 找到顶点
    findTop() {
        let topVer; // 顶点
        for (let i = 0; i < this.verticles; i++) {
            const vertex = this[`vertex${i}`];
            if (!vertex.from.length) {
                topVer = vertex;
                break
            }
        }
        return topVer
    }
}

module.exports = Graph