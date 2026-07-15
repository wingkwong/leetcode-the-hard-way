---
title: 'Lowest Common Ancestor(LCA)'
description: 'Lowest common ancestor (LCA) of two nodes x and y is the deepest(lowest) node that has both x and y as descendants'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - lowest common ancestor
  - algorithm
---

<TutorialCredits authors="@RohitTaparia" contributors="@wkw" />

## Overview

Lowest common ancestor (LCA) of two nodes $x$ and $y$ in a tree or directed acyclic graph (DAG) is the deepest(lowest) node that has both $x$ and $y$ as descendants. Hence, LCA is the ancestor of x and y which is the farthest from the root node in a tree. In most cases, we also consider a node to be a descendant of itself. We have assumed this fact for this article,i.e, $$LCA(x,x)=x$$. Also, the $$LCA(x,y)$$ is a node that surely lies on the shortest path between $$x$$ and $$y$$, since if there was a smaller path, there would surely be a node at a lower depth which is their mutual ancestor, and this cannot be possible as if it was, this node would have been the LCA.

![image](https://user-images.githubusercontent.com/79581359/196247356-4eba006f-8be1-44cb-a146-cb36ebaa44a4.png)

In this example, for nodes $7$ and $4$, the LCA is $2$.

For nodes $6$ and $4$, the LCA is $5$.

For nodes $4$ and $8$, the LCA is the root itself, i.e. $3$.

$$NOTE:$$ The LCA in a binary tree for the root with any other node will be the root itself.

One of the most common applications of LCA is to determine the distance between pairs of nodes in a binary tree(or any other tree for that matter).In the above example, the distance between $6$ and $4$ can be computed as can be computed as the distance from $6$ to $root(3)$, plus the distance from the $4$ to $root(3)$, minus twice the distance from the root to their lowest common ancestor(LCA), that is,

$$
dist(x,y) = dist(x, root) + dist(y, root)-  2 * dist(LCA, root)
$$

## Implementation

We can notice from the definition of LCA that the LCA of two nodes $$x$$ and $$y$$ is nothing but the node of the intersection of the paths from $$x$$ and $$y$$ to the root node. In the tree above, the paths from $7$ and $6$ to the root node have their first intersection at $5$. Hence, $$LCA(7, 6) = 5$$. We can calculate the paths using DFS and find the intersection using a stack based approach, or using a recursive approach. This is the general(naive) solution, and takes $$O(N)$$ time and $$O(N)$$ space. Below is the code for the iterative approach using stacks.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@RohitTaparia"/>

```cpp

int findingLCA(int x, int y, vector<int>& adj) {
  // adj[i] represents parent node of i
  int root = 0;
  stack<int> x_path, y_path;

  // find first path
  while (x != root) {
    x_path.push(x);
    x = adj[x];
  }
  x_path.push(x);

  // find second path
  while (y != root) {
    y_path.push(y);
    y = adj[y];
  }
  y_path.push(y);

  int lca = -1;
  // find the last common node
  while ((!x_path.empty() && !y_path.empty()) &&
         (x_path.top() == y_path.top())) {
    lca = x_path.top();
    x_path.pop();
    y_path.pop();
  }
  return lca;
}
```

</TabItem>
</Tabs>

The same logic can be implemented using recursion, so that we do not need to use stacks explicitly. We store paths from root to node $$x$$ and from root to node $$y$$ and then check iterate to the last common node, which is the LCA. Explicitly, what we are trying to do here is to find which is the last common node while traversing both the paths. Obviously the root will be common in both paths, since we assume that both nodes are present. Then we need to go to the common node which is the farthest from the root node. This we can do if we traverse both the paths. The last common node gives us the LCA.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@RohitTaparia"/>

```cpp
// findLCA will return LCA only if both node x, y are present, else -1
int findLCA(Node* root, int x, int y) {
  vector<int> path_root_to_x, path_root_to_y;

  // if either x or y is not present return -1
  if (!findPath(root, path_root_to_x, x) || !findPath(root, path_root_to_y, y))
    return -1;

  // check for LCA now, which is farthest common node from root in both paths
  for (int i = 0; i < path_root_to_x.size() && i < path_root_to_y.size(); i++)
    if (path_root_to_x[i] != path_root_to_y[i]) break;
  return path_root_to_x[i - 1];
}

bool findPath(Node* root, vector<int>& current_path, int value) {
  // if root is NULL, then no paths
  if (root == NULL) return false;

  current_path.push_back(root->key);

  if (root->key == value) return true;

  // check if value is found in left or right sub-tree
  if ((root->left && findPath(root->left, current_path, value)) ||
      (root->right && findPath(root->right, current_path, value)))
    return true;

  // remove root since not found in subtree
  current_path.pop_back();
  return false;
}

```

</TabItem>
</Tabs>

## Example: [0235 -Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

```
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

Let's start with a recursive solution. The idea is simple. We start from the root and start checking in the left and right subtree of every node(basically DFS). If the current subtree contains both p and q, i.e, neither of them is $$NULL$$, then the function will reuurn the root of this subtree which will be the LCA. If any one of them is $$NULL$$, then the function returns the other one. If both are $$NULL$$, then the result will also be $$NULL$$. The time complexity will be $$O(N)$$ and space somplexity would be $$O(N)$$, since maximum height for a binary tree(skewed) will be $$N$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@RohitTaparia"/>

```cpp
/**
 * definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
 public:
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    // base case to check if the root is null or
    // one of the required nodes is the root itself
    // used the recursive implementation discussed earlier
    if (root == NULL) {
      return root;
    }
    if (root == p || root == q) {
      return root;
    }
    // recurse for the left subtree, basically dfs
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    // recurse for the right subtree
    TreeNode* right = lowestCommonAncestor(root->right, p, q);

    // if one of them is NULL means we need to return the other one
    if (left == NULL) {
      return right;
    } else if (right == NULL) {
      return left;
    } else {
      // when both left and right are not null, we can say that this is the LCA
      return root;
    }
  }
};
```

</TabItem>
</Tabs>

## Example: [2096. Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

```
You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

'L' means to go from a node to its left child node.
'R' means to go from a node to its right child node.
'U' means to go from a node to its parent node.
Return the step-by-step directions of the shortest path from node s to node t.
Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: "UURL"
Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
```

In this problem, we need to find the closest point(from nodes), where path from root to nodes intersect, which is LCA of both the nodes. Hence, we first find the LCA node of start and destination. Then we need to get path from LCA to the starting node($$lca_s$$) and from LCA to destination($$lca_d$$). This method has also been explained above. In this we simply do a simple DFS and first explore the left path, and then the right path. Whenever we find the node, we return true, otherwise we backtrack and explore the right path. Now that we have both paths, we will convert all chars in $$lca_s$$ to $$U$$, since we need to move upward.

At last, we concatenate both strings and return the combined path.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@RohitTaparia"/>

```cpp
/**
 * definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
 public:
  // function to get LCA of given two nodes
  // used the recursive implementation discussed earlier
  TreeNode* getLCA(TreeNode* root, int start, int dest) {
    if (!root) return NULL;

    if (root->val == start || root->val == dest) return root;

    // recurse for left subtree
    TreeNode* left = getLCA(root->left, start, dest);
    // recurse for right subtree
    TreeNode* right = getLCA(root->right, start, dest);

    // if both are not null, this node is LCA
    if (left && right) return root;

    // else return the node which is not NULL
    else if (left) {
      return left;
    }
    return right;
  }

  bool findPath(TreeNode* root, string& path, int val) {
    if (!root) return false;

    // if node is found, we can return true
    if (root->val == val) return true;

    // try to find node for left
    path.push_back('L');
    if (findPath(root->left, path, val)) return true;
    path.pop_back();

    // try to find node for right
    path.push_back('R');
    if (findPath(root->right, path, val)) return true;
    path.pop_back();

    return false;
  }

  string getDirections(TreeNode* root, int initialValue, int finalValue) {
    // get LCA of start and destination node
    TreeNode* lca = getLCA(root, initialValue, finalValue);

    string lcaS = "", lcaD = "";

    // find both paths
    findPath(lca, lcaS, initialValue);
    findPath(lca, lcaD, finalValue);

    for (auto& c : lcaS) c = 'U';

    // merge both paths,
    // i.e. start node -> destination node
    return lcaS + lcaD;
  }
};
```

</TabItem>
</Tabs>

export const suggestedProblems = [ { "problemName": "1123. Lowest Common Ancestor of Deepest Leaves", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/", "solutionLink": "" }, { "problemName": "235. Lowest Common Ancestor of a Binary Search Tree", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", "solutionLink": "" } ]

<Table title="Suggested Problems" data={suggestedProblems} />
