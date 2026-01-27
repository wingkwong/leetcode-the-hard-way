---
description: 'Author: @jit | https://leetcode.com/problems/knight-dialer/'
tags: [Dynamic Programming]
---

# 0935 - Knight Dialer (Medium)

## Problem Link

https://leetcode.com/problems/knight-dialer/

## Problem Statement

The chess knight has a **unique movement**, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an **L**). The possible movements of chess knight are shown in this diagaram:

A chess knight can move as indicated in the chess diagram below:

We have a chess knight and a phone pad as shown below, the knight **can only stand on a numeric cell** (i.e. blue cell).

Given an integer `n`, return how many distinct phone numbers of length `n` we can dial.

You are allowed to place the knight **on any numeric cell** initially and then you should perform `n - 1` jumps to dial a number of length `n`. All jumps should be **valid** knight jumps.

As the answer may be very large, **return the answer modulo** `1e9 + 7`.

**Example 1:**

```
Input: n = 1
Output: 10
Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.
```

**Example 2:**

```
Input: n = 2
Output: 20
Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]
```

**Example 3:**

```
Input: n = 3131
Output: 136006598
Explanation: Please take care of the mod.
```

**Constraints:**

- `1 <= n <= 5000`

## Approach 1: TBC

<Tabs>
<TabItem value="ruby" label="Ruby">
<SolutionAuthor name="@jit"/>

```ruby
require 'matrix'

# Using recurrence relations! We can use a 10x10 matrix
# to encode all 10 distinct letters, or decompose into
# 5 distinct states:

# 1) [1, 3, 7, 9] => transitions to state (2) and (3)
# 2) [2, 8]       => transitions to state (1) two ways
# 3) [4, 6]       => transitions to state (1) two ways and state (4)
# 4) [0]          => transitions to state (3) two ways
# 5) [5]          => cannot transition
def knight_dialer(n)
  init = Matrix[
    [4, 0, 0, 0, 0],
    [0, 2, 0, 0, 0],
    [0, 0, 2, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
  ]

  trans = Matrix[
    [0, 1, 1, 0, 0],
    [2, 0, 0, 0, 0],
    [2, 0, 0, 1, 0],
    [0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  (init * trans ** (n - 1)).sum % 1_000_000_007
end
```

</TabItem>
</Tabs>
