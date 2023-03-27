---
description: 'Author: @wingkwong | https://leetcode.com/problems/fruit-into-baskets/'
tags: [Array, Hash Table, Sliding Window]
---

# 0904 - Fruit Into Baskets (Medium) 

## Problem Link

https://leetcode.com/problems/fruit-into-baskets/

## Problem Statement

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array `fruits` where `fruits[i]` is the **type** of fruit the `ith` tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

- You only have **two** baskets, and each basket can only hold a **single type** of fruit. There is no limit on the amount of fruit each basket can hold.
- Starting from any tree of your choice, you must pick **exactly one fruit** from **every** tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array `fruits`, return *the **maximum** number of fruits you can pick*.

**Example 1:**

```
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
```

**Example 2:**

```
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
```

**Example 3:**

```
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
```

**Constraints:**

- `1 <= fruits.length <= 10^5`
- `0 <= fruits[i] < fruits.length`

## Approach 1: Sliding Window

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        int n = fruits.size(), ans = 0;
        // count the frequency of fruits
        unordered_map<int, int> m;
        // two pointers 
        // - l is the pointer to the starting index of the window
        // - r is the pointer to the ending index of the window
        for (int l = 0, r = 0; r < n; r++) {
            // add fruits[r] to a hashmap
            m[fruits[r]]++;
            // if there is more than two types
            if (m.size() > 2) {
                // then we need to substract one from the freq of leftmost element, i.e. fruits[l]
                // if it is 0, then we can erase it
                if (--m[fruits[l]] == 0) m.erase(fruits[l]);
                // shrink the window by moving the `l` to the right
                l += 1;
            }
            // the maximum number of fruits we can pick is simply the window size
            ans = max(ans, r - l + 1);
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        ans = 0
        # count the frequency of fruits
        cnt = Counter()
        # two pointers 
        # - l is the pointer to the starting index of the window
        # - r is the pointer to the ending index of the window
        l = 0
        for r in range(len(fruits)):
            # add fruits[r] to a counter
            cnt[fruits[r]] += 1
            # if there is more than two types
            if len(cnt) > 2:
                # then we need to substract one from the freq of leftmost element, i.e. fruits[l]
                cnt[fruits[l]] -= 1
                # if it is 0, then we can erase it
                if cnt[fruits[l]] == 0: cnt.pop(fruits[l])
                # shrink the window by moving the `l` to the right
                l += 1
            # the maximum number of fruits we can pick is simply the window size
            ans = max(ans, r - l + 1)
        return ans
```

</TabItem>

</Tabs>