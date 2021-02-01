// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 
// 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

//s字符串
function isNumeric(s)
{
    // write code here
    if(s == null)
        return false;
    const len = s.length;
    let hasE = false, hasDecimal = false, hasSymboal = false;
    for(let i = 0; i < len; i++) {
        // 如果是是e|E, 之前不能有e或者E， 并且不能是最后一个数
        if(s[i] == 'e' || s[i] == 'E') {
            if(hasE || i == len - 1) {
                return false;
            }
            hasE = true;
        }
        // 如果是.， 那么之前不能有e或者E，不能有小数
        else if(s[i] == '.'){
            if(hasE || hasDecimal) {
                return false;
            }
            hasDecimal = true;
        }
        // 如果i位是+｜-， 如果第一次出现，不是0位，或者前一位不是e, E, 返回false；如果不是第一次，前面如果不是e或者E，返回false
        else if(s[i] == '+' || s[i] == '-') {
            if(!hasSymboal && i != 0 && s[i-1] != 'e' && s[i-1] != 'E')
                return false;
            if(hasSymboal && s[i-1] != 'e' && s[i-1] != 'E')
                return false;
            hasSymboal = true;
        } 
        // 除了. e|E,  +|-, 0～9,出现其他的字符，返回false
        else if(s[i] < '0' || s[i] > '9'){
            return false;
        }
    }
    return true;
}