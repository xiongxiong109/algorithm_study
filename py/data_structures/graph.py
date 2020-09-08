# 图与图算法


# 图类, 使用邻接列表或者邻接矩阵存储
# 使用邻接列表方式存储已经在js中实现，py中尝试使用邻接矩阵
class Graph:
    def __init__(self, verticles=0):
        self.verticles = verticles
        self.metrix = []
        self.init_metrix()

    # 初始化邻接矩阵
    def init_metrix(self):
        for i in range(0, self.verticles):
            self.metrix.append([])
            for j in range(0, self.verticles):
                self.metrix[i].append(0)

    # 给两个顶点添加一条边(区分无向图和有向图)
    def add_edge(self, from_id, to_id):
        if from_id < self.verticles and to_id < self.verticles:
            self.metrix[from_id][to_id] = 1
            # 如果是无向图, 可以同时给self.metrix[to_id][from_id] = 1

    # 深度优先搜索
    def dfs(self, ver_id):
        pass


# 顶点类
class Vertex:
    def __init__(self, data=''):
        self.is_visited = False
        self.data = data
        self.from_ids = []
        self.to_ids = []
