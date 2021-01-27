// 写一个函数，求两个整数之和，
// 要求在函数体内不得使用+、-、*、/四则运算符号。
function Add(num1, num2)
{
  // 没有进位时退出循环
  while(num2) {
      const temp = num1^num2;
      num2 = (num1&num2)<< 1;  // num2来表示有进位，后面为0，异或时保存后面的值
      num1 = temp;
  }
  return num1;
}