
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法。

function jumpFloorII(number)
{
    // write code here
//     let k = 1;
//    for(let i = 2; i <= number; i++) {
//        k = k*2;
//    }
//     return k;
    return Math.pow(2, number -1);
}