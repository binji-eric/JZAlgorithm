// 给定一棵二叉搜索树，请找出其中的第k小的结点。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    // 中序遍历，求第k个值
    if(k <= 0) {
        return null;
    }
    let cur = pRoot;
    const stack = [];
    let count = 0;
    while(stack.length || cur) {
        if(cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            count++;
            if(count == k) {
                return cur;
            }
            cur = cur.right;
        } 
    }
    return null;
}