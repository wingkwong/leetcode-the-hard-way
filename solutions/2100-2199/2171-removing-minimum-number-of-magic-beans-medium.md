---
description: >-
  Author: @wkw | https://leetcode.com/problems/removing-minimum-number-of-magic-beans/
---

# 2171 - Removing Minimum Number of Magic Beans (Medium)

## Problem Link

https://leetcode.com/problems/removing-minimum-number-of-magic-beans/

## Problem Statement

You are given an array of **positive** integers `beans`, where each integer represents the number of magic beans found in a particular magic bag.

**Remove** any number of beans (**possibly none**) from each bag such that the number of beans in each remaining **non-empty** bag (still containing **at least one** bean) is **equal**. Once a bean has been removed from a bag, you are **not** allowed to return it to any of the bags.

Return _the **minimum** number of magic beans that you have to remove_.

**Example 1:**

```
Input: beans = [4,1,6,5]
Output: 4
Explanation:
- We remove 1 bean from the bag with only 1 bean.
  This results in the remaining bags: [4,0,6,5]
- Then we remove 2 beans from the bag with 6 beans.
  This results in the remaining bags: [4,0,4,5]
- Then we remove 1 bean from the bag with 5 beans.
  This results in the remaining bags: [4,0,4,4]
We removed a total of 1 + 2 + 1 = 4 beans to make the remaining non-empty bags have an equal number of beans.
There are no other solutions that remove 4 beans or fewer.
```

**Example 2:**

```
Input: beans = [2,10,3,2]
Output: 7
Explanation:
- We remove 2 beans from one of the bags with 2 beans.
  This results in the remaining bags: [0,10,3,2]
- Then we remove 2 beans from the other bag with 2 beans.
  This results in the remaining bags: [0,10,3,0]
- Then we remove 3 beans from the bag with 3 beans.
  This results in the remaining bags: [0,10,0,0]
We removed a total of 2 + 2 + 3 = 7 beans to make the remaining non-empty bags have an equal number of beans.
There are no other solutions that removes 7 beans or fewer.
```

**Constraints:**

- `1 <= beans.length <= 10^5`
- `1 <= beans[i] <= 10^5`

## Approach 1: Sorting

The number of beans in remaining non-empty bag must be one of the values in the input. We sort the array and iterate each one to see how many beans we need to remove in order to fulfil the case.

For example, if $$a[i]$$ is selected, then all beans before index $$i$$ need to be removed. i.e. $$a[0] + a[1] + ... + a[i - 1]$$. For those beans starting from index $$i$$, we just need to remove some to make them equal to $$a[i]$$, i.e. $$a[i] + a[i + 1] + ... + a[n - 1] - (n * i) * a[i]$$. In other words, that would be $$sum_a - (n - i) * a[i]$$.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    long long minimumRemoval(vector<int>& beans) {
        long long n = beans.size();
        long long ans = 1e18;
        long long sum = accumulate(beans.begin(),beans.end(), 0LL);
        sort(beans.begin(),beans.end());
        for (int i = 0; i < n; ++i) ans = min(ans, sum - (n - i) * beans[i]);
        return ans;
    }
};
```
