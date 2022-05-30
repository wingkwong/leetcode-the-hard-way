---
description: 'Author: @wingkwong | https://leetcode.com/problems/add-digits/'
---

# 0258 - Add Digits (Easy)

## Problem Statement

Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

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

Now we just need to calculate the digit sum repeatedly until $$n$$ has only one digit.

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

If $$n$$ is $$0$$, then obviously it is $$0$$.

If $$n$$ can be divisible by $$9$$ , then it is $$9$$. E.g 27 % 9 == 0 -> 2 + 7 -> 9.

Otherwise, it would be $$n \mod 9$$. Why? 

Let's say $$n = a_0 * 1 + a_1 * 10 + a_2 * 100 + ... + a_n * 10^n$$  where $$a_i$$ ∈ $$[0, 9]$$ and let $$x$$ be $$a_0 + a_1 + a_2 + ... + a_n$$. We know that $$1 \mod 9 = 10 \mod 9 = 100 \mod 9 = 1$$. Then, $$n \mod 9$$ would be $$x$$. For example, $$n = 123 = 3 * 1 + 2 * 10 + 1 * 100$$ and $$x = 1 + 2 + 3$$. We can see that $$123 \mod 9 = 6$$, which is also the difference between $$n$$ and the closest number  which can be divisible by $$9$$.

To generalise, for base $$b$$, we'll have

![image](https://user-images.githubusercontent.com/35857179/168303513-5e58fd4a-8775-487c-9a21-25d0e061e418.png)

which can be further simplified as

![image](https://user-images.githubusercontent.com/35857179/168303537-9079b250-0106-41d0-84ab-bc4d8d672541.png)

```cpp
class Solution {
public:
    int addDigits(int num) {
        return 1 + (num - 1) % 9;
    }
};
```
