---
description: 'Author: @wkw | https://leetcode.com/problems/closest-prime-numbers-in-range/'
tags: [Math, Number Theory]
---

# 2523 - Closest Prime Numbers in Range (Medium)

## Problem Link

https://leetcode.com/problems/closest-prime-numbers-in-range/

## Problem Statement

Given two positive integers `left` and `right`, find the two integers `num1` and `num2` such that:

- `left <= nums1 < nums2 <= right`.
- `nums1` and `nums2` are both **prime** numbers.
- `nums2 - nums1` is the **minimum** amongst all other pairs satisfying the above conditions.

Return _the positive integer array_ `ans = [nums1, nums2]`. _If there are multiple pairs satisfying these conditions, return the one with the minimum_ `nums1` _value or_ `[-1, -1]` _if such numbers do not exist._

A number greater than `1` is called **prime** if it is only divisible by `1` and itself.

**Example 1:**

```
Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.
```

**Example 2:**

```
Input: left = 4, right = 6
Output: [-1,-1]
Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.
```

**Constraints:**

- `1 <= left <= right <= 10^6`

## Approach 1: Prime Sieve

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> primes;
    vector<bool> is_prime;
    void prime_sieve(int n) {
        is_prime.assign(n + 1, 1);
        is_prime[0] = is_prime[1] = 0;
        for (int i = 4; i <= n; i += 2) is_prime[i] = 0;
        for (int i = 3; i * i <= n; i += 2) {
          if (is_prime[i]) {
            for (int j = i * i; j <= n; j += i * 2) {
              is_prime[j] = 0;
            }
          }
        }
        primes.push_back(2);
        for (int i = 3; i <= n; i += 2) {
            if (is_prime[i]) {
              primes.push_back(i);
            }
        }
    }

    vector<int> closestPrimes(int left, int right) {
        // generate prime numbers
        prime_sieve(right);
        int l = -1, r = -1, mi = INT_MAX;
        // for each prime number
        for (int i = 1; i < primes.size(); i++) {
            // if it is within the target range
            if (left <= primes[i - 1] && primes[i] <= right) {
                // we calculate the difference
                int d = primes[i] - primes[i - 1];
                // if it is less than the min one
                if (d < mi) {
                    // update min
                    mi = d;
                    // set l and r
                    l = primes[i - 1];
                    r = primes[i];
                }
            }
        }
        // if both l and r are set, then return {l, r}
        // else return {-1, -1}
        return l != -1 && r != 1 ? vector<int>{l, r} : vector<int>{-1, -1};
    }
};
```

</TabItem>
</Tabs>
