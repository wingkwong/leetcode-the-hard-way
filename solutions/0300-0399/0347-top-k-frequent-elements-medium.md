---
description: 'Author: @wkw | https://leetcode.com/problems/top-k-frequent-elements/'
---

# 0347 - Top K Frequent Elements (Medium)

## Problem Link

https://leetcode.com/problems/top-k-frequent-elements/

## Problem Statement

Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_. You may return the answer in **any order**.

**Example 1:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `k` is in the range `[1, the number of unique elements in the array]`.
- It is **guaranteed** that the answer is **unique**.

**Follow up:** Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.

## Approach 1: Priority Queue

When you need to solve something started with "Top K ...", priority queue may possibly be the solution.

We use priority queue to sort the input by their frequency and pop the top element when the queue size is greater than $$k$$. What's left in the queue would be the top $$k$$ frequent elements and we just list them out in a reverse order.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        int n = nums.size();
        if(n == k) return nums;
        map<int, int> m;
        // store the frequency of each number
        for(auto x : nums) m[x]++;
        // define a custom comparator
        auto cmp = [&](int x, int y) {
            return m[x] > m[y];
        };
        // init priority queue with a custom comparator
        priority_queue<int, vector<int>, decltype(cmp)> pq(cmp);
        // iterate each number
        for(auto x : m) {
            // add this number
            pq.push(x.first);
            // out of queue size, pop the one with min frequency out
            if(pq.size() > k) {
                pq.pop();
            }
        }
        // construct ans
        vector<int> ans(k);
        for(int i = k - 1; i >= 0; i--) {
            ans[i] = pq.top();
            pq.pop();
        }
        return ans;
    }
};
```
