/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    const res = [];
    // 直接返回
    if(!root) {
        return res;
    }
    helper(root, expectNumber, new Array(), res);
    return res;
    
}

function helper(node, expectedNumber, path, res) {
    if(!node)
        return;
    // 无左右孩子节点，并且与预期目标相等，push入res
    else if(!node.left && !node.right) {
        if(node.val === expectedNumber) {
            path.push(node.val);
            res.push(path);
        }
        // 其他一般情况，分左右孩子，进入helper
    } else {
        path.push(node.val);
        helper(node.left, expectedNumber - node.val, path.slice(), res);
        helper(node.right, expectedNumber - node.val, path.slice(), res);
    }
}