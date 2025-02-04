---
description: 'Author: @wkw, @jit | https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/'
tags: [Array, Binary Search]
---

# 1482 - Minimum Number of Days to Make m Bouquets (Medium)

## Problem Link

https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/

## Problem Statement

You are given an integer array `bloomDay`, an integer `m` and an integer `k`.

You want to make `m` bouquets. To make a bouquet, you need to use `k` **adjacent flowers** from the garden.

The garden consists of `n` flowers, the `ith` flower will bloom in the `bloomDay[i]` and then can be used in **exactly one** bouquet.

Return _the minimum number of days you need to wait to be able to make_`m`_bouquets from the garden_. If it is impossible to make m bouquets return `-1`.

**Example 1:**

```
Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
Output: 3
Explanation: Let us see what happened in the first three days. x means flower bloomed and _ means flower did not bloom in the garden.
We need 3 bouquets each should contain 1 flower.
After day 1: [x, _, _, _, _]   // we can only make one bouquet.
After day 2: [x, _, _, _, x]   // we can only make two bouquets.
After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.
```

**Example 2:**

```
Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
Output: -1
Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.
```

**Example 3:**

```
Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
Output: 12
Explanation: We need 2 bouquets each should have 3 flowers.
Here is the garden after the 7 and 12 days:
After day 7: [x, x, x, x, _, x, x]
We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
After day 12: [x, x, x, x, x, x, x]
It is obvious that we can make two bouquets in different ways.
```

**Constraints:**

- `bloomDay.length == n`
- `1 <= n <= 10^5`
- `1 <= bloomDay[i] <= 10^9`
- `1 <= m <= 10^6`
- `1 <= k <= n`

## Approach 1: Binary Search

- Time Complexity: $O(n log max(bloomDay))$
- Space Complexity: $O(1)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        if m * k > len(bloomDay): return -1
        l, r = 1, max(bloomDay)
        while l < r:
            mid = (l + r) // 2
            flowers, bouquets = 0, 0
            for x in bloomDay:
                if x > mid:
                    flowers = 0
                else:
                    flowers += 1
                    if flowers == k:
                        bouquets += 1
                        flowers = 0
            if bouquets < m:
                l = mid + 1
            else:
                r = mid
        return l
```

</TabItem>

<TabItem value="ruby" label="Ruby">
<SolutionAuthor name="@jit"/>

```ruby
def min_days(bloom_day, m, k)
  (0..bloom_day.max).bsearch do |d|
    runs = bloom_day.chunk { |day| 1 if d >= day }
    runs.sum { |_, r| r.size / k } >= m
  end || -1
end
```

</TabItem>
</Tabs>
