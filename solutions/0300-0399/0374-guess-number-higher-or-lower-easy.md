---
description: >-
  Author: @wingkwong, @radojicic23 |
  https://leetcode.com/problems/guess-number-higher-or-lower/
---

# 0374 - Guess Number Higher or Lower (Easy)

## Problem Link

https://leetcode.com/problems/guess-number-higher-or-lower/

## Problem Statement

We are playing the Guess Game. The game is as follows:

I pick a number from `1` to `n`. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API `int guess(int num)`, which returns three possible results:

* `-1`: Your guess is higher than the number I picked (i.e. `num > pick`).
* `1`: Your guess is lower than the number I picked (i.e. `num < pick`).
* `0`: your guess is equal to the number I picked (i.e. `num == pick`).

Return _the number that I picked_.

**Example 1:**

```
Input: n = 10, pick = 6
Output: 6
```

**Example 2:**

```
Input: n = 1, pick = 1
Output: 1
```

**Example 3:**

```
Input: n = 2, pick = 1
Output: 1
```

**Constraints:**

* `1 <= n <= 2^31 - 1`
* `1 <= pick <= n`

## Approach 1: Binary Search

See [Binary Search](../../tutorials/basic-topics/binary-search) for basic understanding.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	 -1 if num is higher than the picked number
 *	         1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        int l = 1, r = n;
        while (l < r) {
            // middle point
            int m = l + (r - l) / 2;
            // check the result
            int x = guess(m);
            // found the answer
            if (x == 0) return m;
            // exclude m
            else if (x == 1) l = m + 1;
            // include m
            else r = m;
        }
        return l;
    }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    unsafe fn guessNumber(n: i32) -> i32 {
        let mut l = 1;
        let mut r = n;
        while l < r {
            let m = l + (r - l) / 2;
            let x = guess(m);
            if x == 1 {
                l = m + 1;
            } else {
                r = m;
            }
        }
        l
    }
}
```

```rs
impl Solution {
    unsafe fn guessNumber(n: i32) -> i32 {
        let mut l = 1;
        let mut r = n;
        loop {
            let m = l + (r - l) / 2;
            match guess(m) {
                -1 => r = m - 1,
                1 => l = m + 1,
                _ => return m
                
            };
        }
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        left = 1
        right = n
        while left <= right:
            mid = (left + right) // 2
            if guess(mid) == 1:
                left = mid + 1
            elif guess(mid) == -1:
                right = mid
            else:
                return mid
```

</TabItem>
</Tabs>
