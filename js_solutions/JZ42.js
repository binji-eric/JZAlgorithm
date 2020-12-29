// 对应每个测试案例，输出两个数，小的先输出。
function FindNumbersWithSum(array, sum)
{
    // write code here
//     const mid = array.length >> 1;
//      const mid = Math.floor(array.length/2);
    let res = [];
    for(let i = 0; i < array.length; i++) {
        const otherIndex = array.lastIndexOf(sum - array[i]);
        if(otherIndex != -1 && i != otherIndex) {
            res = [array[i], array[otherIndex]];
            break;
        }
    }
    return res;
    
}