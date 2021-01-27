// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。
//  数值为0或者字符串不是一个合法的数值则返回0
function StrToInt(str)
{
    // write code here
    if(!str || str.length == 0) {
        return 0;
    }
    let res = 0, isPositive = true;
    const len = str.length;
    if(str[0] == '-') {
        isPositive = false;
    }
    for(let i = (str[0] =='+' || str[0] =='-')? 1: 0; i < len; i++) {
        if(str[i] < '0' || str[i] > '9')
            return 0;
        // 原来是res = res*10 + (str[i] - '0'), 左移一位*2， 左移三位*8
        // 所以 res << 1+ res << 3 = res*10
        res = (res << 1) + (res <<3) + (str[i] - '0');
    }
    return isPositive? res : -res;
}