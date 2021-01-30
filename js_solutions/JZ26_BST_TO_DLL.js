// 剑指offer26 输入一棵二叉搜索树，
// 将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// let pre, head;
// let isFirst;
function Convert(pRootOfTree)
{
//     write code here
    if(pRootOfTree == null) {
        return null;
    }
//     let isFirst = true;
//     inorder(pRootOfTree);
//     return head;
    // 使用中序遍历，非递归的方法
    if(!pRootOfTree) {
        return null;
    }
    let isFirst = true, p = pRootOfTree, root = null, cur = null;
    const stack = [];
    while(p || stack.length) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        if(isFirst) {
            root = p;
            cur = root;
            isFirst = false;
        } else {
            cur.right = p;
            p.left = cur;
            cur = cur.right;
        }
        p = p.right;
    }
    return root;
}

 // 使用中序遍历，递归的方法
function inorder(node) {
    if(node == null) {
        return;
    }
    inorder(node.left);
    if(isFirst) {
        isFirst = false;
        pre = node;
        head = node;
    } else {
        pre.right = node;
        node.left = pre;
        pre = node;
    }
    inorder(node.right);
}