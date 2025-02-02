---
description: 'Author: @ColeB2, @wkw | https://leetcode.com/problems/min-cost-climbing-stairs/'
tags: [Array, Dynamic Programming]
---

# 0746 - Min Cost Climbing Stairs (Easy)

## Problem Link

https://leetcode.com/problems/min-cost-climbing-stairs/

## Problem Statement

You are given an integer array `cost` where `cost[i]` is the cost of `ith` step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index `0`, or the step with index `1`.

Return _the minimum cost to reach the top of the floor_.

**Example 1:**

```
Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
```

**Example 2:**

```
Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
```

**Constraints:**

- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

## Approach 1: Dynamic Programming

For each step, starting at the $$3$$ step (step index $$2$$ in a $$0-indexed$$ array), we can calculate the min cost it would take to reach that step. The min cost to reach any given step would be the min cost to reach the step directly behind it, and $$2$$ steps behind it.

By starting at step $$3$$, we can add the cost from step $$3$$ directly to either the smallest of step $$1$$ or $$2$$, since we can start from either of those steps. Then we can continue to calculate the min cost for steps $$4,5,6...n$$

Time Complexity: $$O(n)$$, where n is the number of steps. We are going to calculate the min cost of each step in the cost array.

Space Complexity: $$O(1)$$ we can reuse the cost array to overwrite the min cost to reach each step.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # loop from the 3rd step, (2 indexed step in 0-indexed list)
        # until the end of the cost array
        for i in range(2, len(cost)):
            # calculate the cost of the ith step. The cost will be the
            # cost of the current step, plus the smaller of the i-1, i-2
            # step behind us.
            cost[i] += min(cost[i - 1], cost[i - 2])
        # Return the smallest of the last 2 steps. Since we can either
        # stand on the last step and step to the final floor, or the
        # step below that and take 2 steps to reach the final floor.
        return min(cost[-1], cost[-2])
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        int dp[n + 1];
        memset(dp, 0, sizeof(dp));
        dp[0] = cost[0];
        dp[1] = cost[1];
        for (int i = 2; i <= n; i++) {
            dp[i] = min(dp[i - 1], dp[i - 2]) + (i == n ? 0 : cost[i]);
        }
        return dp[n];
    }
};
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">
<SolutionAuthor name="@wkw"/>

```kt
class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        val n = cost.size
        val dp = IntArray(n + 1)
        dp[0] = cost[0]
        dp[1] = cost[1]
        for (i in 2 .. n) {
            dp[i] = minOf(dp[i - 1], dp[i - 2]) + if (i == n) 0 else cost[i]
        }
        return dp[n]
    }
}
```

</TabItem>
</Tabs>
