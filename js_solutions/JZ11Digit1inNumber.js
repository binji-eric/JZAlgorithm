function NumberOf1(n)
{
// method1 n与1依次位运算，然后flag左移1位，当flag(1)移出边界后，停止
    let count = 0;
    while(n) {
        n = n&(n-1);
        count++;
    }
    return count;
}

// method2 每次去除末位的1, 循环次数为1的位数
function NumberOf1(n)
{
    let flag = 1, count = 0;
    while(flag) {
        if(flag&n) {
            count++;
        }
        flag = flag << 1;
    }
    return count;
}