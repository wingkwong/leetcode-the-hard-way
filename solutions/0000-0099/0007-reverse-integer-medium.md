---
description: >-
  Author: @vigneshshiv, @MithunPrabhu777, @radojicic23 |
  https://leetcode.com/problems/reverse-integer/
---

# 0007 - Reverse Integer (Medium)

## Problem Link

https://leetcode.com/problems/reverse-integer/

## Problem Statement

Given a signed 32-bit integer $x$, return $x$ with its digits reversed. If reversing $x$ causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return $0$.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

**Example 1:**

```
Input: x = 123
Output: 321
```

**Example 2:**

```
Input: x = -123
Output: -321
```

**Example 3:**

```
Input: x = 120
Output: 21
```

**Constraints:**

* `-2^31 <= x <= 2^31 - 1`

## Approach 1: Standard

As input can be from `Integer.MIN_VALUE` to `Integer.MAX_VALUE`. 

Reversing some of the 10 digits number, will not provide the correct answer, because the integer range might overflow, if it does return 0, otherwise the reversed number. 

For example, reversing the last integer number `2147483647` can go out of range, so having `long` primitive in the program can hold the range. 

First, get the sign bit value, and negate the input if it's negative.
Reverse the integer and if it's above max range then return 0 or return the value with sign bit value.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
// Time complexity: O(1), where # digits are always <= 10
// Space complexity: O(1)
class Solution {
    public int reverse(int x) {
        long num = 0, remainder = 0;
        int sign = 1;
        if (x < 0) {
            x *= -1;
            sign = -1;
        }
        while (x > 0) {
            remainder = x % 10;
            num = (num * 10) + remainder;
            x /= 10;
        }
        return num > Integer.MAX_VALUE ? 0 : (int) num * sign;
    }
}
```
</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@MithunPrabhu777"/>

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let [number, sign, remainder] = [0, 1, 0];
    const RANGE = 2 ** 31 - 1;
    if (x < 0) {
        x *= -1;
        sign = -1;
    }
    while (x > 0) {
        remainder = x % 10;
        number = (number * 10) + remainder;
        x = Math.floor(x / 10);
    }
    return number > RANGE ? 0 : number * sign;
};
```
</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def reverse(self, x: int) -> int:
        number, remainder, sign = 0, 0, 1
        MAX = 2 ** 31 - 1
        if x < 0:
            x *= -1
            sign = -1
        while x > 0:
            remainder = x % 10
            number = (number * 10) + remainder
            x //= 10
        return 0 if number > MAX else int(number) * sign
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    int reverse(int x) {
        int number = 0;
        while (x != 0) {
            if (number > INT_MAX / 10 || number < INT_MIN / 10) {
                return 0;
            }
            int carry = x % 10;
            number = number * 10 + carry;
            x /= 10;
        }
        return number;
    }
};
```
</TabItem>
</Tabs>
