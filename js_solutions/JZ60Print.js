// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    const que = [], res = [];
    if(!pRoot) {
        return res;
    }
    que.push(pRoot);
    let levelCount = 1, levelArr = [];
    while(que.length) {
        const temp = que.shift();
        levelCount--;
        levelArr.push(temp.val);
        if(temp.left)
            que.push(temp.left);
        if(temp.right)
            que.push(temp.right);
        if(!levelCount) {
            res.push(levelArr);
            levelArr = [];
            levelCount = que.length;
        }
        
    }
    return res;
}