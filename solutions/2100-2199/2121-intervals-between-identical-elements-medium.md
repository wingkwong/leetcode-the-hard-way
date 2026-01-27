---
description: >-
  Author: @wkw | https://leetcode.com/problems/intervals-between-identical-elements/
---

# 2121 - Intervals Between Identical Elements (Medium)

## Problem Link

https://leetcode.com/problems/intervals-between-identical-elements/

## Problem Statement

You are given a **0-indexed** array of `n` integers `arr`.

The **interval** between two elements in `arr` is defined as the **absolute difference** between their indices. More formally, the **interval** between `arr[i]` and `arr[j]` is `|i - j|`.

Return _an array_ `intervals` _of length_ `n` _where_ `intervals[i]` _is **the sum of intervals** between_ `arr[i]` _and each element in_ `arr` _with the same value as_ `arr[i]`_._

**Note:** `|x|` is the absolute value of `x`.

**Example 1:**

```
Input: arr = [2,1,3,1,2,3,3]
Output: [4,2,7,2,4,4,5]
Explanation:
- Index 0: Another 2 is found at index 4. |0 - 4| = 4
- Index 1: Another 1 is found at index 3. |1 - 3| = 2
- Index 2: Two more 3s are found at indices 5 and 6. |2 - 5| + |2 - 6| = 7
- Index 3: Another 1 is found at index 1. |3 - 1| = 2
- Index 4: Another 2 is found at index 0. |4 - 0| = 4
- Index 5: Two more 3s are found at indices 2 and 6. |5 - 2| + |5 - 6| = 4
- Index 6: Two more 3s are found at indices 2 and 5. |6 - 2| + |6 - 5| = 5
```

**Example 2:**

```
Input: arr = [10,5,10,10]
Output: [5,0,3,4]
Explanation:
- Index 0: Two more 10s are found at indices 2 and 3. |0 - 2| + |0 - 3| = 5
- Index 1: There is only one 5 in the array, so its sum of intervals to identical elements is 0.
- Index 2: Two more 10s are found at indices 0 and 3. |2 - 0| + |2 - 3| = 3
- Index 3: Two more 10s are found at indices 0 and 2. |3 - 0| + |3 - 2| = 4
```

**Constraints:**

- `n == arr.length`
- `1 <= n <= 1e5`
- `1 <= arr[i] <= 1e5`

## Approach 1: Prefix Sum

First we need to know the indices for each number. We can easily construct it using `unordered_map<int, vector<int>>`. Then it comes to the math part. Our goal is to calculate the absolute difference for numbers smaller than and greater than or equal to $$k$$ in linear time.

Let's say the list is \[1, 3, 5, 7, 9] and let $$k$$ be $$7$$. The absolute difference for numbers smaller than or equal to $$7$$ is $$(7−1)+(7−3)+(7−5)−(7−7)$$. We can arrange it to $$7∗4−(1−3−5−7)$$ which is same as $$k∗(i+1)−pre[i+1]$$.

Similarly, let $$k$$ be $$3$$ and we want to find out the absolute difference for numbers greater than or equal to $$3$$. $$(3−3)+(3−5)+(3−7)+(3−9)$$. We can arrange it to $$3∗4−(3+5+7+9)$$, which is same as $$(pre[n]−pre[i])−k∗(n−i)$$. Therefore, $$ans[k]$$ would be the sum of the left part and the right part.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<long long> getDistances(vector<int>& arr) {
        unordered_map<int, vector<int>> m;
        vector<long long> ans(arr.size());
        int n = arr.size();
        for (int i = 0; i < n; i++) {
            m[arr[i]].push_back(i);
        }
        for (auto x : m) {
            vector<int> v = x.second;
            int n = v.size();
            vector<long long> pre(n + 1);
            for (int i = 0; i < n; i++) {
                pre[i + 1] = pre[i] + v[i];
            }
            for (int i = 0; i < n; i++) {
                long long k = v[i];
                ans[k] = (k * (i + 1) - pre[i + 1]) +
                            ((pre[n] - pre[i]) - (k * (n - i)));
            }
        }
        return ans;
    }
};
```
