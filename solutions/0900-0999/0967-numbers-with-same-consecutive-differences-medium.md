---
description: 'Author: @wingkwong | https://leetcode.com/problems/numbers-with-same-consecutive-differences/'
tags: [Backtracking, Breadth-First Search]
---

# 0967 - Numbers With Same Consecutive Differences (Medium) 

## Problem Statement

Return all **non-negative** integers of length `n` such that the absolute difference between every two consecutive digits is `k`.

Note that **every** number in the answer **must not** have leading zeros. For example, `01` has one leading zero and is invalid.

You may return the answer in **any order**.

**Example 1:**

```
Input: n = 3, k = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
```

**Example 2:**

```
Input: n = 2, k = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
```

**Constraints:**

- `2 <= n <= 9`
- `0 <= k <= 9`

## Approach 1: BFS

<SolutionAuthor name="@wingkwong"/>

```cpp
// Time Complexity: O(2 ^ n)
// Space Complexity: O(2 ^ n)
class Solution {
public:
    // The idea is to use BFS to try appending 0 - 9 to each number 
    // starting from a single digit 1 - 9 until the number has n digits
    vector<int> numsSameConsecDiff(int n, int k) {
        // push all numbers with single digit to a deque
        deque<int> q{ 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        // do the following logic n - 1 times
        while (--n > 0) {
            // get the queue size
            int sz = q.size();
            // for each item in the current queue,
            // do the following logic
            for (int i = 0; i < sz; i++) {
                // get the first number from the queue
                int p = q.front();
                // pop it
                q.pop_front();
                // we can potentially add 0 to 9 to the current number p
                for (int j = 0; j < 10; j++) {
                    // we use p % 10 to get the last digit of p
                    // then get the difference with j
                    // since (p % 10) - j can be negative and positive
                    // we use abs to cover both case
                  if (abs((p % 10) - j) == k) {
                    // if the difference is equal to k
                    // we can include digit j 
                    // so multiply the current number by 10 and add j
                    q.push_back(p * 10 + j);
                  }
                }
          }
        }
        // return all numbers in deque, return them in vector<int>
        return vector<int>{q.begin(), q.end()};
    }
};
```