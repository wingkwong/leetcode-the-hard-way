// Name of problem : 101. Symmetric Tree
// Problem link : https://leetcode.com/problems/symmetric-tree/
// Contributed by Sanjoy Saha [github : SanjoySaha24]

class Solution
{
public:
    bool isSymmetric(node *root1, node *root2)
    {
        if (root1 == NULL || root2 == NULL)
            return root1 == root2;
        return (root1->data == root2->data) && isSymmetricUtil(root1->left, root2->right) && isSymmetricUtil(root1->right, root2->left);
    }
    bool isSymmetric(node *root)
    {
        if (!root)
            return true;
        return isSymmetricUtil(root->left, root->right);
    }

    struct node *newNode(int data)
    {
        struct node *node = (struct node *)malloc(sizeof(struct node));
        node->data = data;
        node->left = NULL;
        node->right = NULL;

        return (node);
    }
};