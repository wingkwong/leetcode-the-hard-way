---
description: 'Author: @wkw | https://leetcode.com/problems/count-commas-in-range'
tags: ['Math']
---

# 3870 - Count Commas in Range (Easy) 

## Problem Link

https://leetcode.com/problems/count-commas-in-range

## Problem Statement

You are given an integer `n`.

Return the **total** number of commas used when writing all integers from `[1, n]` (inclusive) in **standard** number formatting.

In **standard** formatting:

- A comma is inserted after **every three** digits from the right.
- Numbers with **fewer** than 4 digits contain no commas.

**Example 1:**

**Input:** n = 1002

**Output:** 3

**Explanation:**

The numbers `"1,000"`, `"1,001"`, and `"1,002"` each contain one comma, giving a total of 3.

**Example 2:**

**Input:** n = 998

**Output:** 0

**Explanation:**

All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.

**Constraints:**

- `1 <= n <= 1e5`

## Approach 1: Math

Since $n <= 100,000$, every number in the range contains at most one comma.

- Numbers from $1$ through $999$ contain no commas.
- Numbers from $1,000$ through $n$ contain exactly one comma.

Therefore, 

- if $n >= 1,000$, the number of integers containing a comma is $n - 1000 + 1 = n - 999$. 
- else, no commas are used. Combining both cases, the answer is $max(n - 999, 0)$.

Complexity Analysis:
- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countCommas(self, n: int) -> int:
        return max(n - 999, 0)
```

</TabItem>
</Tabs>