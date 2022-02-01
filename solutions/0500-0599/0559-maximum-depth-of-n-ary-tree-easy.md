---
description: 'Author: @TBC | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/'
---

# 0559 - Maximum Depth of N-ary Tree (Easy)

## Statement

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

_Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples)._

&#x20;

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```
Input: root = [1,null,3,2,4,null,5,6]
Output: 3
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/11/08/sample\_4\_964.png)

```
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5
```

**Constraints:**

* The total number of nodes is in the range `[0, 10^4]`.
* The depth of the n-ary tree is less than or equal to `1000`.
