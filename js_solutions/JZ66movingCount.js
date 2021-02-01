// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
// 每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。
//  例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
//  但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

let row, col, count, max;


function movingCount(threshold, rows, cols)
{
    // write code here
    count = 0; 
    row = rows;
    col = cols;
    max = threshold;
    // 记录访问过的节点
    const map = new Array(rows*cols); 
    map.fill(false);
   
    helper(0, 0, map);
    return count;
    
}

function helper(m, n, map) {
    // 越界，访问过，超过k值，都将返回
    if(m < 0 || m >= row || n < 0 || n >= col || map[m*col + n] || !check(m, n))
        return;
    count++;
    map[m*col + n] = true;
    helper(m+1, n, map);
    helper(m, n+1, map);
}

function check(m, n) {
    let count = 0;
    while(m > 0) {
        count += m%10;
        m = Math.floor(m/10);
    }
    
    while(n > 0) {
        count += n%10;
        n = Math.floor(n/10);
    }
    if(count > max) {
        return false;
    }
    return true;
}