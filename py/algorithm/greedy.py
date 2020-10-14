# 贪心算法
# 每次以局部最优解去逼近全局最优解
# 贪心算法不能保证最终求解是最佳的, 需要被证明之后才ok
# 动态规划的每一步则是依赖子问题的解, 可以保证最终解是全局最佳的


# 贪心算法解决货币找零问题
# 有三种硬币：10，5，1；给定num元，以最少的硬币数来换它
def greedy_price(num):
    coins = [10, 5, 1]
    temp_num = num
    # 默认从使用最大的coin开始, 贪婪
    coin_idx = 0
    total_info = {}
    # 总是选择比总数小，但是是当前最大的coin
    # 用除法比用加法效率更高些, todo
    while temp_num >= 0 and coin_idx < len(coins):
        dis_num = coins[coin_idx]
        if coins[coin_idx] <= temp_num:
            temp_num -= dis_num
            if total_info.get(dis_num) is None:
                total_info[dis_num] = 0
            total_info[dis_num] += 1
        else:
            coin_idx += 1
    return total_info
