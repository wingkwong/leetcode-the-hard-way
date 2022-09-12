---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-substring-with-given-hash-value/
---

# 2156 - Find Substring With Given Hash Value (Medium)

## Problem Link

https://leetcode.com/problems/find-substring-with-given-hash-value/

## Problem Statement

The hash of a **0-indexed** string `s` of length `k`, given integers `p` and `m`, is computed using the following function:

`hash(s, p, m) = (val(s[0]) * p^0 + val(s[1]) * p^1 + ... + val(s[k-1]) * p^k-1) mod m`.

Where `val(s[i])` represents the index of `s[i]` in the alphabet from `val('a') = 1` to `val('z') = 26`.

You are given a string `s` and the integers `power`, `modulo`, `k`, and `hashValue.` Return `sub`, _the **first**  **substring** of_ `s` _of length_ `k` _such that_ `hash(sub, power, modulo) == hashValue`.

The test cases will be generated such that an answer always **exists**.

A **substring** is a contiguous non-empty sequence of characters within a string.

**Example 1:**

```
Input: s = "leetcode", power = 7, modulo = 20, k = 2, hashValue = 0
Output: "ee"
Explanation: The hash of "ee" can be computed to be hash("ee", 7, 20) = (5 * 1 + 5 * 7) mod 20 = 40 mod 20 = 0. 
"ee" is the first substring of length 2 with hashValue 0. Hence, we return "ee".
```

**Example 2:**

```
Input: s = "fbxzaad", power = 31, modulo = 100, k = 3, hashValue = 32
Output: "fbx"
Explanation: The hash of "fbx" can be computed to be hash("fbx", 31, 100) = (6 * 1 + 2 * 31 + 24 * 312) mod 100 = 23132 mod 100 = 32. 
The hash of "bxz" can be computed to be hash("bxz", 31, 100) = (2 * 1 + 24 * 31 + 26 * 312) mod 100 = 25732 mod 100 = 32. 
"fbx" is the first substring of length 3 with hashValue 32. Hence, we return "fbx".
Note that "bxz" also has a hash of 32 but it appears later than "fbx".
```

**Constraints:**

* `1 <= k <= s.length <= 2 * 10^4`
* `1 <= power, modulo <= 10^9`
* `0 <= hashValue < modulo`
* `s` consists of lowercase English letters only.
* The test cases are generated such that an answer always **exists**.

## Approach 1: Reversed **Rabin-Karp**

In Rabin-Karp Rolling Hash, we know that

$$
H = s_0*p^{k-1}+s_1*p^{k-2}+...+s_{k-1}*p^{0}
$$

In this question, we got the following function

$$
H = (s_0*p^{0}+s_1*p^{1}+...+s_{k-1}*p^{k-1}) \mod m
$$

Given a substring problem with a fixed length $$k$$, we may think of Sliding Window. However, if we do it normally from the left to right, it may lead to some problems. For example, if the string is `fbxzaad` and $$k$$ is `3`. Then $$H('fbx') = (f * p^0 + b * p^1 + c * p^2) \mod m$$. If we shift the window to the right by 1 character, we have to remove the first character that is out of the window. In order to get $$H('bxz') = (b * p^0 + c * p^1 + d * p^2) \mod m$$, we need to subtract $$f$$ and then divide the whole sum by $$p$$ so that we can reduce each exponent by 1 for other terms. At the end, we add the $$d * p^2$$ to the new window. Division may cause problems with modulo. A workaround is to do it in a reversed order so that we just need to add $$f$$ and subtract $$d * p^3$$.

We can precompute the hash backwards $$h[i]$$ and check all possible starting point $$i$$ of the window. Generally we can obtain the hash between $$[i .. i + k]$$ by $$h[i] - h[i - k] * p^k$$. We need to take care of the modulo as well. To get $$p ^ k$$efficiently, we apply [Binary Exponentiation](../../tutorials/math/number-theory/binary-exponentiation) with modulo.

You can also pre-calculate it in the following approach.

```cpp
vector<long long> p(n + 1);
p[0] = 1;
for (int i = 1; i < n + 1; i++) p[i] = (p[i - 1] * 1LL * power) % modulo;
// do something with p[k]
```

$$target$$ is possible to be negative so we need to do the trick$$(target + modulo) \mod modulo$$ before comparing with the hashValue.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long modpow(long long base, long long exp, long long mod) {
      base %= mod;
      long long res = 1;
      while (exp > 0) {
        if (exp & 1) res = (res * base) % mod;
        base = (base * base) % mod;
        exp >>= 1;
      }
      return res;
    }
    
    string subStrHash(string s, int power, int modulo, int k, int hashValue) {
        int n = s.size();
        vector<long long> h(n + 1);
        for (int i = n - 1; i >= 0; i--) h[i] = (h[i + 1] * power + (s[i] - 'a' + 1)) % modulo;
        for (int i = 0; i + k - 1 < n; i++) { 
            long long target = (h[i] - h[i + k] * modpow(power, k, modulo)) % modulo;
            if((target + modulo) % modulo == hashValue){
                return s.substr(i, k);
            }
        }
        return s;
    }
};
```
