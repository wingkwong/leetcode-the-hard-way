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

## Bitwise Operators

| X | Y | X & Y | X \| Y | X ^ Y | ~ X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

### AND (&)

$\&$ takes two bit integers to compare. If the bits are both $1$, then the resulting bit is $1$, else $0$. 

For example, $0010_2 \& 0011_2 = 0010_2$ because only the second bits from the right are both $1$.

#### Usage #1: Check if the rightmost bit is set

Let's say $n$ is $5_{10}$ which is $0101_2$. If we execute $n \& 1$, i.e. $0101_2 \& 0001_2$, the result is $0001_2$ because only the rightmost bits are both 1 and other bits would return 0.

#### Usage #2: Check if the i-th bit is set

Let's say $n$ is $5_{10}$ which is $0101_2$. How to check if the 2-nd, 3-rd, or 4-th bit is set? Using the same idea, the mask would be $0010_2$, $0100_2$, $1000_2$ respectively. And you may notice that the mask is always a power of 2. A common way to do it is to use left shift operator (which will be discussed below), i.e. $n \& (1 << i)$ where $n$ is the i-th bit to be checked.

#### Usage #3: Remove the rightmost set bit

We can use $n \& (n - 1)$ to remove the rightmost set bit. 

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

#### Example #1: [0231 - Power of Two (Easy)](https://leetcode.com/problems/power-of-two/)

We know that a power of 2 is a positive number and only has one bit set. We can use $n \& (n - 1)$ to see the result is 0 or not to determine if the target value is a power of 2 or not.

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

#### Example #2: [0191 - Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)

Instead of checking the bits one by one, we can use $n \& (n - 1)$ to jump to the next set bit.

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

### OR ($|$)

$\vert$ takes two bit integers to compare. If either bits are $1$, then the resulting bit is $1$, else $0$. 

For example, $0010_2 | 0011_2 = 0011_2$ because only the first and the second bits from the right are $1$ in either value.

#### Usage #1: Set the rightmost bit

Let's say $n$ is $4_{10}$ which is $0100_2$. If we execute $n \vert 1$, i.e. $0100_2 \vert 0001_2$, the result is $0101_2$ because $0001_2$ would turn the rightmost bit of $0100_2$ to $1$ since that bit is set.

#### Usage #2: Set the i-th bit

Let's say $n$ is $4_{10}$ which is $0100_2$. How to set other bits? Similar to above example, we can use left shift operator (which will be discussed below), i.e. $n \vert (1 << i)$ where $n$ is the i-th bit to be set.

#### Example: [0421 -  Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)

```cpp
class Solution {
public:
    int findMaximumXOR(vector<int>& nums) {
        int ans = 0, mask = 0;
        for(int i = 31; i >= 0; i--){
           unordered_set<int> s;
           // set i-th in mask
            mask |= (1 << i);
            for (auto x : nums) s.insert(mask & x);
            // set i-th in ans
            int best = ans | (1 << i);
            for(auto pref : s){
                if(s.find(pref ^ best) != s.end()){
                    ans = best;
                    break;
                }
            }
            
        }
        return ans;
    }
};
```

### XOR (^)

^ takes two bit intergers to compare. If one bit is zero and another bit is one, then the resulting bit is $1$, else $0$.

For example, $0010_2$ ^ $0011_2 = 0001_2$ because the first bit got $0$ and $1$ while the second bit got both $1$.

#### XOR Properties

- X ^ 0 = X
- X ^ X = 0
- X ^ Y = Y ^ X (Commutativity)
- (X ^ Y) ^ Z = X ^ (Y ^ Z) (Associativity)

#### Example #1: [0268 - Missing Number](https://leetcode.com/problems/missing-number/)

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

#### Example #2: [0136 - Single Number](https://leetcode.com/problems/single-number/)

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

The below code snippets are actually equivalent

```cpp
for (int i = n; i >= 0; i--) {
    // i = n, n - 1, n - 2, ..., 2, 1, 0
}
```

```cpp
for (int i = n; ~i; i--) {
    // i = n, n - 1, n - 2, ..., 2, 1, 0
}
```

### Left-Shift (<<)

$<<$ shifts the bits to the left. For example, $1 << 1 = 2$ because we shift the $1$ ($0001_2$) to the left to become $2$ ($0010_2$). 

Similarily, $1 << 2 = 4$ because we shift the $1$ ($0001_2$) to the left twice to become $4$ ($0100_2$).

And you may find that $1 << n$ is actually $2 ^ n$.

#### Example #1: [0078 - Subsets](https://leetcode.com/problems/subsets/)

```cpp
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        int n = nums.size();
        // number of subsets for n elements would be 2 ^ n
        // because for each element, you can choose to take it or not
        // if take = 1, don't take = 0, then we can use bit manipulation 
        int p = 1 << n; // 1 * 2 ^ n
        vector<vector<int>> ans;
        for(int i = 0; i < p; i++){
            vector<int> t; 
            for(int j = 0; j < n; j++){
               if((1 << j) & i) t.emplace_back(nums[j]); 
            }
            ans.emplace_back(t);
        }
        return ans;
    }
};
```

### Right-Shift (>>)

$>>$ shifts the bits to the right. For example $3_{10}$ ($0011_2$) $>> 1$ would become $1$ ($0010_2$).

#### Example: Check the bits one by one

```cpp
while (n > 0) {
    int bit = n & 1;
    // do something with bit
    // ...

    // shift bits to the right
    // which is same as n /= 2
    n >>= 1;
}
```