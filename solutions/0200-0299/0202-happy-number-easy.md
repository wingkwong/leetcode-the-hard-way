---
description: 'Author: @vigneshshiv, @wingkwong | https://leetcode.com/problems/happy-number/'
tags: [Array, Math, Two Pointers]
---

# 0202 - Happy Number (Easy)

## Problem Link

https://leetcode.com/problems/happy-number/

## Problem Statement

Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

* Starting with any positive integer, replace the number by the sum of the squares of its digits.
* Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
* Those numbers for which this process **ends in 1** are happy.

Return `true` _if_ `n` _is a happy number, and_ `false` _if not_.

**Example 1:**

```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

**Example 2:**

```
Input: n = 2
Output: false
```

**Constraints:**

* `1 <= n <= 2^31 - 1`

## Approach 1: Floyd's Tortoise and Hare

As stated clearly in the problem, **loops endlessly in a cycle**, So we can solve this by using Floyd's Tortoise and Hare algorithm.

It's a simple cycle detection algorithm, where one pointer traverses twice as fast as another, once two pointers meet, we can trace back to where the cycle begins.

Time Complexity: $O(m)$, where $m$ - # of cycles

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isHappy(int n) {
        int slow = n, fast = n;
        do {
            slow = digitSquareSum(slow);
            fast = digitSquareSum(digitSquareSum(fast));
        } while (slow != fast);
        return slow == 1 ? true : false;
    }
    
    public int digitSquareSum(int num) {
        int ans = 0;
        while (num > 0) {
            int digit = num % 10;
            ans += digit * digit;
            num /= 10;
        }
        return ans;
    }
}
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    fn nxt(mut n: i32) -> i32 {
        let mut res = 0;
        while n > 0 {
            let d = n % 10;
            res += d * d;
            n /= 10;
        }
        res
    }
    
    pub fn is_happy(n: i32) -> bool {
        let mut slow = n;
        let mut fast = Solution::nxt(n);
        while fast != 1 && slow != fast {
            slow = Solution::nxt(slow);
            fast = Solution::nxt(Solution::nxt(fast));
        }
        return fast == 1;
    }
}
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def next_num(self, n: int) -> int:
        # initialize num as 0
        num = 0
        # while our number exists: loop
        while n:
            # add ones digit squared to num
            num += (n % 10) ** 2
            # integer division to remove ones digit.
            n = n // 10
        return num

    def isHappy(self, n: int) -> bool:
        ## Cycle Detection - initialize slow/fast pointers
        slow, fast = n, self.next_num(n)
        ## Since we will always reach a cycle at some point
        ## loop until fast reaches slow
        while slow != fast:
            # move fast pointer 2 numbers, slow 1.
            fast = self.next_num(self.next_num(fast))
            slow = self.next_num(slow)
        # If the cycle location ends on 1, we are happy, else False.
        return fast == 1
```

</TabItem>
</Tabs>
