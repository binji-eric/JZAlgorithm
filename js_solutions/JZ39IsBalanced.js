// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
// 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
// 平衡二叉树（Balanced Binary Tree），具有以下性质：
// 它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，
// 并且左右两个子树都是一棵平衡二叉树

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    return depth(pRoot) == -1? false: true;
}


function depth(pRoot) {
  if (pRoot === null) return 0;
  const leftLen = depth(pRoot.left);
  if (leftLen === -1) return -1;
  const rightLen = depth(pRoot.right);
  if (rightLen === -1) return -1;
  return Math.abs(leftLen - rightLen) > 1 ? -1 : Math.max(leftLen, rightLen) + 1;
}