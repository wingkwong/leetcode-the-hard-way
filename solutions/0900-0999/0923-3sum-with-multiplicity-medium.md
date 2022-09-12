---
description: 'Author: @wingkwong | https://leetcode.com/problems/3sum-with-multiplicity/'
---

# 0923 - 3Sum With Multiplicity (Medium)

## Problem Link

https://leetcode.com/problems/3sum-with-multiplicity/

## Problem Statement

Given an integer array `arr`, and an integer `target`, return the number of tuples `i, j, k` such that `i < j < k` and `arr[i] + arr[j] + arr[k] == target`.

As the answer can be very large, return it **modulo** `10^9 + 7`.

**Example 1:**

```
Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
```

**Example 2:**

```
Input: arr = [1,1,2,2,2,2], target = 5
Output: 12
Explanation: 
arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
```

**Constraints:**

* `3 <= arr.length <= 3000`
* `0 <= arr[i] <= 100`
* `0 <= target <= 300`

## Approach 1: Hash Map + Binomial

We can use hash map to store the frequency for each number. As we know $$x + y + z == target$$, we can break it down into 4 cases, which are

* Case 1: $$i + i + i == target$$
* Case 2: $$i + i + j == target$$
* Case 3: $$i + j + j == target$$
* Case 4: $$i + j + k == target$$

where $$i < j < k$$.

For case 1, how many ways we can choose three different indices with value $$i$$? It is same as choosing $$3$$ elements from $$m[i]$$, which is equivalent to $$m[i] * (m[i] - 1) * (m[i] - 2) / 6$$.

Let's define our nChooseK function here.

```cpp
  template <typename T>
  T binomial(int64_t N, int64_t K) {
    if (K < 0 || N < K) return 0;
    T ret = 1;
    for (T i = 1; i <= K; ++i) {
      ret *= N--;
      ret /= i;
    }
    return ret;
  }
```

For case 2, we need to choose $$2$$ elements from $$m[i]$$ and multiply by $$m[j]$$.

For case 3, we need to choose $$2$$ elements from $$m[j]$$ and multiply by $$m[i]$$.

For case 4, there are $$m[i] * m[j] * m[k]$$ ways.

<SolutionAuthor name="@wingkwong"/>

```cpp
int threeSumMulti(vector<int>& arr, int target) {
    unordered_map<int, long> m;
    long ans = 0;
    int M = 1e9 + 7;
    // count the frequency for each number
    for(int x : arr) m[x]++;
    // iterate i
    for(int i = 0; i <= 100; i++) {
        // case 1: i + i + i == target
        // choose 3 from m[i]
        if(i + i + i == target) ans += binomial<long>(m[i], 3);
        // iterate j 
        // make sure i < j
        for(int j = i + 1; j <= 100; j++) {
            int k = target - i - j;
            // case 2: i + i + j == target
            // choose 2 from m[i] * m[j]
            if(i + i + j == target) ans += binomial<long>(m[i], 2) * m[j];
            // case 3: i + j + j == target
            // choose 2 from m[j] * m[i]
            else if (i + j + j == target) ans += m[i] * binomial<long>(m[j], 2);
            // case 4: i + j + k == target
            // make sure j < k
            // choose 1 from m[i], 1 from [j] and 1 from m[k]
            else if(j < k && i + j + k == target) ans += m[i] * m[j] * m[k];
        }
    }
    return ans % M;
```
