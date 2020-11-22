// 二维数组回形遍历
/**
 * [
 *  [1,  2,  3,  4],
 *  [12, 13, 14, 5],
 *  [11, 16, 15, 6],
 *  [10, 9,  8,  7]
 * ]
 * 输出: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
 */

function zeepLoop(arr) {
    // 我觉得这里建立一个图会更好一点, 只是会增加空间使用
    // 一个图，一个next 方向, 一个 isVisited
    const arrGraph = [];
    for (let i = 0; i < arr.length; i++) {
        arrGraph[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            arrGraph[i][j] = {
                isVisited: false,
                value: arr[i][j]
            }
        }
    }
    // 初始遍历方向

    let row = 0, col = 0;

    arrGraph[row][col].isVisited = true;
    let rstArr = [arrGraph[row][col].value];
    let nextDirec = getNextDirection();
    let nextStep = getNextStep(nextDirec, row, col, arrGraph)

    while (Math.abs(nextStep.row) || Math.abs(nextStep.col) || nextStep.needChange) {
        // 开始遍历
        if (!arrGraph[nextStep.row][nextStep.col].isVisited) { // 如果还没有访问过, 存入数组
            arrGraph[nextStep.row][nextStep.col].isVisited = true;
            rstArr.push(arrGraph[nextStep.row][nextStep.col].value)
        }
        nextStep = getNextStep(nextDirec, nextStep.row, nextStep.col, arrGraph);
        
        // 需要改变回路方向了
        if (nextStep.needChange) {
            arrGraph[nextStep.row][nextStep.col].isVisited = true;
            rstArr.push(arrGraph[nextStep.row][nextStep.col].value)
            nextDirec = getNextDirection(nextDirec)
            nextStep = getNextStep(nextDirec, nextStep.row, nextStep.col, arrGraph);
        }

    }
    console.log(rstArr)
}

// 获取下一次的方向
function getNextDirection(cur) {
    switch (cur) {
        case 'toRight':
            return 'toDown';
        case 'toDown':
            return 'toLeft'
        case 'toLeft':
            return 'toTop'
        case 'toTop':
            return 'toRight'
        // 初始状态向右移动
        default:
            return 'toRight'
    }
}

// 获取基于当前方向上的下一步指针位置
function getNextStep(curDirect, row, col, arrGraph) {

    // let curItem = arrGraph[row][col];
    let stepRow = 0, stepCol = 0;

    switch (curDirect) {
        // 向右移动一格
        case 'toRight':
            stepCol = 1;
            break;
        case 'toTop':
            stepRow = -1;
            break;
        case 'toDown':
            stepRow = 1;
            break;
        case 'toLeft':
            stepCol = -1;
            break;
        default:
            break
    }
    let nextRow = row + stepRow;
    let nextCol = col + stepCol;

    if (
        nextRow < 0 || // 小于边界
        nextRow >= arrGraph.length || // 大于边界
        nextCol < 0 ||
        nextCol >= arrGraph.length ||
        arrGraph[nextRow][nextCol].isVisited
    ) {
        // 已经碰壁, 尝试获取下一阶段的路径
        const nextDire = getNextDirection(curDirect);
        const nextStep = getNextStep(nextDire, row, col, arrGraph);
        if (nextStep.row >= 0 && nextStep.col >= 0 && !arrGraph[nextStep.row][nextStep.col].isVisited) {
            return {
                ...nextStep,
                needChange: true
            }
        }

        // 表示循环完结
        return {
            row: 0,
            col: 0
        }
    }

    return {
        row: nextRow,
        col: nextCol
    }

}

zeepLoop([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]])