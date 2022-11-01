---
description: 'Author: @wingkwong, @deepanshu-rawat6 | https://leetcode.com/problems/valid-perfect-square/'
---

# 0367 - Valid Perfect Square (Easy)

## Problem Link

https://leetcode.com/problems/valid-perfect-square/

## Problem Statement

Given a **positive** integer _num_, write a function which returns True if _num_ is a perfect square else False.

**Follow up:** **Do not** use any built-in library function such as `sqrt`.

**Example 1:**

```
Input: num = 16
Output: true
```

**Example 2:**

```
Input: num = 14
Output: false
```

**Constraints:**

* `1 <= num <= 2^31 - 1`

## Approach 1: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search).

This approach is similar to Standard Binary Search, just need check for $mid*mid$ and $num$ . Finally, we also need to check for overflow, for that its better to use long long in Cpp or long in Java.
This solution gives $O( log n )$ time complexity and $O( 1 )$ space complexity.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPerfectSquare(int num) {
        // init possible range
        // for num > 2, the range is actually [2 .. num / 2]
        long long l = 1, r = num;
        while (l < r) {
            long long m = l + (r - l) / 2;
            // exclude m
            if (num > m * m) l = m + 1;
            // include m
            else r = m;
        }
        // check if it is a perfect square
        return l * l == num;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public boolean isPerfectSquare(int num) {
        // Binary Search 
        // choosing long because of overflow 
        long s = 0, e = num;
        while (s <= e) {
            long mid = s + (e - s) / 2;
            // check if it's a perfect square
            if (mid * mid == num) { 
                return true;
            }
            // checks where num lies above or below mid*mid
            // then change the values of s or e accordingly
            if (mid * mid < num) s = mid + 1;
            else e = mid - 1;
        }
        // return false if no result found
        return false;
    }
}
```
</TabItem>
</Tabs>
