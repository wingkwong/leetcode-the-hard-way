---
title: 'Segment Tree'
description: 'A segment tree is a versatile data structure used for efficient querying and updating of elements within an array or a list.'
# hide_table_of_contents: true
keywords:
  - segment tree
  - tutorial
  - range query
  - update operation
  - data structure
---

<TutorialAuthors names="@shay2407"/>

## Overview

A **Segment Tree**, also known as a **Interval Tree**, is a versatile and powerful data structure used for efficient querying and updating of elements within an array or a list. It is particularly useful when dealing with problems involving range queries and updates on large datasets. Segment Trees are often used in competitive programming, computer science, and various applications in data science.

## Structure of a Segment Tree

A Segment Tree is a binary tree where each node represents a range or interval of elements in the original array. The root node represents the entire array, and each level of the tree further divides the array into smaller subsegments until you reach the leaf nodes, which represent individual elements.
If you have an array with elements [0, ..., N-1], you can divide it into two parts: [0, ..., N/2-1] and [N/2, ..., N-1]. This division allows us to create a recursive structure. We continue this process until the lower and upper bounds of the range are the same.
The segment tree is typically depicted using an array structure, with the initial element storing the aggregate value for the entire range, and the descendants of the node at the i-th position can be located at (2i + 1) and (2i + 2).

![Segment Tree Structure](images/segment_tree_structure.png)

Each node in the segment tree represents a range of elements in the array. The root node represents the entire array, and its children represent the two halves of the array. Each child's children represent the two halves of that child's range, and so on.

The leaves of the segment tree represent the individual elements in the array.
The value of each node in the segment tree is calculated by combining the values of its children. In this case, the value of each node is the sum of the values of its children.

## Implementation of a Segment Tree

We'll consider an iterative approach for building and using Segment Trees, which is often more intuitive than a recursive one. This approach helps us perform both range sum queries and point updates in O(log n) time, regardless of whether the number of queries and updates is equal.

### 1. Building the Segment Tree
* Initialization: Given an array arr of size n, create an array tree of size 2 * n. The first n elements of tree will store the original array values, and the rest will be used for intermediate and aggregate values.

* Building the Tree Iteratively: Start with the leaf nodes of the tree, which represent individual elements of arr. For each leaf node tree[i], set its value to arr[i - n].

* Calculate Intermediate Nodes: For each non-leaf node tree[i], calculate its value as the sum of its children, i.e., tree[2 * i] + tree[2 * i + 1]. Continue this process until you reach the root of the tree.

### 2. Querying the Segment Tree
* To find the sum of elements in a range [l, r], follow these steps:

* Initialize the result variable sum to 0.

* Traverse the tree from the root to the leaves while keeping track of the current range [start, end] of the node.

* At each node, check if the node's range [start, end] is completely outside [l, r]. If so, skip this node.

* If the node's range [start, end] is completely inside [l, r], add its value tree[i] to sum.

* If the node's range partially overlaps with [l, r], traverse both its children recursively.

* Return the final sum as the sum of elements in the range [l, r].

### 3. Updating the Segment Tree
To update the value of an element at index i in the array, follow these steps:

* Find the corresponding leaf node in the tree using tree[i + n].

* Update the value of the leaf node to the new value x.

* Recursively update the intermediate nodes in the path from the leaf node to the root by recalculating their values.

#### Code:

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@shay2407"/>

