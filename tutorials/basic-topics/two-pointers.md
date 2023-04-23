---
title: 'Two Pointers'
description: 'Two Pointers is an effective technique used for searching pairs in a sorted array.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - two pointers
  - algorithm
---

<TutorialAuthors names="@heiheihang, @wingkwong"/>

## Overview

The two pointers technique is a technique used to iterate through a data set, typically an array or a list, in a controlled way. It involves using two pointers, one pointing to the beginning of the data set and the other pointing to the end, and moving them towards each other based on specific conditions. This technique is commonly used to solve problems that involve searching for a specific condition or pattern within a data set, or that require a comparison between different elements in the data set.

The two pointers technique is mainly used for solving problems that have a linear time complexity, it can lead to substantial performance improvements over a brute-force approach. Some common examples of problems that can be solved using this technique include:

- Finding the maximum / minimum value in a set of data.
- Counting the number of occurrences of a specific element.
- Finding the longest substring without repeating characters.
- Finding the maximum sum of a sub-array of size $k$.

Overall, the two pointers technique is a useful approach for solving specific types of problems that involve iterating through a data set in a controlled way, such as in pattern matching, data analysis, and statistics. It allows for an efficient and controlled iteration of a data set, which can lead to improved performance and more accurate results.

# Example 1: [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

> Given an integer array `nums` sorted in **non-decreasing** order, return _an array of **the squares of each number** sorted in non-decreasing order_.

Let's look at this example

```python
# input
nums = [-4,-1,0,3,10]
```

From this input, we can generate the following square numbers:

```python
squares = [16, 1, 0, 9, 100]
```

We want to return the following sorted squares:

```python
answer = [0, 1, 9, 16, 100]
```

You may be thinking, why can't we generate the squares and then sort the result? This approach would take $$O(NlogN)$$, and we want to do better than this.

We can sequentially add the next biggest elements with the two pointer approach. We first set a `left_pointer` at the left of the list and a `right_pointer` at the right of the list. The `left_pointer` should be pointing at the **largest** negative number (most negative), and the `right_pointer` should be pointing at the **largest** positive number. We can move the pointers accordingly to find the next largest squared number.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```py
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        # initialize two pointers
        left_pointer, right_pointer = 0, len(nums) - 1
        # initialize result
        res = []
        # while left_pointer does not meet right_pointer
        while(left_pointer <= right_pointer):
            # if the square of left_pointer and right_pointer 
            if(abs(nums[left_pointer]) > abs(nums[right_pointer])):
                res.append(nums[left_pointer] ** 2)
                # we move the left to the right
                left_pointer += 1
            else:
                res.append(nums[right_pointer] ** 2)
                # we move the right pointer to the left
                right_pointer -= 1
        # we need to reverse the result list
        res.reverse()
        return res
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int left_pointer = 0;
        int right_pointer = nums.size() - 1;
        vector<int> res;
        while(left_pointer <= right_pointer) {
            if(abs(nums[left_pointer]) > abs(nums[right_pointer])) {
                res.push_back(nums[left_pointer] * nums[left_pointer]);
                left_pointer += 1;
            }
            else {
                res.push_back(nums[right_pointer] * nums[right_pointer]);
                right_pointer -= 1;
            }
        }
        reverse(res.begin(), res.end());
        return res;
    }
};

```
</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    public List<Integer> sortedSquares(int[] nums) {
        int left_pointer = 0;
        int right_pointer = nums.length - 1;
        List<Integer> res = new ArrayList<>();
        while(left_pointer <= right_pointer) {
            if(Math.abs(nums[left_pointer]) > Math.abs(nums[right_pointer])) {
                res.add(nums[left_pointer] * nums[left_pointer]);
                left_pointer += 1;
            }
            else {
                res.add(nums[right_pointer] * nums[right_pointer]);
                right_pointer -= 1;
            }
        }
        Collections.reverse(res);
        return res;
    }
}

```
</TabItem>
</Tabs>

Unfortunately, there is no fixed way to perform two pointers. However, generally, we have a pointer at the start of the list and another pointer at the end of the list. We have to carefully analyze the question and choose the most appropriate approach to operate the two pointers.

export const suggestedProblems = [
  {
    "problemName": "1768 - Merge Strings Alternately",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/merge-strings-alternately/",
    "solutionLink": "../../solutions/1700-1799/merge-strings-alternately-easy"
  },
  {
    "problemName": "2108 - Find First Palindromic String in the Array",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",
    "solutionLink": "../../solutions/2100-2199/find-first-palindromic-string-in-the-array-easy"
  },
  {
    "problemName": "0283 - Move Zeroes",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/move-zeroes/",
    "solutionLink": "../../solutions/0200-0299/move-zeroes-easy"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />