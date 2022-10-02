---
description: 'Author: @wingkwong, @ganajayant | https://leetcode.com/problems/subarray-sum-equals-k/'
---

# 0560 - Subarray Sum Equals K (Medium)

## Problem Link

https://leetcode.com/problems/subarray-sum-equals-k/

## Problem Statement

Given an array of integers `nums` and an integer `k`, return _the total number of continuous subarrays whose sum equals to `k`_.

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**

```
Input: nums = [1,2,3], k = 3
Output: 2
```

**Constraints:**

* `1 <= nums.length <= 2 * 10^4`
* `-1000 <= nums[i] <= 1000`
* `-10^7 <= k <= 10^7`

## Approach 1: Hash Map

We use hash map to store the cumulative sum $$sum[i]$$ up to index $$i$$. If $$sum[i] - sum[j] = k$$, then it means the sum between indices $$i$$ and $$j$$ is $$k$$. Therefore, we store the cumulative sum, search for $$sum - k$$ in the hash map and add the occurrences if it is found to the answer.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        m[0]++;
        int sum = 0, ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            ans += m[sum - k];
            m[sum]++;
        }
        return ans;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int sum = 0, result = 0;
        HashMap<Integer, Integer> preSum = new HashMap<>();
        preSum.put(0, 1);
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (preSum.containsKey(sum - k)) {
                result += preSum.get(sum - k);
            }
            preSum.put(sum, preSum.getOrDefault(sum, 0) + 1);
        }
        return result;
    }
}
```
</TabItem>
</Tabs>