```python
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.buildSegmentTree(arr, 0, self.n - 1, 0)

    def buildSegmentTree(self, arr, start, end, treeNode):
        if start == end:
            # Leaf node, store the value of arr[start]
            self.tree[treeNode] = arr[start]
        else:
            mid = (start + end) // 2
            # Recursively build left and right subtrees
            self.buildSegmentTree(arr, start, mid, 2 * treeNode + 1)
            self.buildSegmentTree(arr, mid + 1, end, 2 * treeNode + 2)
            # Combine values from left and right subtrees
            self.tree[treeNode] = self.tree[2 * treeNode + 1] + self.tree[2 * treeNode + 2]

    def query(self, left, right):
        return self.querySegmentTree(0, 0, self.n - 1, left, right)

    def querySegmentTree(self, treeNode, start, end, left, right):
        if left > end or right < start:
            # Completely outside the query range
            return 0  # or appropriate neutral value based on the query type

        if left <= start and right >= end:
            # Completely inside the query range
            return self.tree[treeNode]

        mid = (start + end) // 2
        leftValue = self.querySegmentTree(2 * treeNode + 1, start, mid, left, right)
        rightValue = self.querySegmentTree(2 * treeNode + 2, mid + 1, end, left, right)
        
        # Combine values from left and right subtrees
        return leftValue + rightValue

    def update(self, index, newValue):
        self.updateSegmentTree(0, 0, self.n - 1, index, newValue)

    def updateSegmentTree(self, treeNode, start, end, index, newValue):
        if start == end:
            # Leaf node, update the value
            self.tree[treeNode] = newValue
        else:
            mid = (start + end) // 2
            if index <= mid:
                # Update in the left subtree
                self.updateSegmentTree(2 * treeNode + 1, start, mid, index, newValue)
            else:
                # Update in the right subtree
                self.updateSegmentTree(2 * treeNode + 2, mid + 1, end, index, newValue)
            # Recalculate the current node's value
            self.tree[treeNode] = self.tree[2 * treeNode + 1] + self.tree[2 * treeNode + 2]

arr = [1, 3, 5, 7, 9, 11]
seg_tree = SegmentTree(arr)

print(seg_tree.query(1, 4))  # Output: 24 (sum of elements from index 1 to 4)

seg_tree.update(2, 10)  # Update the element at index 2 to 10

print(seg_tree.query(1, 4))  # Output: 28 (sum of elements from index 1 to 4 after the update)
```
</TabItem>

### Walkthrough
* We define a Python class named SegmentTree to encapsulate the functionality of the segment tree. This class will have methods for building the tree, performing range queries, and updating elements in the array.
* In the constructor __init__, we initialize the segment tree with an input array arr. We also calculate the size n of the array and create an empty array tree to represent the segment tree.
* The size of the tree array is set to 4 * n to ensure that it can accommodate all the nodes of the segment tree. This is a common choice that provides enough space for most use cases.
* We call the buildSegmentTree method to construct the segment tree using the input array.
* The buildSegmentTree method constructs the segment tree iteratively. It is called recursively for each node in the tree.
* If start and end are equal, it means we've reached a leaf node. In this case, we store the value of the corresponding element from the input array arr in the tree at the current node.
* If start and end are not equal, we calculate the middle index mid of the range [start, end].
* We then recursively build the left subtree with the range [start, mid] and the right subtree with the range [mid + 1, end].
* After building both subtrees, we combine their values and store the result in the current node of the tree.
* The query method is a public interface for performing range sum queries on the segment tree.
* It calls the private method querySegmentTree to perform the actual query.
* The querySegmentTree method performs the actual range sum query on the segment tree.
* It takes several parameters:
    * treeNode: The current node in the segment tree.
    * start and end: The range [start, end] that the current node represents.
    * left and right: The range [left, right] for which we want to calculate the sum.
* The method uses recursion to traverse the segment tree:
    * If the current node's range is completely outside the query range [left, right], it returns 0 (or an appropriate neutral value).
    * If the current node's range is completely inside the query range, it returns the value stored in that node.
    * If the current node's range partially overlaps with the query range, it recursively queries both left and right subtrees and combines their results.
* The result is the sum of values obtained from the left and right subtrees, representing the sum of elements in the query range [left, right].
* The update method is a public interface for updating an element in the input array. It calls the private method updateSegmentTree to perform the actual update.
* The updateSegmentTree method is responsible for updating an element at the specified index in the input array with a new value newValue.
* It uses a similar recursive approach as the query method:
    * If the current node represents a leaf node corresponding to the index to be updated, it updates the value in the tree array with the new value newValue.
    * If the current node's range contains the index to be updated, it recursively updates the appropriate subtree (left or right) based on whether the index is in the left or          right half of the current node's range.
    * After updating the subtree, it recalculates the value of the current node as the sum of its children to maintain consistency.

### Time Complexity

1. **Build Segment Tree:**
   - Time Complexity: O(N)
     - Constructing the initial Segment Tree typically takes linear time, where N is the number of elements in the input array or sequence.

2. **Query Operation:**
   - Time Complexity: O(log N)
     - Performing a query operation, such as finding the sum, minimum, maximum, or other aggregate value within a range, takes logarithmic time. This is because the Segment Tree reduces the search space by half at each level.

3. **Update Operation:**
   - Time Complexity: O(log N)
     - Updating a single element in the input array and subsequently updating the Segment Tree also takes logarithmic time. This is because the tree height is logarithmic in the number of elements.

### Space Complexity

