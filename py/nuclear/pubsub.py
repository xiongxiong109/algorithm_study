# 发布订阅模式实现
class PubSub:
    def __init__(self):
        self.evt_list = {}

    # 订阅事件
    def on(self, evt_nm, call_fn):
        # 初始化事件列表
        if self.evt_list.get(evt_nm) is None:
            self.evt_list[evt_nm] = []
        # 通知函数进入事件触发队列
        self.evt_list[evt_nm].append(call_fn)

    # 取消订阅
    def off(self, evt_nm, call_fn):
        if self.evt_list.get(evt_nm) is not None:
            cur_idx = self.evt_list[evt_nm].index(call_fn)
            if cur_idx >= 0:
                # 剔除被取消的函数
                self.evt_list[evt_nm] = \
                    self.evt_list[evt_nm][0:cur_idx] + self.evt_list[evt_nm][cur_idx + 1:]

    # 发布事件
    def emit(self, evt_nm, data):
        if self.evt_list[evt_nm]:
            for fn in self.evt_list[evt_nm]:
                fn(data)
