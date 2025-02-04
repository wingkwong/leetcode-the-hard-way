---
description: >-
  Author: @wkw | https://leetcode.com/problems/rank-transform-of-an-array


tags: ['Sorting']
---

# 1331 - Rank Transform of an Array (Easy)

## Problem Link

https://leetcode.com/problems/rank-transform-of-an-array

## Problem Statement

Given an array of integers `arr`, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

- Rank is an integer starting from 1.
- The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
- Rank should be as small as possible.

**Example 1:**

```
Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
```

**Example 2:**

```
Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.
```

**Example 3:**

```
Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]
```

**Constraints:**

- `0 <= arr.length <= 10^5`
- `-10^9 <= arr[i] <= 10^9`

## Approach 1: Sorting with Hash Map

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        vector<int> ans, sorted_arr { arr };
        // hash map
        unordered_map<int, int> m;
        // sort input arr
        sort(sorted_arr.begin(), sorted_arr.end());
        // [40,10,20,30] -> [10,20,30,40]
        // use hash map to map the sorted element with its index
        // use emplace to handle cases like [100,100,100]
        for (auto& x : sorted_arr) m.emplace(x, (int) m.size() + 1);
        // build the final output
        for (auto& x : arr) ans.push_back(m[x]);
        return ans;
    }
};
```

## Approach 2: Sorting without Hash Map

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        int n = (int) arr.size();
        vector<pair<int, int>> v; // {val, index}
        for (int i = 0; i < n; i++) v.push_back({arr[i], i});
        // sort by value
        sort(v.begin(), v.end());
        // init rank
        int rank = 1;
        for (int i = 0; i < n; i++) {
            // increase rank only when the cur val is different than the prev one
            rank += i > 0 && v[i].first != v[i - 1].first;
            // in-place update arr
            arr[v[i].second] = rank;
        }
        return arr;
    }
};
```
