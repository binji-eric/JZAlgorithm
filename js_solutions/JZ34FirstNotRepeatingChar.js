function FirstNotRepeatingChar(str)
{
    // write code here
    const map = new Map();
    const arr = str.split('');
    for(let index = 0; index < arr.length; index++){
        if(map.has(arr[index])) {
            map.set(arr[index], -1);
        } else {
            map.set(arr[index], index);
        }
    }
    let index = Number.MAX_VALUE;
    map.forEach(function(value) {
        if(value != -1) {
           index = Math.min(index, value);
        }
    })
    return index == Number.MAX_VALUE? -1: index;
}