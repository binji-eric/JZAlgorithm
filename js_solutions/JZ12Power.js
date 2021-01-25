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
        base *= base;
        exponent = exponent >> 1;
    }
    return flag? 1/res: res;
}