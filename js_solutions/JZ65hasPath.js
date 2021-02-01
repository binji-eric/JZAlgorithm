// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
// 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子

let totalRow, totalCol;

function hasPath(matrix, rows, cols, path)
{
    // write code here
    totalRow = rows;
    totalCol = cols;
    const visited = new Array(rows * cols);
    visited.fill(false);
    let pathLength = 0;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(findPath(matrix, i, j, path, pathLength, visited)) {
               return true;
            }
        }
    }
    return false;
    
}

function findPath(myMatrix, i, j, path, pathLength, visited) {
    if(pathLength === path.length) {
        return true;
    }
    let hasPath = false;
    // 未越界， 未访问过， 矩阵中的字母和字符串相等
    if(i >=0 && i < totalRow && j >= 0 && j < totalCol 
        && !visited[i*totalCol + j] 
        && path[pathLength] === myMatrix[i*totalCol + j]) {
        visited[i*totalCol + j] = true;
        pathLength ++;
        // DFS，四个方向的DFS
        hasPath = findPath(myMatrix, i+1, j, path, pathLength, visited) || 
            findPath(myMatrix, i, j + 1, path, pathLength, visited) || 
            findPath(myMatrix, i-1, j, path, pathLength, visited) ||
            findPath(myMatrix, i, j - 1, path, pathLength, visited)
        // 回溯法，再次设为未访问过, 防止干扰其他的路径
        if(!hasPath) {
            visited[i*totalCol + j] = false;
        }
    }
    return hasPath;
}

