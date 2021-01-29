// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
// 则重建二叉树并返回。

function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length == 0|| vin.length ==0  ) {
        return null;
    }
    const index = vin.indexOf(pre[0]); // proves that the number of left part is index
    let leftPre = pre.slice(1, index+1);
    let rightPre = pre.slice(index+1);
    let root = new TreeNode(pre[0]);
    root.left = reConstructBinaryTree(leftPre, vin.slice(0,index));
    root.right = reConstructBinaryTree(rightPre, vin.slice(index+1));
    return root;
}