1. **Segment Tree Array:**
   - Space Complexity: O(N)
     - The Segment Tree is typically represented as an array of size 4*N (or a similar factor) to accommodate the tree structure. Therefore, the space complexity is linear with respect to the number of elements.

2. **Recursive Implementation:**
   - Space Complexity: O(log N)
     - When implementing the Segment Tree recursively, the space complexity is proportional to the tree's height, which is logarithmic in the number of elements.


## Key Features

- **Efficient Range Queries:** Segment Trees excel at answering range queries efficiently. Whether you need to find the minimum, maximum, sum, or any other associative operation over a range of elements in an array, the Segment Tree can provide the answer in logarithmic time complexity.

- **Efficient Updates:** In addition to querying, Segment Trees allow for efficient updates of individual elements within the array. You can modify an element's value in logarithmic time, and the data structure automatically maintains the necessary information to answer queries accurately.

- **Binary Tree Structure:** A Segment Tree is a binary tree where each node represents a range or interval of elements in the original array. The root node represents the entire array, and each level of the tree further divides the array into smaller subsegments until you reach the leaf nodes, which represent individual elements.

- **Recursive Construction:** Segment Trees are constructed recursively. The root node represents the entire array, and as you move down the tree, each node divides its segment into two equal halves, creating child nodes that represent those halves.

## Common Operations

Segment Trees support several common operations:

1. **Build**: Construct a Segment Tree from an input array.

2. **Query**: Retrieve information (e.g., minimum, maximum, sum) over a specific range of elements in the array efficiently.

3. **Update**: Modify the value of an element in the array and update the Segment Tree accordingly.

## Applications

Segment Trees have numerous applications in computer science and beyond:

- **Range Queries**: Used for range queries in arrays, such as finding the minimum or maximum element in a given range.

- **Interval Overlap**: Determine overlapping intervals and their properties in a set of intervals.

- **Histogram Queries**: Calculate statistics over a histogram or frequency array within a range.

- **Dynamic Programming**: Solve various dynamic programming problems efficiently, such as finding the longest increasing subarray or subsequence.

- **Interval Scheduling**: Solve problems involving scheduling tasks or events over time intervals.

## Basic Segment Tree

In this section, we'll dive into the fundamentals of the Segment Tree data structure and provide code examples for constructing, querying, and updating a Segment Tree. We'll also walk through two LeetCode problems to illustrate how to apply these concepts.

### Example: [0307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/description/)

> Given an integer array nums, find the sum of the elements between indices left and right inclusive, where left <= right.

> You must implement the NumArray class:

>NumArray(int[] nums): Initializes the object with the integer array nums.
>void update(int index, int val): Updates the value of nums[index] to be val.
>int sumRange(int left, int right): Returns the sum of the elements of the nums array in the range [left, right] inclusive (i.e., sum(nums[left], nums[left + 1], ... , nums[right])).

For example, given the sorted input:

```python
nums = [1, 3, 5]
```
After creating a NumArray object:
```python
obj = NumArray(nums)
```
You can perform operations like updating a value and calculating a range sum:

```python
obj.update(1, 2)  # nums = [1, 2, 5]
result = obj.sumRange(0, 2)  # Result should be 8 (sum of elements from index 0 to 2)

```


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@shay2407"/>

```python
class NumArray:
    def __init__(self, nums):
        self.n = len(nums)
        self.tree = [0] * (2 * self.n)
        self.buildSegmentTree(nums)

    def buildSegmentTree(self, nums):
        for i in range(self.n):
            self.tree[i + self.n] = nums[i]
        
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]

    def update(self, index, val):
        index += self.n
        diff = val - self.tree[index]
        self.tree[index] = val 
        while index > 0:
            parent = index // 2
            self.tree[parent] += diff
            index = parent


    def sumRange(self, left, right):
        left += self.n
        right += self.n
        _sum = 0
        
        while left <= right:
            if left % 2 == 1:
                _sum += self.tree[left]
                left += 1
            if right % 2 == 0:
                _sum += self.tree[right]
                right -= 1
            left //= 2
            right //= 2
        
        return _sum

nums = [1, 3, 5]
obj = NumArray(nums)

print(obj.sumRange(0, 2))  # Output: 9 (sum of elements from index 0 to 2)
obj.update(1, 2)
print(obj.sumRange(0, 2))  # Output: 8 (sum of elements from index 0 to 2 after the update)

```
</TabItem>

