function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    // a 为左部分，b为右部分，分三种情况：
    // a的个位数是 >= 2, 这时如果a的个位数是1， 其他位变化的可能性为(a/10 + 1)*m
    // a的个位数是 1, 这时如果a的个位数是1， 前面有a/10种可能，后面有m, 所有是(a/10)*m,  当前面数值最大值，只有b+1种
    // a的个位数是 0, (a/10)*m
    let total = 0;
    for(let m = 1; m <= n; m=m*10) {
        let a = Math.floor(n/m), b = n%m;
        total += Math.floor((a+8)/10)*m;
        if(a%10 == 1) {
            total += b+1;
        }
    }
    return total;
}