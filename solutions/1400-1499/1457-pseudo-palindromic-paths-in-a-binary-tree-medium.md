---
description: 'Author: @wingkwong | https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/'
tags: [Bit Manipulation, Tree, Depth-First Search, Breadth-First Search, Binary Tree]
---

# 1457 - Pseudo-Palindromic Paths in a Binary Tree (Medium) 

## Problem Link

https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/

## Problem Statement

Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be **pseudo-palindromic** if at least one permutation of the node values in the path is a palindrome.

*Return the number of **pseudo-palindromic** paths going from the root node to leaf nodes.*

**Example 1:**

```
Input: root = [2,3,1,3,1,null,1]
Output: 2 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).
```

**Example 2:**

```
Input: root = [2,1,1,1,3,null,null,null,null,null,1]
Output: 1 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).
```

**Example 3:**

```
Input: root = [9]
Output: 1
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 105]`.
- `1 <= Node.val <= 9`

## Approach 1: Preorder Traversal + Bit Manipulation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
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

// Time Complexity: O(N) where N is the number of nodes
// Space Complexity: O(H) where H is the tree height
class Solution {
public:
    int ans = 0;
    
    // the idea is that there is at most one digit with odd frequency in pseudo-palindromic path
    // e.g. [2, 3, 3] - digit 2 has odd frequency
    // e.g. [9] - digit 9 has odd frequency
    // so that the digit with odd frequency can be put in the middle, e.g. 323, 9, etc
    int pseudoPalindromicPaths (TreeNode* root) {
        preorder(root, 0);
        return ans;
    }
    
    // if you don't know preorder traversal, try 144. Binary Tree Preorder Traversal first
    // Problem Link: https://leetcode.com/problems/binary-tree-preorder-traversal/
    // Explanation Link: https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/2549333/LeetCode-The-Hard-Way-DFS-or-Pre-Order-or-Explained-Line-By-Line
    void preorder(TreeNode* node, int cnt) {
        // preorder traversal step 1: if node is null, then return
        if (node == NULL) return;
        // preorder traversal step 2: do something with node value here
        
        // first let's understand what (x << y) means 
        // (x << y): shifting `x` `y` bits to the left
        // e.g. 1 << 0 = 1 (shift 0 bit - stay as it is)
        // e.g. 1 << 1 = 0b10 (shift 1 bit - becomes 2)
        // e.g. 1 << 2 = 0b100 (shift 2 bits to the left - becomes 4)
        // you may find that (1 << n) is actually just power of 2. i.e. 2 ^ n
        
        // second let's understand three properties of XOR
        // 1. XOR is self-inverse which means x ^ x = 0 (number XOR number evaluates to 0)
        // 2. 0 is identity element which means x ^ 0 = x (number XOR 0 remains unchanged)
        // 3. XOR is commutative, which means x ^ y = y ^ x (order doesn't matter)
        
        // we can use (1 << i) to set the appearance of digit i
        // but how to count the odd frequency? 
        // we can use above XOR properties to achieve the following 
        // if the i-bit is set, then digit i has an odd frequency
        // how? remember XOR property #1, #2, and #3?
        // if a digit appears even number of times, the bit at the end will be 0. (x ^ x = 0)
        // if a digit appears odd number of times, the bit at the will be 1. (x ^ x ^ x = (x ^ x) ^ x = 0 ^ x = x)
        cnt ^= (1 << node->val);
        // do something at the leaf
        if (!node->left && !node->right) {
            // if i-bit is set in `cnt`, that means digit `i` has an odd frequency
            // therefore, the number of 1 in `cnt` = the number of digits with an odd frequency
            // however, we only want at most one digit that has an odd frequency
            // we can use a bit trick (n & (n - 1)) to remove the rightmost set bit.
            // e.g. 
            // n     n     n - 1  n & (n - 1)
            // --   ----   ----   -------
            //  0   0000   0111    0000
            //  1   0001   0000    0000
            //  2   0010   0001    0000
            //  3   0011   0010    0010
            //  4   0100   0011    0000
            //  5   0101   0100    0100
            //  6   0110   0101    0100
            //  7   0111   0110    0110
            //  8   1000   0111    0000 
            //  9   1001   1000    1000
            // 10   1010   1001    1000
            // 11   1011   1010    1010
            // 12   1100   1011    1000
            // 13   1101   1100    1100
            // 14   1110   1101    1100
            // 15   1111   1110    1110
            
            // if the result is 0, that means we have at most one digit that has an odd frequncy 
            // hence, add one to ans
            ans += (cnt & (cnt - 1)) == 0;
        }
        // preorder traversal step 3: traverse the left node
        preorder(node->left, cnt);
        // preorder traversal step 4: traverse the right node
        preorder(node->right, cnt);
    }
};
```

</TabItem>
</Tabs>