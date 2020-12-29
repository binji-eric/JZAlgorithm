function IsContinuous(numbers)
{
    // write code here
    let max = 0, min = 14;
    if(numbers.length != 5) 
        return false;
    for(let i = 0; i < numbers.length; i++) {
        // 数字越界，false
        if(numbers[i] < 0 || numbers[i] > 13)
            return false;
        if(numbers[i] === 0) {
            continue;
        }
        // 数组中出现重复的数字，false
        const lastIndex = numbers.lastIndexOf(numbers[i]);
        if(lastIndex != -1 && lastIndex != i)
            return false;
        // 确定最大值和最小值的范围
        max = Math.max(max, numbers[i]);
        min = Math.min(min, numbers[i]);
    }
    return max - min < 5 ;
}