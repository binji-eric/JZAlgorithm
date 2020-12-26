// 剑指offer26 输入一棵二叉搜索树，
// 将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。
import java.util.*;
public class Solution {
    public TreeNode Convert(TreeNode pRootOfTree) {
        if(pRootOfTree == null) {
            return null;
        }
        TreeNode head = null, pre = null, p = pRootOfTree;
        boolean isFirst = true;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        while(!stack.isEmpty() || p != null) {
            if(p != null) {
                stack.push(p);
                p = p.left;
            } else {
                TreeNode temp = stack.pop();
                if(isFirst) {
                    pre = temp;
                    head = temp;
                    isFirst = false;
                } else {
                    pre.right = temp;
                    temp.left = pre;
                    pre = temp;
                }
                p = temp.right;
            }
        }
        return head;
    }
}