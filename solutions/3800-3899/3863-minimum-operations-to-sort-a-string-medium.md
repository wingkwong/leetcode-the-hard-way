---
description: 'Author: @wkw | https://leetcode.com/problems/minimum-operations-to-sort-a-string'
tags: ["String"]
rating: 1860
---

# 3863 - Minimum Operations to Sort a String (Medium)

## Problem Link

https://leetcode.com/problems/minimum-operations-to-sort-a-string

## Problem Statement

You are given a string `s` consisting of lowercase English letters.

In one operation, you can select any **substring** of `s` that is **not** the entire string and **sort** it in **non-descending alphabetical** order.

Return the **minimum** number of operations required to make `s` sorted in **non-descending** order. If it is not possible, return -1.

**Example 1:**

**Input:** s = "dog"

**Output:** 1

**Explanation:**

- Sort substring `"og"` to `"go"`.
- Now, `s = "dgo"`, which is sorted in ascending order. Thus, the answer is 1.

**Example 2:**

**Input:** s = "card"

**Output:** 2

**Explanation:**

- Sort substring `"car"` to `"acr"`, so `s = "acrd"`.
- Sort substring `"rd"` to `"dr"`, making `s = "acdr"`, which is sorted in ascending order. Thus, the answer is 2.

**Example 3:**

**Input:** s = "gf"

**Output:** -1

**Explanation:**

- It is impossible to sort `s` under the given constraints. Thus, the answer is -1.

**Constraints:**

- `1 <= s.length <= 1e5`
- `s` consists of only lowercase English letters.

## Approach 1: Greedy

Let $mi$ and $mx$ be the smallest and largest characters in $s$, and let $n$ be its length. The answer is always one of $0, 1, 2, 3, -1$.

- **Already sorted:** Return $0$, since no operation is needed.

- **Length 2 and unsorted:** Return $-1$. Every proper non-empty substring has length $1$, so sorting it cannot change the string.

- **$s[0] == mi$ or $s[-1] == mx$:** Return $1$. If the first character is already the minimum, sort the remaining suffix. If the last character is already the maximum, sort the remaining prefix. Either operation makes the entire string sorted.

- **An interior character equals $mi$ or $mx$:** Return $2$. If an interior character equals $mi$, sort the first $n - 1$ characters to move it to the front, then sort the last $n - 1$ characters. Otherwise, an interior character equals $mx$. Sort the last $n - 1$ characters to move it to the back, then sort the first $n - 1$ characters. One operation is insufficient because neither endpoint is correct, and every proper substring leaves at least one endpoint unchanged.

- **Otherwise:** Return $3$. The unique minimum is at the end, and the unique maximum is at the front. The first operation cannot put either endpoint into its correct position, since doing so would require sorting the entire string. Thus, two operations are insufficient. Three operations suffice: sort the first $n - 1$ characters, then the last $n - 1$ characters, then the first $n - 1$ characters again. The first two operations move the maximum to the end; the third sorts everything before it.

**Complexity:** $O(n)$ time and $O(1)$ auxiliary space.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minOperations(self, s: str) -> int:
        n = len(s)
        if all(s[i] <= s[i + 1] for i in range(n - 1)): return 0
        if n == 2: return -1
        mi, mx = min(s), max(s)
        if s[0] == mi or s[-1] == mx: return 1
        for i in range(1, n - 1):
            if s[i] == mi or s[i] == mx:
                return 2
        return 3
```

</TabItem>
</Tabs>