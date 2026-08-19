---
description: 'Author: @wkw | https://leetcode.com/problems/cinema-seat-allocation'
tags: [Array, Hash Table, Bit Manipulation]
---

# 1386 - Cinema Seat Allocation (Medium) 

## Problem Link

https://leetcode.com/problems/cinema-seat-allocation

## Problem Statement

A cinema has `n` rows of seats, numbered from 1 to `n`. Each row has 10 seats, numbered from 1 to 10.

You are given a 2D integer array `reservedSeats`, where `reservedSeats[i] = [row_i, seat_i]` means that seat `seat_i` in row `row_i` is already reserved.

A four-person group must be assigned to four seats in the **same** row. The group can be seated in one of the following seat blocks:

- seats `2, 3, 4, 5`
- seats `4, 5, 6, 7`
- seats `6, 7, 8, 9`

A block can be used only if **none** of its seats are reserved. Each seat can be assigned to **at most**one group.

Return an integer denoting the **maximum** number of four-person groups that can be assigned.

**Example 1:**

```
Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4
Explanation: The figure above shows an optimal allocation of four groups. Seats marked in blue are already reserved, and each set of four contiguous seats marked in orange is assigned to one group.
```

**Example 2:**

```
Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
Output: 2
```

**Example 3:**

```
Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
Output: 4
```

**Constraints:**

- `1 <= n <= 1e9`
- `1 <= reservedSeats.length <= min(10 * n, 1e4)`
- `reservedSeats[i] == [row_i, seat_i]`
- `1 <= row_i <= n`
- `1 <= seat_i <= 10`
- All `reservedSeats[i]` are distinct.

## Approach 1: Bit Manipulation

We use a bitmask for every row containing reservations in seats $2$ through $9$. Seats $1$ and $10$ can be ignored because they do not belong to any valid four-seat block. The masks $0b0000011110$, $0b0001111000$, and $0b0111100000$ represent seats `2 - 5`, `4 - 7`, and `6 - 9`. A block is available when its bitwise AND with the row's reserved-seat mask is zero.

Initially, `res = 2 * n` assumes every row can hold two families using the non-overlapping left and right blocks. For each row with a relevant reservation, we subtract this assumed contribution using `res -= 2`, then add back its actual capacity. If both left and right blocks are available, the row holds two families. Otherwise, if any of the three blocks is available, it holds one family. The time complexity is $O(m)$ and the space complexity is $O(m)$, where m is the number of reserved seats.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maxNumberOfFamilies(self, n: int, reservedSeats: List[List[int]]) -> int:
        d = defaultdict(int)
        for r, s in reservedSeats:
            if 2 <= s <= 9:
                d[r] |= (1 << (s - 1))
        res = 2 * n
        for msk in d.values():
            l = msk & 0b0000011110 == 0
            m = msk & 0b0001111000 == 0
            r = msk & 0b0111100000 == 0
            res -= 2
            if l and r: res += 2
            elif l or r or m: res += 1
        return res
```

</TabItem>
</Tabs>