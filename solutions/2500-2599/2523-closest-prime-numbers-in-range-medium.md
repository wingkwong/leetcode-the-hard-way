---
description: 'Author: @wingkwong | https://leetcode.com/problems/closest-prime-numbers-in-range/'
---

# 2523 - Closest Prime Numbers in Range (Medium) 

## Problem Link

https://leetcode.com/problems/closest-prime-numbers-in-range/

## Problem Statement

Given two positive integers `left` and `right`, find the two integers `num1` and `num2` such that:

- `left <= nums1 < nums2 <= right`.
- `nums1` and `nums2` are both **prime** numbers.
- `nums2 - nums1` is the **minimum** amongst all other pairs satisfying the above conditions.

Return *the positive integer array* `ans = [nums1, nums2]`. *If there are multiple pairs satisfying these conditions, return the one with the minimum* `nums1` *value or* `[-1, -1]` *if such numbers do not exist.*

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

- `1 <= left <= right <= 106`

.spoilerbutton {display:block; border:dashed; padding: 0px 0px; margin:10px 0px; font-size:150%; font-weight: bold; color:#000000; background-color:cyan; outline:0; 
}
.spoiler {overflow:hidden;}
.spoiler > div {-webkit-transition: all 0s ease;-moz-transition: margin 0s ease;-o-transition: all 0s ease;transition: margin 0s ease;}
.spoilerbutton[value="Show Message"] + .spoiler > div {margin-top:-500%;}
.spoilerbutton[value="Hide Message"] + .spoiler {padding:5px;}

## Approach 1: Prime Sieve

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

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