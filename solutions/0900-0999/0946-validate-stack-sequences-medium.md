---
description: 'Author: @wingkwong | https://leetcode.com/problems/validate-stack-sequences/'
---

# 0946 - Validate Stack Sequences (Medium)

## Problem Statement

Given two integer arrays `pushed` and `popped` each with distinct values, return `true` _if this could have been the result of a sequence of push and pop operations on an initially empty stack, or_ `false` _otherwise._

**Example 1:**

```
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

**Example 2:**

```
Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
```

**Constraints:**

* `1 <= pushed.length <= 1000`
* `0 <= pushed[i] <= 1000`
* All the elements of `pushed` are **unique**.
* `popped.length == pushed.length`
* `popped` is a permutation of `pushed`.

## Approach 1: Simulation

We use stack to simulate. For each item in $$pushed$$, we push it to the stack. If the top element of the stack matches the target element in $$popped$$, we pop that and increase the pointer in $$popped$$. At the end, return true if the stack is empty, return false if not.

```cpp
class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> s;
        for (auto i = 0, j = 0; i < pushed.size(); i++) {
            // push each item
            s.push(pushed[i]);
            // greedily pop from the stack
            // increase the pointer in popped
            while (!s.empty() && s.top() == popped[j]) s.pop(), j++;
        }
        // if there is no element in the stack, return true
        // else false
        return s.empty();
    }
};
```
