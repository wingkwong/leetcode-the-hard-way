---
description: 'Author: @wkw, @vigneshshiv | https://leetcode.com/problems/max-number-of-k-sum-pairs/'
---

# 1679 - Max Number of K-Sum Pairs (Medium)

## Problem Link

https://leetcode.com/problems/max-number-of-k-sum-pairs

## Problem Statement

You are given an integer array `nums` and an integer `k`.

In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from the array.

Return _the maximum number of operations you can perform on the array_.

**Example 1:**

```
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
```

**Example 2:**

```
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= 10^9`

## Approach 1: Hash Map

We can use hash map to store the occurrences for each number. Just like Two Sum problem, we find the complement $$k - x$$. Then, we will be facing two cases.

The first case is when $$x$$ is same as $$k - x$$. In this case, we can only take $$m[x] / 2$$ at most, then we update both value with the remainder.

Otherwise, we can only take the minimal value of $$m[x]$$and $$m[k - x]$$, then update the hash map values.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        int ans = 0;
        for (auto &x : nums) m[x]++;
        for (auto &x : nums) {
            if (m[k - x] > 0) {
                if (x == k - x) {
                    ans += m[x] / 2;
                    m[x] = m[x] % 2;
                    m[k - x] = m[x] % 2;
                } else {
                    int ops = min(m[x], m[k - x]);
                    ans += ops;
                    m[x] -= ops;
                    m[k - x] -= ops;
                }
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int maxOperations(int[] nums, int k) {
        int count = 0;
        Map<Integer, Integer> table = new HashMap<>();
        for (int x : nums) {
            int reminder = k - x;
            if (table.containsKey(reminder)) {
                count += 1;
                if (table.get(reminder) == 1) {
                    table.remove(reminder);
                } else {
                    table.merge(reminder, -1, Integer::sum);
                }
            } else {
                table.merge(x, 1, Integer::sum);
            }
        }
        return count;
    }
}
```

</TabItem>
</Tabs>

## Approach 2: Two Pointers

We can sort the input and use two pointers to track elements from both side. If their sum is equal to $$k$$, then we increase $$ans$$ by 1. If $$nums[i] + nums[j] > k$$, it means we should reduce the sum, hence we move $$j$$-th pointer to the left . Otherwise, we increase $$i$$-th pointer to the right to increase the sum.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        int n = nums.size(), i = 0, j = n - 1, ans = 0;
        sort(nums.begin(), nums.end());
        while (i < j) {
            if (nums[i] + nums[j] == k) ans += 1, i += 1, j -= 1;
            else if (nums[i] + nums[j] > k) j -= 1;
            else i += 1;
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
