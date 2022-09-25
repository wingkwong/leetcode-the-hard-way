---
description: 'Author: @wingkwong, @lonyehan | https://leetcode.com/problems/n-ary-tree-level-order-traversal/'
tags: [Tree, Breadth-First Search]
---

# 0429 - N-ary Tree Level Order Traversal (Medium) 

## Problem Statement

Given an n-ary tree, return the *level order* traversal of its nodes' values.

*Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).*

**Example 1:**

```
Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]
```

**Example 2:**

```
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
```

**Constraints:**

- The height of the n-ary tree is less than or equal to `1000`
- The total number of nodes is between `[0, 104]`

## Approach 1: BFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(M): where N is the maximum number in the tree at any level
class Solution {
public:
    // The idea is to use BFS, which is a common way to traverse the tree level by level
    // For a standard BFS, we can use queue to push the first root node into a queue
    // Then remove the front of the queue, add its children to back of the queue
    // Do the above steps until the queue is empty
    // In this question, we need to extra thing which is to push the each value of the nodes level by level
    // We can simply use `level` to store the values of the nodes at current level, 
    // and add it back to `ans` once we've processed all nodes at that level
    vector<vector<int>> levelOrder(Node* root) {
        // the total number of nodes is between [0, 10 ^ 4]
        // check if root is nullptr to cover 0 node case
        if(!root)  return {};
        // init ans
        vector<vector<int>> ans;
        // standard bfs approach
        queue<Node*> q;
        // start with the root node
        q.push(root); 
        // do the following logic when the queue is not empty
        while(!q.empty()) {
            // get the queue size
            int n = q.size(); 
            // level is used to store all the node values at the current level
            vector<int> level;
            // for each element in the current queue
            for(int i = 0; i < n; i++){
                //get the first node from the queue
                Node* node = q.front();
                // pop it
                q.pop();
                // add it to level
                level.push_back(node->val);
                // this node may include other nodes, we add them all to the queue
                for(auto n : node->children) q.push(n); 
            }
            // we've processed this level, add it to ans
            ans.push_back(level);
        }
        // return final ans
        return ans;
    }
};
```
</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

# Time Complexity: O(N) where N is the number of nodes in the tree
# Space Complexity: O(M): where M is the maximum number in the tree at any level
class Solution:
    # The idea is to use BFS, which is a common way to traverse the tree level by level
    # For a standard BFS, we can use queue to push the first root node into a queue
    # Then remove the front of the queue, add its children to back of the queue
    # Do the above steps until the queue is empty
    # In this question, we need to extra thing which is to push the each value of the nodes level by level
    # We can simply use `level` to store the values of the nodes at current level, 
    # and add it back to `ans` once we've processed all nodes at that level
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        # the total number of nodes is between [0, 10 ^ 4]
        # check if root is None to cover 0 node case
        if not root: return []
        # init ans
        ans = []
        # standard bfs approach
        # start with the root node
        q = deque([root])
        # do the following logic when the queue is not empty
        while q:
            # level is used to store all the node values at the current level
            level = []
            # for each element in the current queue
            for i in range(len(q)):
                #get the first node from the queue and pop it
                node = q.popleft()
                # add it to level
                level += [node.val]
                # this node may include other nodes, we add them all to the queue
                for n in node.children: q.append(n)
            # we've processed this level, add it to ans
            ans += [level]
        # return final ans
        return ans
```
</TabItem>

<TabItem value="cs" label="C#">
<SolutionAuthor name="@lonyehan"/>

```C#
/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, IList<Node> _children) {
        val = _val;
        children = _children;
    }
}
*/
public class Solution {
    public IList<IList<int>> LevelOrder(Node root) {        
        if(root == null) return new List<IList<int>>();
        
        List<IList<int>> result = new List<IList<int>>();
        Queue<Node> queue = new Queue<Node>();
        queue.Enqueue(root);
        
        while(queue.Count != 0){
            int count = queue.Count;
            List<int> list = new List<int>();
            for(int i = 0; i < count; i++){
                Node q = queue.Dequeue();
                list.Add(q.val);
                foreach(var c in q.children){
                    queue.Enqueue(c);
                }                
            }
            
            result.Add(list);
        }
        
        return result;
    }
}
```
</TabItem>
</Tabs>