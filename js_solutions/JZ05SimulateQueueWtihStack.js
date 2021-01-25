var stack1 = []
var stack2 = []

function push(node)
{
    // write code here
    stack1.push(node);
}
function pop()
{
    // write code here
    if(stack2.length) {
        return stack2.pop();
    } else {
        while(stack1.length) {
            stack2.push(stack1.pop());
        }
        return stack2.pop();
    }
}