// 输入两棵二叉树A，B，判断B是不是A的子结构。（
// ps：我们约定空树不是任意一个树的子结构）

function HasSubtree(pRoot1, pRoot2){
    if(pRoot1 == null || pRoot2 == null){
        return false;
    }
    if(isSubTree(pRoot1, pRoot2)){
        return true;
    } else{
        // 在pRoot1中寻找相同的起点
        return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
    }

    
}
function isSubTree(pRoot1, pRoot2){
        // 直接判断时，pRoot2可以为空，证明是遍历完成
        if(pRoot2 == null ) return true;
        
        // 如果子树为空，但是主树不空，直接返回错误
        else if(pRoot1 == null) return false;
        // 根处相等，看后面的比较
        if(pRoot1.val === pRoot2.val){
            return isSubTree(pRoot1.left, pRoot2.left) && isSubTree(pRoot1.right, pRoot2.right);
        } 
        // 根处不相等，直接返回false
        else {
            return false;
        }

    }