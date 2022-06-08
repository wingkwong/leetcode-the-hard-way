---
title: 'Bit Manipulation'
description: 'Bit Manipulation utilises different bitwise operations to manipulate bits'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - bit manipulation
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';

<TutorialAuthors names="@wingkwong"/>

## Overview

Binary uses only $0$ and $1$ to represent a number in a base-2 number system. The series of 0 and 1 are called bits. If the bit is $1$, then this bit is set. We read binary number from right to left. For example, the binary representation of number $9$ is $1001_2$ which can be calculated by summing up all the set bit: $2^3 + 2^0 = 9_{10}$. Bit Manipulation utilises different bitwise operations to manipulate bits.

## Basic Operators

| X | Y | X & Y | X \| Y | X ^ Y | ~ X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

### AND (&)

$\&$ takes two bit integers to compare. If the bits are both $1$, then the resulting bit is $1$, else $0$. 

For example, $0010_2 \& 0011_2 = 0010_2$ because only the second bits from the right are both $1$.

### OR (|)

$\&$ takes two bit integers to compare. If the bits are either $1$, then the resulting bit is $1$, else $0$. 

For example, $0010_2 | 0011_2 = 0011_2$ because only the first and the second bits from the right are $1$ in either value.

### XOR (^)

^ takes two bit intergers to compare. If one bit is zero and another bit is one, then the resulting bit is $1$, else $0$.

For example, $0010_2$ ^ $0011_2 = 0001_2$ because the first bit got $0$ and $1$ while the second bit got both $1$.

#### XOR Properties

- X ^ 0 = X
- X ^ X = 0
- X ^ Y = Y ^ X (Commutativity)
- (X ^ Y) ^ Z = X ^ (Y ^ Z) (Associativity)

#### Related Problems

#### [0268 - Missing Number](https://leetcode.com/problems/missing-number/)

Given the fact that we know $n$ distinct numbers in the range $[0, n]$, we can find the missing number using the above XOR properties. 

For example, let's say the input is $[0, 1, 3]$ and we know the the missing number is $2$. We can compare the index (0, 1, 2) and the value (0, 1, 3) and write $3$ ^ $(0$ ^ $0)$ ^ $(1$ ^ $1)$ ^ $(2$ ^ $3)$. 

Based on property #2, we know $0$ ^ $0$ and $(1$ ^ $1)$ would be $0$.

Based on property #1, we know that $0$ ^ $1$ would be $1$. Therefore, we got $3$ ^  $(2$ ^ $3)$. 

Based on property #4, we can rewrite as $2$ ^ $(3$ ^ $3)$ and use property #2 again to get $2$ ^ $0$. 

Based on property #1, we have our final answer which is $2$.

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        // index = 0 1 2
        // value = 0 1 3
        // n ^ (0 ^ 0) ^ (1 ^ 1) ^ (2 ^ 3)
        // 3 ^ 0 ^ 0 ^ 2 ^ 3
        // 0 ^ 0 ^ 2 ^ 3 ^ 3
        // 2 ^ 0
        // 2
        int n = nums.size(), ans = n;
        for(int i = 0; i < n; i++) ans ^= (i ^ nums[i]);
        return ans;
    }
};
```

#### [0136 - Single Number](https://leetcode.com/problems/single-number/)

As every element appears twice except for one. We can use property #2 to make all elements which appear twice become $0$. At the end, there would be $0$ and that element which appears once. Then we use property #1 to get the final answer.

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        // nums: [4,1,2,1,2]
        // 0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2
        // 0 ^ (1 ^ 1) ^ (2 ^ 2) ^ 4
        // 0 ^ 0 ^ 0 ^ 4
        // 4
        int ans = 0;
        for(auto x : nums) ans ^= x;
        return ans;
    }
};
```


### NOT (~)

~ inverts all the bits of a bit intergers, which means $1$ would become $0$ and vice versa. If we apply it on a positive integer $x$, then it is simply $-x-1$.

For example, if we apply NOT on $~0010_2$, then the resulting value is $1101_2$.

### Left-Shift (<<)

$<<$ shifts the bits to the left. For example, $1 << 1 = 2$ because we shift the $1$ ($0001_2$) to the left to become $2$ ($0010_2$). 

Similarily, $1 << 2 = 4$ because we shift the $1$ ($0001_2$) to the left twice to become $4$ ($0100_2$).

And you may find that $1 << n$ is actually $2 ^ n$.

### Right-Shift (>>)

$>>$ shifts the bits to the right. For example $3_{10}$ ($0011_2$) $>> 1$ would become $1$ ($0010_2$).