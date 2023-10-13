---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/number-of-flowers-in-full-bloom/
tags: [Array, Hash Table, Binary Search, Sorting, Prefix Sum, Ordered Set]
---

# 2251 - Number of Flowers in Full Bloom (Hard)

## Problem Link

https://leetcode.com/problems/number-of-flowers-in-full-bloom/

## Problem Statement

You are given a **0-indexed** 2D integer array `flowers`, where `flowers[i] = [starti, endi]` means the `ith` flower will be in **full bloom** from `starti` to `endi` (**inclusive**). You are also given a **0-indexed** integer array `persons` of size `n`, where `persons[i]` is the time that the `ith` person will arrive to see the flowers.

Return _an integer array_ `answer` _of size_ `n`_, where_ `answer[i]` _is the **number** of flowers that are in full bloom when the_ `ith` _person arrives._

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/02/ex1new.jpg)

```
Input: flowers = [[1,6],[3,7],[9,12],[4,13]], persons = [2,3,7,11]
Output: [1,2,2,2]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/02/ex2new.jpg)

```
Input: flowers = [[1,10],[3,3]], persons = [3,3,2]
Output: [2,2,1]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
```

**Constraints:**

* `1 <= flowers.length <= 5 * 10^4`
* `flowers[i].length == 2`
* `1 <= starti <= endi <= 10^9`
* `1 <= persons.length <= 5 * 10^4`
* `1 <= persons[i] <= 10^9`

## Approach 1: Line Sweep

We can put $flowers$ and $people$ on the number line and apply standard line sweep. Add the running sum to the answer if $idx$ is not $-1$ indicating that is a person. However, this solution would be slow and can be further optimized with Binary Search.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> fullBloomFlowers(vector<vector<int>>& flowers, vector<int>& people) {
        int n = people.size();
        vector<int> ans(n);
        vector<array<int, 3>> v; // {time, idx, val}
        for (auto& flower : flowers) {
            v.push_back({flower[0], -1, 1}); // in
            v.push_back({flower[1] + 1, -1, -1}); // out
        }
        // include people
        for (int i = 0; i < n; i++) v.push_back({people[i], i, 0});
        // sort in ascending by time -> idx -> val
        sort(v.begin(), v.end());
        int sum = 0;
        for (auto& [time, idx, val] : v) {
            // calculate the prefix sum
            sum += val;
            // idx is not -1, set the answer for people[idx]
            if (idx != -1) ans[idx] = sum;
        }
        return ans;
    }
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">
<SolutionAuthor name="@wingkwong"/>

```kt
class Solution {
    fun fullBloomFlowers(flowers: Array<IntArray>, people: IntArray): IntArray {
        val n = people.size
        val ans = IntArray(n)
        // {time, idx, val}
        val v = mutableListOf<Triple<Int, Int, Int>>()
        for (flower in flowers) {
            v.add(Triple(flower[0], -1, 1))
            v.add(Triple(flower[1] + 1, -1, -1))
        }
        for (i in 0 until n) v.add(Triple(people[i], i, 0))
        v.sortBy { it.first }
        var sum = 0
        for ((time, idx, value) in v) {
            sum += value
            if (idx != -1) {
                ans[idx] = sum
            }
        }
        return ans
    }
}
```

</TabItem>
</Tabs>