### Walkthrough
* In the NumArray constructor init, we initialize the segment tree by:
    * Storing the length of the input nums array in self.n
    * Creating an empty tree array of size 2*self.n to store nodes
    * Calling buildSegmentTree() to populate the tree array
* buildSegmentTree() builds the segment tree bottom-up:
    * Leaf nodes at indices self.n to 2*self.n-1 are set to the nums array values
    * Internal nodes are set to the sum of their left and right children
    * This sums values from leaves up through parents iteratively
* update(index, val) updates a value in the original nums array:
    * Index is offset by self.n to get corresponding leaf index
    * Diff between new and old value is calculated
    * Tree value at leaf index updated to new val
    * Diff is propagated up through parents to maintain sums
* sumRange(left, right) calculates range sum:
    * left and right are offset by self.n to get leaf indices
    * Tree is traversed from leaves to root, summing values
    * When reaching a node fully within range, its value is added
    * When reaching a node partially in range, recurse on children
    * Returns final sum for range
* Example usage:
    * Build tree containing leaves [1, 3, 5] and internal sums
    * sumRange(0, 2) sums leaves at indices 3 and 5, returning 9
    * update(1, 2) updates leaf 4 to 2, fixing parent sums
    * sumRange(0, 2) now returns updated sum 8

## Dynamic Segment Tree

In this section, we'll explore a dynamic Segment Tree approach to solve a LeetCode problem. We'll provide a problem statement, a dynamic Segment Tree-based solution, and a code example in Python.

### Example: [0699. Falling Squares](https://leetcode.com/problems/falling-squares/description/)

> Problem Statement
> You are given a 2D array positions where each positions[i] = [left_i, side_i] represents the i-th square with side length side_i that is dropped vertically from a height of left_i. You are tasked with finding the maximum height after each square is stacked on top of the previous squares. It's guaranteed that the squares are dropped in an ordered way from left to right.

Dynamic Segment Tree Approach
To solve this problem efficiently, we can use a dynamic Segment Tree. In this approach, we maintain a Segment Tree where each node represents a range of positions on the x-axis. We will update this tree as we drop squares and calculate the height after each drop.


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@shay2407"/>

```python
class TreeNode:
    def __init__(self, left, right, height):
        self.left = left
        self.right = right
        self.height = height
        self.left_child = None
        self.right_child = None

class DynamicSegmentTree:
    def __init__(self, left, right):
        self.root = TreeNode(left, right, 0)

    def insert(self, node, left, right, height):
        if left >= node.right or right <= node.left:
            return node.height

        if left <= node.left and right >= node.right:
            node.height = height
            node.left_child = None
            node.right_child = None
        else:
            mid = (node.left + node.right) // 2
            if left < mid:
                if not node.left_child:
                    node.left_child = TreeNode(node.left, mid, node.height)
                node.height = max(node.height, self.insert(node.left_child, left, min(mid, right), height))
            if right > mid:
                if not node.right_child:
                    node.right_child = TreeNode(mid, node.right, node.height)
                node.height = max(node.height, self.insert(node.right_child, max(mid, left), right, height))

        return node.height

def fallingSquares(positions):
    results = []  # Initialize a list to store the results
    root = DynamicSegmentTree(0, 10**8)  # Initialize the Segment Tree
    curr_height = 0  # Initialize the current height

    for left, side in positions:
        right = left + side  # Calculate the right position of the square
        height = root.insert(root.root, left, right, curr_height + side)  # Insert and update the Segment Tree
        curr_height = max(curr_height, height)  # Update the current height
        results.append(curr_height)  # Append the current height to the results

    return results  # Return the list of maximum heights after each square drop
```
</TabItem>

### Walkthrough
* The TreeNode class represents a node in the segment tree. It stores the range [left, right] covered by the node, its height, and pointers to any child nodes.

* The DynamicSegmentTree class contains:
    * init method to initialize the root node covering the entire range.
    * insert method to insert a new range into the tree:
    * It traverses the tree to find the appropriate node where the new range should be inserted.
    * If the range is completely outside the node, it returns the node's height.
    * If the range completely covers the node, the node's height is updated and children set to None.
    * Otherwise the range spans the left and/or right children, so those subtrees are recursively inserted into.
    * The node's height is updated to the maximum height of its children.
* fallingSquares method to handle square drops:
    * Initialize empty result list and segment tree root.
    * Loop through each square position and size.
    * Calculate right boundary of square.
    * Insert into segment tree and get updated height.
    * Update current max height.
    * Append current max height to result list.
  * Return list of max heights.

