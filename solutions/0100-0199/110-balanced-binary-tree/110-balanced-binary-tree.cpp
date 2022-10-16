/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    
    int isBalHelper(TreeNode * root)
    {
        if(root == NULL)return 0;
        
        int l = isBalHelper(root->left);
        int r = isBalHelper(root->right);
        
        if(l != -1 && r != -1  && abs(l-r) <= 1)
            return 1 + max(l,r);
        return -1;
    }
    
    bool isBalanced(TreeNode* root) {
        if(root == NULL )return true;
        int ans = isBalHelper(root);
        
        if(ans == -1)
            return false;
        return true;
    }
};