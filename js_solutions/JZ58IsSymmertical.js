// 请实现一个函数，用来判断一棵二叉树是不是对称的。
// 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    // write code here
    if(!pRoot) {
        return true;
    }
    return compareTree(pRoot.left, pRoot.right);
}


function compareTree(left, right) {
    if(left == null) {
        return right == null;
    } 
    if(right == null) {
        return false;
    }
    if(left.val != right.val) {
        return false;
    }
    return compareTree(left.left, right.right) && compareTree(left.right, right.left);
}
