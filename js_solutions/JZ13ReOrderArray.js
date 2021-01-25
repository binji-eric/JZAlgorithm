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
            array[i] = temp;
        } else {
            break;
        }
    }
    return array;
}