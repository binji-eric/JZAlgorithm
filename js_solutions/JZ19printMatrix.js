function printMatrix(matrix) {
    if (matrix === null) return null;
    const rows = matrix.length,
      cols = matrix[0].length;
    let start = 0,
      res = [];  
    while (rows > start * 2 && cols > start * 2) {
      res = res.concat(printMatrixInCircle(matrix, rows, cols, start));
      start++;
    }
    return res;
  }
  function printMatrixInCircle(matrix, rows, cols, start) {
      // start是代表第几圈， 其中endY > start 和 endX > start是折回的条件，否则endX= start 或者endY = start 单趟就可以
    const endX = cols - 1 - start,
    endY = rows - 1 - start,
    res = [];
      // 上方遍历，start -> endX(从左到右)
    for (let i = start; i <= endX; i++) {
      res.push(matrix[start][i]);
    }
      // 右方遍历，start + 1 -> endY（从上到下）
    for (let i = start + 1; i <= endY; i++) {
      res.push(matrix[i][endX]);
    }
      // 下方，endX-1 ->start （从右到左）
    for (let i = endX - 1; i >= start && endY > start; i--) {
      res.push(matrix[endY][i]);
    }
      
      // 左方，endY -1 -> start+1  （从下到上）
    for (let i = endY - 1; i >= start + 1 && endX > start; i--) {
      res.push(matrix[i][start]);
    }
    return res;
  }