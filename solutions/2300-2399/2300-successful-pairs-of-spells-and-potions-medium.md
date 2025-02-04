---
description: 'Author: @wkw | https://leetcode.com/problems/successful-pairs-of-spells-and-potions/'
tags: [Array, Two Pointers, Binary Search, Sorting]
---

# 2300 - Successful Pairs of Spells and Potions (Medium)

## Problem Link

https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

## Problem Statement

You are given two positive integer arrays `spells` and `potions`, of length `n` and `m` respectively, where `spells[i]` represents the strength of the `ith` spell and `potions[j]` represents the strength of the `jth` potion.

You are also given an integer `success`. A spell and potion pair is considered **successful** if the **product** of their strengths is **at least** `success`.

Return _an integer array_`pairs`_of length_`n`_where_`pairs[i]`_is the number of **potions** that will form a successful pair with the_`ith`_spell._

**Example 1:**

```
Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.
```

**Example 2:**

```
Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful.
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful.
Thus, [2,0,2] is returned.
```

**Constraints:**

- `n == spells.length`
- `m == potions.length`
- `1 <= n, m <= 1e5`
- `1 <= spells[i], potions[i] <= 1e5`
- `1 <= success <= 1010`

## Approach 1: Binary Search

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {
        vector<int> ans;
        // sort the potions since we need to binary search on it
        sort(potions.begin(), potions.end());
        for (auto spell : spells) {
            // we need to binary search the first position closest to `minPotion`
            // which is the value to fulfil the requirment
            // spells[i] * minPotion >= success
            // minPotion = ceil(success / spells[i])
            // ceil(success / spells[i]) can be written as (success + spell - 1) // spell
            // since potions after `minPotion` will be valid as well
            // the answer is simply m - index from the binary search
            ans.push_back(
                potions.end() -
                lower_bound(potions.begin(), potions.end(), (spell + success - 1) / spell)
            );
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        m = len(potions)
        res = []
        potions.sort()
        for spell in spells:
            mi = (success + spell - 1) // spell
            res.append(m - bisect_left(potions, mi))
        return res
```

</TabItem>
</Tabs>
