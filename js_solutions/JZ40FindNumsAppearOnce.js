// method1
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    const res = [];
    array.forEach((item) => {
        if(array.indexOf(item) === array.lastIndexOf(item)){
            res.push(item);
        }
    })
     return res;
}

// method2
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    const map = new Map();
    for(let i = 0; i < array.length; i++) {
        if(map.has(array[i])) {
            map.set(array[i], map.get(array[i]) + 1);
        } else {
            map.set(array[i], 1);
        }
    }
    const res = [];
    for(let ele of map.keys()) {
        if(map.get(ele) == 1) {
            res.push(ele);
        }
    }
     return res;
}

// method3
function FindNumsAppearOnce(array) {
    let tmp = array[0];
    for (let i = 1; i < array.length; i++) {
      tmp = tmp ^ array[i];
    }
    if (tmp === 0) return;
    let index = 0; 
      // 记录第几位是1
    while ((tmp & 1) === 0) {
      tmp = tmp >> 1;
      index++;
    }
    let num1 = 0, num2 = 0;
    for (let i = 0; i < array.length; i++) {
      if (isOneAtIndex(array[i], index)) num1 = num1 ^ array[i];
      else num2 = num2 ^ array[i];
    }
    return [num1, num2];
  }
  
  function isOneAtIndex(num, index) {
    num = num >> index;
    return num & 1;
  }