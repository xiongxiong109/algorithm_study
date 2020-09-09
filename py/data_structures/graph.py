# 图与图算法
from queue import Queue


# 图类, 使用邻接列表或者邻接矩阵存储
# 使用邻接列表方式存储已经在js中实现，py中尝试使用邻接矩阵
class Graph:
    def __init__(self, vertex_list):
        self.verticles = len(vertex_list) or 0
        self.metrix = []
        self.vertex = {}
        # 边存储, 创建一个len x len的矩阵, 存储最大图到边
        self.edge_to = [None for item in range(self.verticles)]
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
        # 边存储, 创建一个len x len的矩阵, 存储最大图到边
        self.edge_to = [None for item in range(self.verticles)]
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

    # 广度优先搜索
    def bfs(self, ver_id):

        cur_vertex = self.vertex["vertex%d" % ver_id]
        if not cur_vertex.is_visited:

            cur_vertex.is_visited = True
            # 将元素入队
            search_queue = Queue(maxsize=self.verticles)
            search_queue.put(ver_id)

            while search_queue.qsize():
                cur_id = search_queue.get()
                self.search_list.append(cur_id)
                for to_id, item in enumerate(self.metrix[cur_id]):
                    next_vertex = self.vertex["vertex%d" % to_id]
                    if item == 1 and not next_vertex.is_visited:
                        next_vertex.is_visited = True
                        self.edge_to[to_id] = cur_id
                        search_queue.put(to_id)

    # 最短路径
    def short_path(self, from_id, to_id):
        stack = []
        self.reset_search_list()
        # 先使用广度优先搜索，从该顶点走完全图
        self.bfs(from_id)
        # 遍历之后，先看看是否能走到to_id的点
        to_vertex = self.vertex["vertex%d" % to_id]
        if to_vertex and to_vertex.is_visited:
            idx = to_id
            while idx != from_id:
                edge_id = self.edge_to[idx]
                stack.append(idx)
                idx = edge_id
            stack.append(from_id)
            stack.reverse()
            return stack
        # 没有找到对应点，或者没有经过目标点，说明无法到达
        else:
            return None

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
