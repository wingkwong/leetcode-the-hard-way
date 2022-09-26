---
description: 'Author: @wingkwong, @lonyehan | https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/'
tags: [Hash Table, Tree, Depth-First Search, Breadth-First Search, Binary Tree]
---

# 0987 - Vertical Order Traversal of a Binary Tree (Hard)

## Problem Link

https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

## Problem Statement

Given the `root` of a binary tree, calculate the **vertical order traversal** of the binary tree.

For each node at position `(row, col)`, its left and right children will be at positions `(row + 1, col - 1)` and `(row + 1, col + 1)` respectively. The root of the tree is at `(0, 0)`.

The **vertical order traversal** of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return *the **vertical order traversal** of the binary tree*.

**Example 1:**

```
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation:
Column -1: Only node 9 is in this column.
Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
Column 1: Only node 20 is in this column.
Column 2: Only node 7 is in this column.
```

**Example 2:**

```
Input: root = [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
Column -2: Only node 4 is in this column.
Column -1: Only node 2 is in this column.
Column 0: Nodes 1, 5, and 6 are in this column.
          1 is at the top, so it comes first.
          5 and 6 are at the same position (2, 0), so we order them by their value, 5 before 6.
Column 1: Only node 3 is in this column.
Column 2: Only node 7 is in this column.
```

**Example 3:**

```
Input: root = [1,2,3,4,6,5,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
This case is the exact same as example 2, but with nodes 5 and 6 swapped.
Note that the solution remains the same since 5 and 6 are in the same location and should be ordered by their values.
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 1000]`.
- `0 <= Node.val <= 1000`

## Approach 1: DFS

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
class Solution {
public:
     void dfs(TreeNode* root, int col, int row, map<int, map<int, multiset<int>>>& nodes) {
        // if root is nullptr, then skip it
        if (!root) return;
         
        // insert the current node value to corresponding row and grouped by col.
        // see above diagram for better understanding
        // for example, 
        // we add node 1 to nodes[0][0]
        // we add node 5 to nodes[0][2]. 
        // we add node 6 to nodes[0][2]
        nodes[col][row].insert(root -> val);
         
        // then we perform pre order traversal
        // see https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree#pre-order
        // for more understanding on tree traversals
        // dfs on left sub tree
        dfs(root-> left, col - 1, row + 1, nodes);
        // dfs on right sub tree
        dfs(root-> right, col + 1, row + 1, nodes);
    }
    
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        // init ans - store the final ans
        vector<vector<int>> ans;
        // nodes is used to store the node values grouped by column 
        // see above diagram for better understanding
        // use multiset here as the value could be same
        // use map here to take care of the order
        map<int, map<int, multiset<int>>> nodes;
        // dfs starting from the root of the tree
        dfs(root, 0, 0, nodes);
        // for each column in nodes
        for (auto column : nodes) {
            // init col - store the node values for all rows at the current column 
            vector<int> col;
            // for each row at the current column, we append all the node values to col
            // for example: column idx = 0, we add row = 0 (node 1) and row = 2 (node 5 & node 6)
            for (auto rows : column.second) {
                // we can use `insert` to add all elelments to a vector
                // instead of adding them one by one
                col.insert(col.end(), rows.second.begin(), rows.second.end());
            }
            // we've processed this col, add it to ans
            ans.push_back(col);
        }
        // return final ans
        return ans;
    }
};
```
</TabItem>

<TabItem value="cs" label="C#">
<SolutionAuthor name="@lonyehan"/>

```cs
public class Solution {
    public IList<IList<int>> VerticalTraversal(TreeNode root) {
        Dictionary<int, PriorityQueue<int, double>> dict = new Dictionary<int, PriorityQueue<int, double>>();
		
        DFS(root, dict);
        
        List<IList<int>> result = new List<IList<int>>();
        foreach(var v in dict.Keys.OrderBy(x => x)){
            List<int> temp = new List<int>();
            while(dict[v].Count != 0){
                temp.Add(dict[v].Dequeue());
            }
            result.Add(temp);
        }
        return result;
    }
    
    public void DFS(TreeNode node, Dictionary<int, PriorityQueue<int, double>> dict, int row = 0, int col = 0){
        if(node == null) return;
        
        DFS(node.left, dict, row + 1, col - 1);
        
        if(!dict.ContainsKey(col)){
            dict[col] = new PriorityQueue<int, double>();
            dict[col].Enqueue(node.val, row + 0.00001 * node.val);
        }
        else{
            dict[col].Enqueue(node.val, row + 0.00001 * node.val);
        }
        
        DFS(node.right, dict, row + 1, col + 1);
    }
}
```

</TabItem>
</Tabs>