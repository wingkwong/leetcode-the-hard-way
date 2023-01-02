---
description: >-
  Author: @wingkwong, @radojicic23 |
  https://leetcode.com/problems/n-ary-tree-preorder-traversal/
---

# 0589 - N-ary Tree Preorder Traversal (Easy)

## Problem Link

https://leetcode.com/problems/n-ary-tree-preorder-traversal/

## Problem Statement

Given the `root` of an n-ary tree, return _the preorder traversal of its nodes' values_.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/11/08/sample\_4\_964.png)

```
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

**Constraints:**

* The number of nodes in the tree is in the range `[0, 10^4]`.
* `0 <= Node.val <= 10^4`
* The height of the n-ary tree is less than or equal to `1000`.

## Approach 1: DFS

Straightforward preorder traversal.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> ans;
    void dfs(Node* node) {
        if (!node) return;
        ans.push_back(node->val);
        for (auto x : node->children) dfs(x);
    }
    vector<int> preorder(Node* root) {
        dfs(root);
        return ans;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        output = []
        self.dfs(root, output)
        return output
        
    def dfs(self, root, output):
        if not root:
            return 
        output.append(root.val)
        for child in root.children:
            self.dfs(child, output)
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let output = new Array();
    dfs(root, output);
    return output;

    function dfs(root, output) {
        if (!root) return;
        output.push(root.val);
        for (child of root.children) {
            dfs(child, output);
        }
    }
};
```

</TabItem>
</Tabs>
