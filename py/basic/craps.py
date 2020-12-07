"""
Python 命令行simgle游戏模拟
简单的规则是：
玩家第一次摇骰子如果摇出了7点或11点，玩家胜；
玩家第一次如果摇出2点、3点或12点，庄家胜；
其他点数玩家继续摇骰子，如果玩家摇出了7点，庄家胜；如果玩家摇出了第一次摇的点数，玩家胜；
其他点数，玩家继续要骰子，直到分出胜负。
"""
# 生成随机数, 两个骰子, 2 - 12
from random import randint


# 摇骰子
def shake_num():
    rand_num_one = randint(1, 6)
    rand_num_two = randint(1, 6)
    return [rand_num_one, rand_num_two]


# 找到2, 3, 12
def find_other_lose(total_rand):
    try:
        [2, 3, 12].index(total_rand)
        return True
    except ValueError:
        return False


class Craps:
    def __init__(self):
        # 初始金额
        self.money = 1000
        # 下注金额
        self.dapt = 0
        # 游戏是否结束
        self.is_over = False

        # 开始下注
        self.drop()

    # 下注
    def drop(self):
        self.dapt = int(input('请下注:\n'))
        self.run_step()

    def run_step(self):

        # 可以和js一样使用解构
        [rand_num_one, rand_num_two] = shake_num()

        print('两次骰子值 {0}, {1}'.format(rand_num_one, rand_num_two))
        total_rand = rand_num_one + rand_num_two
        print('总数为: %d' % total_rand)
        # 玩家胜
        if total_rand == 7 or total_rand == 11:
            # 秦始皇，打钱
            self.add_money()
        elif find_other_lose(total_rand):
            # 庄家胜
            self.dis_money()
        else:
            # 再摇一次
            print('shake again')
            again_num = shake_num()
            again_total = again_num[0] + again_num[1]
            print('result is %d' % again_total)
            if again_total == total_rand or again_total == 7:
                # 玩家胜
                self.add_money()
            else:
                self.dis_money()

        if self.money <= 0:
            self.is_over = True
        else:
            self.dapt = 0
            self.drop()

    def add_money(self):
        self.money += self.dapt
        print('you win, total money: %d' % self.money)

    def dis_money(self):
        self.money -= self.dapt
        print('you lose, total money: %d' % self.money)


if __name__ == "__main__":
    Craps()
