---
description: 'Author: @heder, @jit | https://leetcode.com/problems/sum-root-to-leaf-numbers/'
tags: [Tree, Depth-First Search, Binary Tree]
---

# 0129 - Sum Root to Leaf Numbers (Medium) 

## Problem Link

https://leetcode.com/problems/sum-root-to-leaf-numbers/

## Problem Statement

You are given the `root` of a binary tree containing digits from `0` to `9` only.

Each root-to-leaf path in the tree represents a number.

- For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.

Return *the total sum of all root-to-leaf numbers*. Test cases are generated so that the answer will fit in a **32-bit** integer.

A **leaf** node is a node with no children.

**Example 1:**

```
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```

**Example 2:**

```
Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 1000]`.
- `0 <= Node.val <= 9`
- The depth of the tree will not exceed `10`.

## Approach 1: DFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int fast_io = []() { std::ios::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr); return 0; }();

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
    __attribute__((disable_sanitizer_instrumentation))
    static int sumNumbers(const TreeNode* root, int s = 0) {
        if (!root) return 0;
        s = s * 10 + root->val;
        if (!root->left && !root->right) return s;
        return sumNumbers(root->left, s) + sumNumbers(root->right, s);
    }
};
```

</TabItem>


<TabItem value="elixir" label="Elixir">
<SolutionAuthor name="@jit"/>

```elixir
# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do
  @spec sum_numbers(root :: TreeNode.t | nil) :: integer
  # Simply accumulate the number while traversing.
  def sum_numbers(root), do: dfs(root, 0)

  defp dfs(nil, _acc), do: 0
  defp dfs(%TreeNode{val: v, left: l, right: r}, acc) do
    acc = 10 * acc + v
    if !l && !r, do: acc, else: dfs(l, acc) + dfs(r, acc)
  end
end
```

</TabItem>
</Tabs>