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