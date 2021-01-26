/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    if (pRoot === null) return 0;
  const leftDep = TreeDepth(pRoot.left);
  const rightDep = TreeDepth(pRoot.right);
  return Math.max(leftDep, rightDep) + 1;
}