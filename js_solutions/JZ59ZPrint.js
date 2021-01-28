/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    const stack1 = [], stack2 = [], res = [];
    if(!pRoot)
        return res;
    stack1.push(pRoot);
    const tempArr = [];
    let flag = true;
    while(stack1.length || stack2.length) {
        let tempArr = [];
        if(flag) {
            while(stack1.length) {
                const temp = stack1.pop();
                tempArr.push(temp.val);
                if(temp.left) {
                    stack2.push(temp.left);
                }
                if(temp.right) {
                    stack2.push(temp.right);
                }
            }
        } else {
            while(stack2.length) {
                 const temp = stack2.pop();
                 tempArr.push(temp.val);
                 if(temp.right) {
                    stack1.push(temp.right);
                }
                if(temp.left) {
                    stack1.push(temp.left);
                }
            }
        }
        if(tempArr.length)
            res.push(tempArr);
        flag = !flag;
    }
    return res;
}