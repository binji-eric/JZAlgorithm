// 给定一个double类型的浮点数base和int类型的整数exponent。
// 求base的exponent次方。

// 保证base和exponent不同时为0

function Power(base, exponent)
{
    if(exponent === 0 ){
        return 1;
    }
    const flag = exponent < 0? true :  false;
    if(flag) {
        exponent = -exponent;
    }
    let res = 1;
    while(exponent) {
        if(exponent&1) {
            // res = res * base^k
            res *= base;
        }
        // base = base^k
        // exponent每右移一位，base翻番
        base *= base;
        exponent = exponent >> 1;
    }
    return flag? 1/res: res;
}