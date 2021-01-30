// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
// 并保证奇数和奇数，偶数和偶数之间的相对位置不变。

// method1
function reOrderArray(array)
{

    const odd = [];
    const even = [];
    array.forEach((item) => {
        if(item % 2 == 0){
            even.push(item);
        } else {
            odd.push(item);
        }
    })
    return odd.concat(even);
}

// method2 原地调整
function reOrderArray(array)
{
    if(!array || array.length < 2) {
        return array;
    }
    const len = array.length;
    for(let i = 0; i < len; i++) {
        // 找偶数
        while(i < len && array[i]%2 == 1) {
            i++;
        }
        let j = i + 1;
        // 找奇数
        while(j < len && array[j]%2 == 0) {
            j++;
        }
        if(j < len) {
            const temp = array[j];
            // 将偶数到奇数之前的所有内容后移一位，为新的奇数在前面留空间
            for(let k = j; k >= i; k--) {
                array[k] = array[k-1];
            }
            // 原来位于j的奇数，现在刚刚在i, 现在偶数在i+1
            array[i] = temp;
        } else {
            break;
        }
    }
    return array;
}