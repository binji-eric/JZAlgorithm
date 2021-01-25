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