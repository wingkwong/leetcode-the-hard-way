/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    int max = 0;

    void rightView(TreeNode root, List<Integer> l, int level) {
        if (root == null)
            return;
        if (max < level) {
            l.add(root.val);
            max = level;
        }
        rightView(root.right, l, level + 1);
        rightView(root.left, l, level + 1);
    }

    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> l = new ArrayList<>();
        rightView(root, l, 1);
        return l;
    }
}