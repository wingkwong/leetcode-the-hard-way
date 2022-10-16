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
    TreeNode * helper(vector<int>& preorder, vector<int>& inorder,int pres,int pree,int ins,int ine)
    {
      
        if(ins > ine)
            return NULL;
        
        int rootIndex = -1;
        int rootData = preorder[pres];
        
        for(int i=ins;i<=ine;i++)
        {
            if(inorder[i] == rootData)
            {
                rootIndex = i;
                break;
            } 
        }
        
        int lins = ins;
        int line = rootIndex-1;
        int lpres = pres+1;
        int lpree = line - lins + lpres;
        int rins = rootIndex+1;
        int rine = ine;
        int rpree = pree;
        int rpres = lpree + 1; ; 
       
        
        TreeNode * root = new TreeNode(rootData);
        TreeNode * leftChild = helper(preorder,inorder,lpres,lpres,lins,line);
        TreeNode * rightChild = helper(preorder,inorder,rpres,rpree,rins,rine);
        
        root->left = leftChild;
        root->right = rightChild;
        
        return root;
      
    }
  
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
      
        return helper(preorder,inorder,0,preorder.size()-1,0,inorder.size()-1);
    }
};