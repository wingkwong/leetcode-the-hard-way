---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/
---

# 2155 - All Divisions With the Highest Score of a Binary Array (Medium)

## Problem Statement

You are given a **0-indexed** binary array `nums` of length `n`. `nums` can be divided at index `i` (where `0 <= i <= n)` into two arrays (possibly empty) `nums_left` and `nums_right`:

* `numsleft` has all the elements of `nums` between index `0` and `i - 1` **(inclusive)**, while `numsright` has all the elements of nums between index `i` and `n - 1` **(inclusive)**.
* If `i == 0`, `nums_left` is **empty**, while `nums_right` has all the elements of `nums`.
* If `i == n`, `nums_left` has all the elements of nums, while `nums_right` is **empty**.

The **division score** of an index `i` is the **sum** of the number of `0`'s in `nums_left` and the number of `1`'s in `nums_right`.

Return _**all distinct indices** that have the **highest** possible **division score**_. You may return the answer in **any order**.

**Example 1:**

```
Input: nums = [0,0,1,0]
Output: [2,4]
Explanation: Division at index
- 0: numsleft is []. numsright is [0,0,1,0]. The score is 0 + 1 = 1.
- 1: numsleft is [0]. numsright is [0,1,0]. The score is 1 + 1 = 2.
- 2: numsleft is [0,0]. numsright is [1,0]. The score is 2 + 1 = 3.
- 3: numsleft is [0,0,1]. numsright is [0]. The score is 2 + 0 = 2.
- 4: numsleft is [0,0,1,0]. numsright is []. The score is 3 + 0 = 3.
Indices 2 and 4 both have the highest possible division score 3.
Note the answer [4,2] would also be accepted.
```

**Example 2:**

```
Input: nums = [0,0,0]
Output: [3]
Explanation: Division at index
- 0: numsleft is []. numsright is [0,0,0]. The score is 0 + 0 = 0.
- 1: numsleft is [0]. numsright is [0,0]. The score is 1 + 0 = 1.
- 2: numsleft is [0,0]. numsright is [0]. The score is 2 + 0 = 2.
- 3: numsleft is [0,0,0]. numsright is []. The score is 3 + 0 = 3.
Only index 3 has the highest possible division score 3.
```

**Example 3:**

```
Input: nums = [1,1]
Output: [0]
Explanation: Division at index
- 0: numsleft is []. numsright is [1,1]. The score is 0 + 2 = 2.
- 1: numsleft is [1]. numsright is [1]. The score is 0 + 1 = 1.
- 2: numsleft is [1,1]. numsright is []. The score is 0 + 0 = 0.
Only index 0 has the highest possible division score 2.
```

**Constraints:**

* `n == nums.length`
* `1 <= n <= 10^5`
* `nums[i]` is either `0` or `1`.

## Approach 1: Prefix Sum + Suffix Sum

Calculate the prefix sum and suffix sum first. Then construct the score (`left[i] + right[i]`) at each index. Find the maximum value and push all indices with such value into the final array. 

```cpp
class Solution {
public:
    vector<int> maxScoreIndices(vector<int>& nums) {
        int n = nums.size();
        vector<int> left(n + 1), right(n + 1), score(n + 1), ans;
        for (int i = 1; i <= n; i++) left[i] = left[i - 1] + (nums[i - 1] == 0);
        for (int i = n; i > 0; i--) right[i - 1] = right[i] + (nums[i - 1] == 1);
        for (int i = 0; i <= n; i++) score[i] = left[i] + right[i];
        int mx = *max_element(score.begin(), score.end());
        for (int i = 0; i <= n; i++) if (score[i] == mx) ans.push_back(i);
        return ans;
    }
};
```

## Approach 2: Prefix Sum

We don't actually need to calculate suffix sum. Let $$left[i + 1]$$ be $$nums[0] + nums[1] + ... + nums[i]$$. For each index, there are $$i - left[i]$$ zeros in the left and $$left[n] - left[i]$$ ones in the right. Therefore, we can come up with this formula: $$score[i] = i - left[i] + left[n] - left[i]$$.

```cpp
class Solution {
public:
    vector<int> maxScoreIndices(vector<int>& nums) {
        int n = nums.size(), mx = 0;
        vector<int> left(n + 1), ans;
        for (int i = 0; i < n; i++) left[i + 1] = left[i] + nums[i];
        for (int i = 0; i <= n; i++) {
            int score = i - left[i] + left[n] - left[i];
            if (score == mx) {
                ans.push_back(i);
            } else if (score > mx) {
                mx = score;
                ans.clear();
                ans.push_back(i);
            }
        }
        return ans;
    }
};
```

## Approach 3: Counting ones and zeros

If we look at the last index, we have `accumulate(nums.begin(), nums.end(), 0)` ones and 0 zeros at the beginning. If we move from the right to the left, we can update `zero` and `one` on the fly.

```cpp
class Solution {
public:
    vector<int> maxScoreIndices(vector<int>& nums) {
        int n = nums.size(), mx = 0;
        int one = accumulate(nums.begin(), nums.end(), 0), zero = 0;
        vector<int> ans;
        for (int i = 0; i <= n; i++) {
            int score = zero + one;
            if (score == mx) {
                ans.push_back(i);
            } else if (score > mx) {
                mx = score;
                ans.clear();
                ans.push_back(i);
            }
            if (i < n) {
                one -= nums[i] == 1;
                zero += nums[i] == 0;
            }
        }
        return ans;
    }
};
```

## Approach 4: Counting ones

We can just use one variable instead of two shown in Approach 3.

```cpp
class Solution {
public:
    vector<int> maxScoreIndices(vector<int>& nums) {
        int n = nums.size();
        int one = accumulate(nums.begin(), nums.end(), 0), mx = one;
        vector<int> ans;
        ans.push_back(0);
        for (int i = 0; i < n; i++) {
            one += (nums[i] == 0) - nums[i];
            if (one == mx) {
                ans.push_back(i + 1);
            } else if (one > mx) {
                mx = one;
                ans.clear();
                ans.push_back(i + 1);
            }
        }
        return ans;
    }
};
```
