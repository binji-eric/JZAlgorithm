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