So the segment tree is built dynamically as new square ranges are inserted. The height values percolate up the tree, allowing fallingSquares to efficiently query the maximum height after each drop.

## Lazy Propagation Segment Tree

In this section, we'll explore a Lazy Propagation Segment Tree approach to solve a LeetCode problem. We'll provide a problem statement, a Lazy Propagation Segment Tree-based solution, and a code example in Python.

### Example: [0699. Range Module](https://leetcode.com/problems/range-module/)

> Problem Statement
> A Range Module is a module that tracks ranges of numbers. Your task is to design and implement a data structure to track the ranges represented as half-open intervals. A half-open interval [left, right) denotes all the real numbers x where left <= x < right.

Implement the RangeModule class

Lazy Propagation Segment Tree Approach
To efficiently implement the RangeModule, we can use a Lazy Propagation Segment Tree. In this approach, we represent the ranges with nodes in a Segment Tree. We maintain lazy propagation information to efficiently update and query ranges.


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@shay2407"/>

```python
class SegmentTreeNode:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.left = None
        self.right = None
        self.lazy = False

class LazyPropagationSegmentTree:
    def __init__(self, start, end):
        self.root = SegmentTreeNode(start, end)

    def update(self, node, left, right, lazy):
        if left <= node.start and right >= node.end:
            node.lazy = lazy
        elif right > node.start and left < node.end:
            self.propagate(node)
            self.update(node.left, left, right, lazy)
            self.update(node.right, left, right, lazy)

    def query(self, node, left, right):
        if left <= node.start and right >= node.end:
            return node.lazy
        if right > node.start and left < node.end:
            self.propagate(node)
            return self.query(node.left, left, right) or self.query(node.right, left, right)
        return False

    def propagate(self, node):
        if node.start + 1 < node.end:
            if not node.left:
                mid = (node.start + node.end) // 2
                node.left = SegmentTreeNode(node.start, mid)
                node.right = SegmentTreeNode(mid, node.end)
            node.left.lazy = node.left.lazy or node.lazy
            node.right.lazy = node.right.lazy or node.lazy
            node.lazy = False

class RangeModule:

    def __init__(self):
        self.tree = LazyPropagationSegmentTree(0, 10**9)

    def addRange(self, left: int, right: int) -> None:
        self.tree.update(self.tree.root, left, right, True)

    def queryRange(self, left: int, right: int) -> bool:
        return self.tree.query(self.tree.root, left, right)

    def removeRange(self, left: int, right: int) -> None:
        self.tree.update(self.tree.root, left, right, False)
```
</TabItem>

### Walkthrough
SegmentTreeNode class represents a node in the tree. It stores start and end indices of range, left and right child pointers, and a lazy flag.

* LazyPropagationSegmentTree contains:

    * init creates root node covering entire range.

* update handles range updates:

    * If range fully covers node, set node's lazy flag.
    * Else if range partially covers, propagate and recur on children.
* query checks if range query is satisfied:

    * If node fully in range, return lazy flag.
    * Else propagate and query children.
    * propagate splits node and propagates laziness down.

* RangeModule provides interface for range additions/queries:

    * Uses LazyPropagationSegmentTree internally.
    * addRange sets lazy flags for a range.
    * queryRange checks if any lazy flag set in range.
    * removeRange unsets lazy flags in range.
* Key points:

    * Lazy propagation avoids unnecessary recursion/propagation.
    * Nodes split on demand when a range query spans them.
    * Laziness is propagated down when nodes split or are accessed.
    * Allows efficient range updates and queries.

export const suggestedProblems = [{"problemName": "307 - Range Sum Query","difficulty": "Medium","leetCodeLink": "https://leetcode.com/problems/range-sum-query-mutable/description/","solutionLink": "../../solutions/0000-0099/range-sum-query-medium"},{"problemName": "315 - Count of Smaller Numbers After Self","difficulty": "Hard","leetCodeLink": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/","solutionLink": "../../solutions/0000-0099/count-of-smaller-numbers-after-self-hard"},{"problemName": "699 - Falling Squares","difficulty": "Hard","leetCodeLink": "https://leetcode.com/problems/falling-squares/description/","solutionLink": "../../solutions/0000-0099/falling-squares-hard"},{"problemName": "715 - Range Module","difficulty": "Hard","leetCodeLink": "https://leetcode.com/problems/range-module/description/","solutionLink": "../../solutions/0000-0099/range-module-hard"}];
