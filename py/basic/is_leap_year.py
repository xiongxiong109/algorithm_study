# 判断是否是闰年
# 能被4整除且不能被100整除，或者能被400整除


def is_leap_year():
    year = int(input('input year:\n'))
    if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
        return True
    return False


if __name__ == "__main__":
    print(is_leap_year())
