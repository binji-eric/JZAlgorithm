// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    const res = [], que = [];
    if(!root) {
        return res;
    }
    que.push(root);
    while(que.length) {
        const temp = que.shift();
        res.push(temp.val);
        if(temp.left) {
            que.push(temp.left);
        }
        if(temp.right) {
            que.push(temp.right);
        }
    }
    return res;
}