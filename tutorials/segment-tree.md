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
        # Constructor to initialize the NumArray object.
        # It takes an integer array `nums` as input.
        self.n = len(nums)  # Store the length of the input array.
        self.nums = nums    # Store the input array in the object.

    def update(self, index, val):
        # Update the value at a specific index in the array.
        # - `index`: The index where the value should be updated.
        # - `val`: The new value to set at the specified index.
        self.nums[index] = val

    def sumRange(self, left, right):
        # Calculate the sum of elements in the array within a specified range.
        # - `left`: The left index of the range.
        # - `right`: The right index of the range.
        ans = 0  # Initialize a variable to store the sum.
        for i in range(left, right + 1):
            ans += self.nums[i]  # Accumulate the sum of elements in the range.
        return ans  # Return the computed sum.
```
</TabItem>

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
In this problem, we start by initializing an empty result list and a Dynamic Segment Tree, which is a modified Segment Tree that can handle updates and queries efficiently.

For each square dropped, we calculate its right position, insert it into the Segment Tree, update the current height, and append the current height to the results list.

The key to this solution is the use of a Dynamic Segment Tree to efficiently update and query for the maximum height. The TreeNode class represents a node in the tree, and the DynamicSegmentTree class handles the insertion and updates.

This dynamic approach allows us to efficiently calculate the maximum height after each square drop and build the result list accordingly.

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
In this problem, we implement a RangeModule class using a Lazy Propagation Segment Tree to efficiently track and manipulate ranges. The LazyPropagationSegmentTree class handles the lazy propagation operations, such as adding, querying, and removing ranges.

SegmentTreeNode represents a node in the Segment Tree with start and end representing the range it covers and lazy to indicate whether the range is marked for addition or removal.

LazyPropagationSegmentTree contains the methods for updating and querying the tree with lazy propagation. It also includes the propagate method to handle lazy updates.

In the RangeModule class, we create an instance of LazyPropagationSegmentTree in the constructor.

addRange updates the tree to add a range.

queryRange queries the tree to check if a range exists.

removeRange updates the tree to remove a range.

This Lazy Propagation Segment Tree approach allows efficient manipulation and querying of ranges for the RangeModule problem.

## Suggested Problems

To practice and enhance your understanding of various Segment Tree concepts, consider solving the following LeetCode problems:

### Basic Segment Tree

1. [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
   - This classic problem involves implementing a Segment Tree to efficiently handle range sum queries and updates.

2. [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
   - This problem requires you to use a Segment Tree to calculate the count of smaller elements to the right of each element in an array.

### Dynamic Segment Tree

3. [699. Falling Squares](https://leetcode.com/problems/falling-squares/)
   - In this problem, you'll explore dynamic Segment Trees to efficiently track maximum heights as squares fall.

4. [732. My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
   - Implement a dynamic Segment Tree to manage overlapping intervals efficiently.

### Lazy Propagation Segment Tree

5. [715. Range Module](https://leetcode.com/problems/range-module/)
   - A problem that involves tracking ranges and applying lazy propagation techniques for adding, querying, and removing intervals.

6. [308. Range Sum Query 2D - Mutable](https://leetcode.com/problems/range-sum-query-2d-mutable/)
   - Extend your knowledge to 2D arrays by implementing a lazy propagation Segment Tree for range sum queries and updates.

7. [327. Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
   - Explore lazy propagation in the context of counting the number of range sums within a specified range.

8. [218. The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
   - Solve a skyline problem using a lazy propagation Segment Tree to efficiently manage building heights.

Feel free to choose problems from these categories to practice and solidify your skills with Segment Trees, including Basic Segment Trees, Dynamic Segment Trees, and Lazy Propagation Segment Trees. Good luck!
