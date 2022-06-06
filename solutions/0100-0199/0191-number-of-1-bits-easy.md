---
description: 'Author: @wingkwong | https://leetcode.com/problems/number-of-1-bits/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0191 - Number of 1 Bits (Easy)

## Problem Link

https://leetcode.com/problems/number-of-1-bits/

## Problem Statement

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the [Hamming weight](http://en.wikipedia.org/wiki/Hamming_weight)).

**Note:**

* Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
* In Java, the compiler represents the signed integers using [2's complement notation](https://en.wikipedia.org/wiki/Two's_complement). Therefore, in **Example 3**, the input represents the signed integer. `-3`.

**Example 1:**

```
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

**Example 2:**

```
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
```

**Example 3:**

```
Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits. 
```

**Constraints:**

* The input must be a **binary string** of length `32`.

**Follow up:** If this function is called many times, how would you optimize it?

## Approach 1: Built-in Function

### C++

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        return __builtin_popcount(n);
    }
};
```

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        return bitset<32>(n).count();
    }
}
```

### Python 3

<SolutionAuthor name="@wingkwong"/>

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count('1')
```

### Go

<SolutionAuthor name="@wingkwong"/>

```go
func hammingWeight(num uint32) int {
    return bits.OnesCount32(num);
}
```

## Approach 2: Bit Manipulation

We check each parity of teach bit. Increase $$ans$$ by 1 if the bit is set.

### C++

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int ans = 0;
        while (n) {
            if (n & 1) ans++;
            n >>= 1; // or n /= 2;
        }
        return ans;
    }
};
```

## Approach 3: n & (n - 1)

We can optimise approach 2. Instead of checking all digits, we can use `n & (n - 1)` to remove the rightmost set bit.

```
n     n     n - 1  n & (n - 1)
--   ----   ----   -------
 0   0000   0111    0000
 1   0001   0000    0000
 2   0010   0001    0000
 3   0011   0010    0010
 4   0100   0011    0000
 5   0101   0100    0100
 6   0110   0101    0100
 7   0111   0110    0110
 8   1000   0111    0000 
 9   1001   1000    1000
10   1010   1001    1000
11   1011   1010    1010
12   1100   1011    1000
13   1101   1100    1100
14   1110   1101    1100
15   1111   1110    1110
```

### C++

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int ans = 0;
        for (; n; n = n & (n - 1)) ans++;
        return ans;
    }
};
```
