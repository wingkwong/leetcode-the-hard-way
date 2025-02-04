---
description: >-
  Author: @vigneshshiv | https://leetcode.com/problems/can-place-flowers/
---

# 0605 - Can Place Flowers (Easy)

## Problem Link

https://leetcode.com/problems/can-place-flowers/

## Problem Statement

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` _if `n` new flowers can be planted in the `flowerbed` without violating the no-adjacent-flowers rule and `false` otherwise_.

**Example 1:**

```
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
```

**Example 2:**

```
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
```

**Constraints:**

- `1 <= flowerbed.length <= 2 * 10^4`
- `flowerbed[i]` is `0` or `1`.
- There are no two adjacent flowers in `flowerbed`.
- `0 <= n <= flowerbed.length`

## Approach 1: STL

Simplest approach to check is to iterate over the elements and check the prev[i - 1] and next[i + 1] elements to statisfy the constraint.

If given `n` is 0 return `true`, or if `n` is higher than the no. of plots available to plant in an array adjacently then return `false`.

Time Complexity: $O(n)$, where $n$ - # of elements in the array

Space Complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        // Case 1. No flowers to plant, so return true
        if (n == 0) return true;
        // Case 2. If No. of flowers to plant adajacently is higher than the half flowerbed array
        int range = (flowerbed.length / 2) + ((flowerbed.length & 1) == 0 ? 0 : 1);
        if (n > range) return false;
        // Case 3. Iterate to check prev[i - 1] and next[i + 1] elements to satisfy the constraint
        for (int i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
                flowerbed[i] = 1;
                n -= 1;
                if (n == 0) return true;
            }
        }
        return false;
    }
}
```

</TabItem>
</Tabs>
