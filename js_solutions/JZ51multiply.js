function multiply(array)
{
    // write code here
    const len = array.length;
    const left = new Array(len), right = new Array(len), res = new Array(len);
    left[0] = 1;
    right[len-1] = 1;
    for(let i = 1; i < len; i++) {
        left[i] = left[i-1]*array[i-1];
    }
    for(let j = len -2; j >= 0; j--){
        right[j] = right[j+1]*array[j+1];
    }
    for(let i = 0; i < len; i++) {
        res[i] = left[i]*right[i];
    }
    return res;
}