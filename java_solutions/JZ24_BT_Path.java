import java.util.ArrayList;
/**
public class TreeNode {
    int val = 0;
    TreeNode left = null;
    TreeNode right = null;

    public TreeNode(int val) {
        this.val = val;

    }

}
*/
public class Solution {
    public ArrayList<ArrayList<Integer>> FindPath(TreeNode root,int target) {
        ArrayList<ArrayList<Integer>> res = new ArrayList<>();
        if(root == null) {
            return res;
        }
        helper(root, target, new ArrayList<Integer>(), res);
        return res;
    }
    
    private void helper(TreeNode node, int expectedNumber, ArrayList<Integer> temp, ArrayList<ArrayList<Integer>> res) {
        if(node == null) {
            return;
        } else if(node.left == null && node.right == null && node.val == expectedNumber) {
            temp.add(node.val);
            res.add(temp);
            return;
        } else {
            temp.add(node.val);
            helper(node.left, expectedNumber - node.val, new ArrayList<Integer>(temp), res);
            helper(node.right, expectedNumber - node.val, new ArrayList<Integer>(temp), res);
        }
    }
}