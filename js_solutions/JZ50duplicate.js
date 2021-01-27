/*
function duplicate(numbers, duplication)
{
    // write code here
    // 第一种方法 和 第二种
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    // method1 可以使用额外的数组来记录访问过的数值， method2 通过indexOf来得知index
    //函数返回True/False
     if(!numbers || numbers.length <= 1 || !duplication) {
        return false;
    }
//     const arr = new Array(numbers.length);
//     arr.fill(0);
    for(let i = 0; i < numbers.length; i++) {
        // index代表数值，value代表次数
        const index = numbers.indexOf(numbers[i]);
        if(index < i) {
            duplication[0] = numbers[i];
            return true;
        }
//        arr[numbers[i]] = 1;
    }
    return false;
}
*/

// 第三种方法
function duplicate(numbers, duplication) {
    for (let i = 0; i < numbers.length; i++) {
      let index = numbers[i];
      if (index >= numbers.length) {
        index -= numbers.length;
      }
      if (numbers[index] >= numbers.length) {
        duplication[0] = index;
        return true;
      }
      numbers[index] = numbers[index] + numbers.length;
    }
    return false;
  }
  
  