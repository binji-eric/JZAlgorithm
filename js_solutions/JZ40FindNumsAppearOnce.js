// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。
// 请写程序找出这两个只出现一次的数字。

// method1
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    const res = [];
    array.forEach((item) => {
        // 如果出现两次，那么indexOf != lastIndexOf
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
    // map中记录对应的次数，最后统计只出现一次的值
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
    // tmp是两个不同数异或产生的结果，
    let index = 0; 
      // 记录第几位是1，也就是两个数字不同的地方
    while ((tmp & 1) === 0) {
      tmp = tmp >> 1;
      index++;
    }
    let num1 = 0, num2 = 0;
    for (let i = 0; i < array.length; i++) {
      // 指定位置为1的
      if (isOneAtIndex(array[i], index)) num1 = num1 ^ array[i];
      // 不为1的
      else num2 = num2 ^ array[i];
    }
    return [num1, num2];
  }
  
  function isOneAtIndex(num, index) {
    num = num >> index;
    return num & 1;
  }