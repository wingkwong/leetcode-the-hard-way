---
description: 'Author: @wkw | https://leetcode.com/problems/4sum-ii/'
---

# 0454 - 4Sum II (Medium)

## Problem Link

https://leetcode.com/problems/4sum-ii/

## Problem Statement

Given four integer arrays `nums1`, `nums2`, `nums3`, and `nums4` all of length `n`, return the number of tuples `(i, j, k, l)` such that:

- `0 <= i, j, k, l < n`
- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`

**Example 1:**

```
Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

**Example 2:**

```
Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
```

**Constraints:**

- `n == nums1.length`
- `n == nums2.length`
- `n == nums3.length`
- `n == nums4.length`
- `1 <= n <= 200`
- `-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28`

## Approach 1: Brute Force (TLE)

The simple way is to iterate over all $$nums$$ to construct all possible tuples. However, this solution gives TLE as it is a $$O(n^4)$$ solution.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {
        int ans = 0;
        for (auto a : nums1) {
            for (auto b : nums2) {
                for (auto c : nums3) {
                    for (auto d : nums4) {
                        ans += a + b + c + d == 0;
                    }
                }
            }
        }
        return ans;
    }
};
```

## Approach 2: Hasp Map (TLE)

We can take the same approach from [0001 - Two Sum (Easy)](../0000-0099/two-sum). We know that $$a + b + c + d = 0$$ is same as $$a = -(b + c + d)$$. Therefore, we iterate $$nums1$$ to count the number of element $$a$$. Then iterate $$nums2$$, $$nums3$$ and $$nums4$$ to find if the complementary sum $$-(b + c + d)$$ is in hash map or not. However, this solution gives TLE as it is a $$O(n^3)$$ solution.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {
        int ans = 0;
        unordered_map<int, int> m;
        for (auto a : nums1) m[a]++;
        for (auto b : nums2) {
            for (auto c : nums3) {
                for (auto d : nums4) {
                    // a + b + c + d == 0
                    // a = -(b + c + d)
                    ans += m[-(b + c + d)];
                }
            }
        }
        return ans;
    }
};
```

## Approach 3: Hash Map (Accepted)

We can take the same approach from [0001 - Two Sum (Easy)](../0000-0099/two-sum). We know that $$a + b + c + d = 0$$ is same as $$a + b = - (c + d)$$. Therefore, we iterate $$nums1$$and $$nums2$$ to count the sum of elements $$a + b$$. Then iterate $$nums3$$ and $$nums4$$to find if the complementary sum $$- (c + d)$$is in hash map or not. This solution passes as it is a $$O(n^2)$$solution.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {
        int ans = 0;
        unordered_map<int, int> m;
        for (auto a : nums1) {
            for (auto b : nums2) {
                m[a + b]++;
            }
        }
        for (auto c : nums3) {
            for (auto d : nums4) {
                // a + b + c + d == 0
                // a + b = -(c + d)
                ans += m[-(c + d)];
            }
        }
        return ans;
    }
};
```

You may also use two hash maps to store the sums $$a + b$$ and $$-(c + d)$$ and multiply the values at the end.

```cpp
class Solution {
public:
    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {
        int ans = 0;
        unordered_map<int, int> m1, m2;
        for (auto a : nums1) {
            for (auto b : nums2) {
                m1[a + b]++;
            }
        }
        for (auto c : nums3) {
            for (auto d : nums4) {
                m2[-(c + d)]++;
            }
        }
        for (auto x : m1) {
            ans += m1[x.first] * m2[x.first];
        }
        return ans;
    }
};
```
