//输出所有和为S的连续正数序列。序列内按照从小至大的顺序，
// 序列间按照开始数字从小到大的顺序
function FindContinuousSequence(sum)
{
    // write code here
    const max = Math.floor((sum + 1) / 2), res = [];;
    let slow = 1, fast = 2; 
    if(sum <= 2) {
        return res;
    }
    while( slow < fast && fast <= max ) {
      const total = (fast + slow)*(fast - slow + 1)/2;
      if(total > sum){
            slow++;
        
      } else if(total < sum) {
            fast++;
      }else if(total=== sum) {
          const arr = [];
          for(let i = slow; i <= fast; i++) {
              arr.push(i);
          }
          res.push(arr);
           fast++;
       } 
    }
    return res;
}