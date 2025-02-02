---
description: 'Author: @wkw | https://leetcode.com/problems/minimize-maximum-of-array/'
tags: [Array, Binary Search, Dynamic Programming, Greedy, Prefix Sum]
---

# 2439 - Minimize Maximum of Array (Medium)

## Problem Link

https://leetcode.com/problems/minimize-maximum-of-array/

## Problem Statement

You are given a **0-indexed** array `nums` comprising of `n` non-negative integers.

In one operation, you must:

- Choose an integer `i` such that `1 <= i < n` and `nums[i] > 0`.
- Decrease `nums[i]` by 1.
- Increase `nums[i - 1]` by 1.

Return*the **minimum** possible value of the **maximum** integer of*`nums`_after performing **any** number of operations_.

**Example 1:**

```
Input: nums = [3,7,1,6]
Output: 5
Explanation:
One set of optimal operations is as follows:
1. Choose i = 1, and nums becomes [4,6,1,6].
2. Choose i = 3, and nums becomes [4,6,2,5].
3. Choose i = 1, and nums becomes [5,5,2,5].
The maximum integer of nums is 5. It can be shown that the maximum number cannot be less than 5.
Therefore, we return 5.
```

**Example 2:**

```
Input: nums = [10,1]
Output: 10
Explanation:
It is optimal to leave nums as is, and since 10 is the maximum value, we return 10.
```

**Constraints:**

- `n == nums.length`
- `2 <= n <= 105`
- `0 <= nums[i] <= 109`

## Approach 1: Prefix Sum + Greedy.

By definition, $ceil(a / b)$ return the smallest integer that is greater than or equal to $a / b$. Here's how we can derive it mathematically.

Let $q = a / b$ and $k = ceil(a / b)$ where $k$ is the smallest integer such that $k >= q$.

Since $k$ is the smallest integer greater than or equal to $q$, we can write:

$$
k - 1 < q <= k
$$

Multiplying both sides of this inequality by $b$, we get:

$$
(k - 1) * b < a <= k * b
$$

Adding $b - 1$ to both sides of this inequality, we get:

$$
k * b + (b - 1) > a >= (k - 1) * b + 1
$$

Dividing both sides of this inequality by $b$, we get:

$$
k + (b - 1) / b > a / b >= (k - 1) + 1 / b
$$

Since $(b - 1) / b$ is a fraction between $0$ and $1$, we know that $(b - 1) / b < 1.$ Therefore, we can simplify the inequality to:

$$
k + 1 > (a + b - 1) / b >= k
$$

This means that $(a + b - 1) / b$ is the smallest integer greater than or equal to $q$, which is exactly what $ceil(a / b)$ represents.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// idea: try to distribute prefix sum into (i + 1) evenly and record the maximum.
// in example 1, let's assume there are only 2 nums first, i.e. [3, 7]
// here we can only decrease the second number by 1 and add it to the first number
// [3, 7] -> [4, 6] -> [5, 5] -> the min max is 5
// What if it is [3, 8]?
// [3, 8] -> [4, 7] -> [5, 6] -> the min max is 6
// we can see that the min max is `ceil(sum / n)`
// in example 2, we have [10, 1]. Here 10 is already the min max.
// so we can conclude
// nums[0] >= nums[1]: return nums[0] (i.e. max(nums[0], nums[1])
// else: `ceil(sum / n)`

class Solution {
public:
    int minimizeArrayValue(vector<int>& nums) {
        long long sum = 0, ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            // ceil(a / b)
            // = (a + b - 1) / b
			// now a = sum, b = i + 1
			// ceil(sum / (i + 1)
			// = (sum + (i + 1) - 1) / (i + 1)
			// = (sum + i) / (i + 1)
            ans = max(ans, (sum + i) / (i + 1));
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minimizeArrayValue(self, nums: List[int]) -> int:
        pref_sum, ans = 0, 0
        for i in range(len(nums)):
            pref_sum += nums[i]
            ans = max(ans, (pref_sum + i) // (i + 1))
        return ans
```

</TabItem>
</Tabs>
