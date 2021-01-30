// 输入一个整型数组，数组里有正数也有负数。
// 数组中的一个或连续多个整数组成一个子数组。
// 求所有子数组的和的最大值。要求时间复杂度为 O(n).

function FindGreatestSumOfSubArray(array)
{
    // write code here
    if(!array.length) {
        return 0;
    }
    let max = array[0], pre = array[0];
    array.forEach((item, index) => {
        if(index >= 1) {
            pre = pre > 0? pre + item : item;
            max = Math.max(max, pre);
        }
    })
    return max;
}