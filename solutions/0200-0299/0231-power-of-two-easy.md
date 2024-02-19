---
description: 'Author: @wingkwong, @vigneshshiv, @radojicic23, @jit | https://leetcode.com/problems/power-of-two/'
tags: [Math, Bit Manipulation, Recursion]
---

# 0231 - Power of Two (Easy)

## Problem Link

https://leetcode.com/problems/power-of-two/

## Problem Statement

Given an integer `n`, return _`true` if it is a power of two. Otherwise, return `false`_.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

**Example 1:**

```
Input: n = 1
Output: true
Explanation: 2^0 = 1
```

**Example 2:**

```
Input: n = 16
Output: true
Explanation: 2^4 = 16
```

**Example 3:**

```
Input: n = 3
Output: false
```

**Constraints:**

* `-2^31 <= n <= 2^31 - 1`

**Follow up:** Could you solve it without loops/recursion?

## Approach 1: Bit Manipulation

It's obvious to see that the answer is `false` if $n <= 0$. If $n$ is positive, a power of two would only have $1$ bit set. We can use $n$ &amp; $(n-1)$ which is a common trick to remove the rightmost set bit. If it's a power of 2, the only set bit would be removed, hence the result would be $0$. Otherwise, even we remove the rightmost set bit, the value wont be $0$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        // 1. check if it is a positive number
        // 2. check the value is 0 after removing the rightmost bit
        return n > 0 && !(n & (n - 1));
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    /**
     * 1. check if it is a positive number
     * 2. check the value is 0 after removing the rightmost bit
     *
     * Samples below
     * 
     *  #1 n = 5
     *     5 = 0101
     *   5-1 = 0100
     *   ans = 0100 (not a valid answer)
     *
     *  #2 n = 8
     *     8 = 1000
     *   n-1 = 0111
     *   ans = 0000 (right answer)
     *
     */
    public boolean isPowerOfTwo(int n) {
        return n > 0 & (n & (n - 1)) == 0;
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
# 1. check if it's a positive number
# 2. check the value is 0 after removing the rightmost bit
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and not (n & (n - 1))
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number} n
 * @return {boolean}
 */

// 1. check if it's a positive number
// 2. check the value is 0 after removing the rightmost bit
var isPowerOfTwo = function(n) {
    return n > 0 && !(n & (n - 1));
};
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

Almost same as the solution in 326. Power of Three and 342. Power of Four.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        // the idea is to use binary search to find x to see if 2 ^ x = n is true or false
        int l = 0, r = (int) log(pow(2, 31)) / log(2);
         while (l < r) {
            // get the middle one
            // for even number of elements, take the lower one
            int m = l + (r - l) / 2;
            // exclude m
            if (pow(2, m) < n) l = m + 1;
            // include m
            else r = m;
        }
        // check if 2 ^ l is n
        // if so, then n is a power of two, otherwise it is not
        return pow(2, l) == n;
    }
};
```

</TabItem>
</Tabs>

## Approach 3: Regex

<Tabs>
<TabItem value="ruby" label="Ruby">
<SolutionAuthor name="@jit"/>

```ruby
def is_power_of_two(n) = !(/^10*$/ !~ '%b' % n)
```

</TabItem>
</Tabs>