// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数。



// method1
function Find(target, array)
{
    // write code here
    const m = array.length, n = array[0].length;
    // 对于每行依次使用二分法, 时间复杂度是O(mlog(n))
    for(let i = 0; i < m; i++) {
        let low = 0, high = n - 1;
        while(low <= high) {
            let mid = Math.floor((low+high)/2);
            if(array[i][mid] < target) {
                low = mid + 1;
            } else if(array[i][mid] > target) {
                high = mid - 1;
            } else {
                return true;
            }
        }
    }
    return false;
}


// method2 
function Find(target, array)
{
    // 时间复杂度 O(m+n)
    const m = array.length, n = array[0].length;
    let i = 0, j = n-1;
    while( i<= m-1 && j >= 0) {
        if(array[i][j] < target) {
            i++;
        } else if(array[i][j] > target) {
            j--;
        } else {
            return true;
        }
    }
    return false;
}