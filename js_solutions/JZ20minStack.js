// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。


const minStack = [], stack  = [];
let minValue = null;

function push(node)
{
    // write code here
    if(minValue) {
        minValue = Math.min(node, minValue)
    } else {
        minValue = node
    }
    stack.push(node)
    minStack.push(minValue)
}
function pop()
{
    // write code here
    const temp = stack.pop();
    minStack.pop();
    return temp;
}
function top()
{
    // write code here
    return stack[stack.length - 1]
}
function min()
{
    // write code here
    return minStack[minStack.length - 1]
}