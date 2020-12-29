// 左旋转字符串
function LeftRotateString(str, n)
{
    // write code here
    if(!str || str.length == 0 || n <0 ) {
        return '';
    }
    const len = str.length;
    let index = n%len;
    return str.slice(index) + str.slice(0, index);
}s