# 图与图算法

# 图类, 使用邻接列表或者邻接矩阵存储
# 使用邻接列表方式存储已经在js中实现，py中尝试使用邻接矩阵
class Graph:
    def __init__(self, vertex_list):
        self.verticles = len(vertex_list) or 0
        self.metrix = []
        self.vertex = {}
        # 搜索后的排序数组
        self.search_list = []
        self.init_metrix(vertex_list)

    # 初始化邻接矩阵
    def init_metrix(self, vertex_list):
        for i in range(0, self.verticles):
            # 顺便将顶点初始化
            if vertex_list and vertex_list[i]:
                vertex = Vertex(data=vertex_list[i])
                self.vertex["vertex%d" % i] = vertex
            self.metrix.append([])
            for j in range(0, self.verticles):
                self.metrix[i].append(0)

    # 给两个顶点添加一条边(区分无向图和有向图)
    def add_edge(self, from_id, to_id):
        if from_id < self.verticles and to_id < self.verticles:
            self.metrix[from_id][to_id] = 1
            # self.vertex["vertex%d" % from_id].to_ids.append(to_id)
            # 如果是无向图, 可以同时给下面这段赋值
            self.metrix[to_id][from_id] = 1
            # self.vertex["vertex%d" % to_id].from_ids.append(from_id)

    # 重置搜索遍历点
    def reset_search_list(self):
        # 清空搜索数组
        self.search_list = []
        # 重置is_visited
        for i in range(self.verticles):
            self.vertex["vertex%d" % i].is_visited = False

    # 深度优先搜索
    def dfs(self, ver_id):

        cur_vertex = self.vertex["vertex%d" % ver_id]
        cur_vertex.is_visited = True

        # 横向遍历, for循环需要拿到索引的话, 需要用enumerate
        for to_id, item in enumerate(self.metrix[ver_id]):
            next_vertex = self.vertex["vertex%d" % to_id]
            # 有连接点, 走到下一个分支去递归遍历
            if item == 1 and not next_vertex.is_visited:
                self.dfs(to_id)
        self.search_list.append(ver_id)

    def show_search_list(self):
        arr = []
        while len(self.search_list):
            arr.append(self.search_list.pop())
        return arr


# 顶点类
class Vertex:
    def __init__(self, data=''):
        self.is_visited = False
        self.data = data
