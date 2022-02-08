---
description: 'Author: @wingkwong | https://leetcode.com/problems/add-digits/'
---

# 0258 - Add Digits (Easy)

## Problem Statement

Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.&#x20;

**Example 1:**

```
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
```

**Example 2:**

```
Input: num = 0
Output: 0
```

**Constraints:**

* `0 <= num <= 2^31 - 1`

**Follow up:** Could you do it without any loop/recursion in `O(1)` runtime?

## Approach 1: Repeated Digit Sum

Let's have a quick review on how to get digit sum first. Given that a number $$n$$, we can use the following approach to get the digit sum.

```cpp
int digitSum(int n) {
    int sum = 0;
    while (n > 0) {
        // get the last digit and add it to sum
        // e.g. 123 % 10 = 3. Add 3 to sum
        sum += n % 10;
        // dividing by 10 for the next run
        // e.g. 123 / 10 -> 12
        n /= 10;
    }
    return sum;
}
```

We initialise $$sum := 0$$ first. Then we take modulo operation $$n \ mod 10$$ to get the last digit and add it to $$sum$$. Then we divide $$n$$ by 10 to eliminate the last digit and perform the same operation until $$n$$ becomes $$0$$.

Now we just need to calculate the digit sum repeatedly until $$n$$ has only one digit.&#x20;

```cpp
class Solution {
public:
    int digitSum(int n) {
        int sum = 0;
        while (n > 0) {
            // get the last digit and add it to sum
            // e.g. 123 % 10 = 3. Add 3 to sum
            sum += n % 10;
            // dividing by 10 for the next run
            // e.g. 123 / 10 -> 12
            n /= 10;
        }
        return sum;
    }
    int addDigits(int n) {
        // calculate digit sum until n has only one digit
        while (n >= 10) {
            n = digitSum(n);
        }
        return n;
    }
};
```

## Approach 2: Congruence Formula

```cpp
class Solution {
public:
    int addDigits(int num) {
        return 1 + (num - 1) % 9;
    }
};
```
