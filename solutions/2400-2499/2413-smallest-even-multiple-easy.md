---
description: 'Author: @kat-kan | https://leetcode.com/problems/smallest-even-multiple/'
---

# 2413 - Smallest Even Multiple (Easy)

## Problem Link

https://leetcode.com/problems/smallest-even-multiple/

## Problem Statement

Given a **positive** integer `n`, return the smallest positive integer that is a multiple of **both** 2 and `n`.

**Example 1:**

```
Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.
```

**Example 2:**

```
Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
```

**Constraints:**

- `1 <= n <= 150`

## Approach 1: If-else statement

The smallest multiple of 2 and a number $n$ will be either

- $n$ if $n$ is even
- $2n$ if $n$ is odd

In solution we need to first check if the number is even and return the correct result.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@kat-kan"/>

```java
class Solution {
    public int smallestEvenMultiple(int n) {
        if (n % 2 == 0) return n;
        return n * 2;
    }
}
```
</TabItem>
</Tabs>

**Time complexity** :

$O(1)$ : It takes a constant time. There is one input variable and the algorithm will take the same time no matter of value.

**Space complexity** :

$O(1)$ : There is one int variable (4 bytes of memory) and algorithm will always take 4 bytes of memory to complete. The space complexity is constant.

## Approach 2: Ternary operator

We can make our solution much shorter using ternary operator:
- `n % 2 ` is a condition
- `n` is returned when condition is true
- `n * 2` is returned when condition is false

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@kat-kan"/>

```java
class Solution {
    public static int smallestEvenMultiple(int n) {
        return n % 2 == 0 ? n : n * 2;
    }
}
```
</TabItem>
</Tabs>

**Time complexity** :

$O(1)$ : It takes a constant time. There is one input variable and the algorithm will take the same time no matter of value.

**Space complexity** :

$O(1)$ : There is one int variable (4 bytes of memory) and algorithm will always take 4 bytes of memory to complete. The space complexity is constant.