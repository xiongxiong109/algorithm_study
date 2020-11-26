// 使用栈实现calc计算器+-*/x
// calc("2*(1+4/(1+1))-5") => 1

/**
 * 经典算法实现
 * 忽略 (
 * 数字入数字栈
 * 操作符入操作符栈
 * 遇到 ) 时，弹出 一个操作符与两个操作数，计算结果重新入数字栈
 * 因为整个计算都是依赖)的，整个算式需要用一个额外的大括号包裹， 用于触发一次_calc
 */
function calc(str) {
    // 字符串添加额外的大括号
    str = /^\(.*\)$/.test(str) ? str : `(${str})`;

    const numStack = [], operStack = [];

    for (let i = 0; i < str.length; i++) {

        // 这里也只考虑了个位数
        if (/\d/.test(str[i])) {
            numStack.push(parseInt(str[i]))
        }

        if (/\+|\-|\*|x|\//.test(str[i])) {
            operStack.push(str[i])
        }

        // console.log('计算前')
        // console.log(numStack)
        // console.log(operStack)
        if (/\)/.test(str[i])) {
            // console.log(')')
            _calc()
            const lastOper = operStack[operStack.length - 1];
            if (/x|\*|\//.test(lastOper)) { // 乘除计算拥有更高的优先级, 需要额外再算一次
                _calc();
            }
            // console.log('计算后')
            // console.log(numStack)
            // console.log(operStack)
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

    return numStack.pop();
}

// const rst = calc("(2*(1+4/(1+1))-5)")
// const rst = calc("1+((2+3)*(4*5)")
// console.log(rst)

module.exports = calc