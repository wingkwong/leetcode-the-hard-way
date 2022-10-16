/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> ans = new ArrayList<>();
        traversal(root, targetSum, ans, new ArrayList<Integer>(), 0);
        return ans;
    }
    
    void traversal(TreeNode root, int target, List<List<Integer>> ans, List<Integer> temp, int sum){
        if(root == null)
            return;
        
        temp.add(root.val);
        sum+=root.val;
        
//         If the node is leaf node, then check for sum
        if(root.left == null && root.right == null)
        {
            if(sum == target){
                ans.add(new ArrayList(temp));
            }
        }
        traversal(root.left, target, ans, temp, sum);
        traversal(root.right, target, ans, temp, sum);
        temp.remove(temp.size()-1);
    }
}