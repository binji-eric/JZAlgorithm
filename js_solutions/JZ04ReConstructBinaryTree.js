function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length == 0|| vin.length ==0  ) {
        return null;
    }
    const index = vin.indexOf(pre[0]); // proves that the count of left part is index
    let leftPre = pre.slice(1, index+1);
    let rightPre = pre.slice(index+1);
    let root = new TreeNode(pre[0]);
    root.left = reConstructBinaryTree(leftPre, vin.slice(0,index));
    root.right = reConstructBinaryTree(rightPre, vin.slice(index+1));
    return root;
}

