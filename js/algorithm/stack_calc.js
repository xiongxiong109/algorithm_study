// 使用栈实现calc计算器+-*/x
// calc("2*(1+4/(1+1))-5") => 1

/**
 * 经典算法实现
 * 忽略 (
 * 数字入数字栈
 * 操作符入操作符栈
 * 遇到 ) 时，弹出 一个操作符与两个操作数，计算结果重新入数字栈
 * 这个算法有点问题。。。
 */
function calc(str) {
    const numStack = [], operStack = [];

    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            numStack.push(parseInt(str[i]))
        }
        if (/\+|\-|\*|x|\//.test(str[i])) {
            operStack.push(str[i])
        }
        if (/\)/.test(str[i])) {
            _calc()
        }
    }

    function _calc() {
        const num1 = numStack.pop();
        const num2 = numStack.pop();
        const oper = operStack.pop();
        switch (oper) {
            case 'x':
            case '*':
                numStack.push(num2 * num1);
                break;
            case '+':
                numStack.push(num2 + num1);
                break;
            case '-':
                numStack.push(num2 - num1);
                break;
            case '/':
                numStack.push(num2 / num1);
                break;
        }
    }

    while (operStack.length) {
        _calc();
    }
    return numStack.pop();
}

const rst = calc("1+((2+3)*(4*5))")
console.log(rst)