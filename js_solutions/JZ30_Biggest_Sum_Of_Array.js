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