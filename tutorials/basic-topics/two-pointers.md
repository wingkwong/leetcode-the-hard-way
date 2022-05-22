---
title: 'Two Pointers'
description: 'Author: @heiheihang'
hide_table_of_contents: true
---

> This tutorial is written by @heiheihang

For some simple iteration problems, we may be able to get away with a simple one-pass iteration. In some special problems, we have to use the technique **Two Pointers** to strategically move around in our input. Let's take a look at this problem ([LeetCode Link](https://leetcode.com/problems/squares-of-a-sorted-array/))

> Given an integer array `nums` sorted in **non-decreasing** order, return _an array of **the squares of each number** sorted in non-decreasing order_.

Let's look at this example

```python
nums = [-4,-1,0,3,10] #input
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

```python
def sortedSquares(self, nums: List[int]) -> List[int]:
        
        #initialize two pointers
        left_pointer = 0
        right_pointer = len(nums) - 1
        
        #initialize result
        res = []
        
        #while left_pointer does not meet right_pointer
        while(left_pointer <= right_pointer):
            
            #if the square of left_pointer and right_pointer 
            if(abs(nums[left_pointer]) > abs(nums[right_pointer])):
                
                res.append(nums[left_pointer] ** 2)
                
                #we move the left to the right
                left_pointer += 1
            else:
                res.append(nums[right_pointer] ** 2)
                
                #we move the right pointer to the left
                right_pointer -= 1
        
        #we need to reverse the result list
        res.reverse()
        return res
```

Unfortunately, there is no fixed way to perform two pointers. However, generally, we have a pointer at the start of the list and another pointer at the end of the list. We have to carefully analyze the question and choose the most appropriate approach to operate the two pointers.

### Suggested Problems

* [1768 - Merge Strings Alternately (Easy)](../../solutions/1700-1799/merge-strings-alternately-easy) [(LeetCode Link)](https://leetcode.com/problems/merge-strings-alternately/)
* [2108 - Find First Palindromic String in the Array (Easy)](../../solutions/2100-2199/find-first-palindromic-string-in-the-array-easy) ([LeetCode Link](https://leetcode.com/problems/merge-strings-alternately/))
* [0283 - Move Zeroes (Easy)](../../solutions/0200-0299/move-zeroes-easy) [(LeetCode Link)](https://leetcode.com/problems/move-zeroes/)
