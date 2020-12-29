function Sum_Solution(n)
{
    // write code here
    // 利用&&的判断，如果 n == 0, 直接返回0； 如果n > 0 则返回后者
    return n && Sum_Solution(n-1) + n;
}