---
description: >-
  Author: @hirotake111 |
  https://leetcode.com/problems/gas-station/
---

# 134 - Gas Station (Medium)

## Problem Link

https://leetcode.com/problems/gas-station/

## Problem Statement

There are `n` gas stations along a circular route, where the amount of gas at the `ith` station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `ith` station to its next `(i + 1)th` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`. If there exists a solution, it is guaranteed to be unique

**Example 1:**

```
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```

**Example 2:**

```
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
```

**Constraints:**

- `n == gas.length == cost.length`
- `1 <= n <= 10^5`
- `0 <= gas[i], cost[i] <= 10^4`

## Approach 1: Two Pointers

This approach includes 2 steps as follows:

### Step 1

In the first place we can compare the sum of gas and the sum of cost. If the sum of cost is greater than the sum of gas, we can say there is no way to travel around the circuit with given input. Therefore return `-1`.

### Step 2

Since we passed step 1 with given input, now we are sure there is at least one possible solution (starting index). And according to the problem description, there is only ONE.
At this point the only thing we need to do is to find the index which the sum of (`gas[i]` - `cost[i]`) is always positive for the rest of input (`gas` and `cost`).

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@hirotake111"/>

```py
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gas = -1
        starting_index = -1

        if sum(gas) - sum(cost) < 0:
            return -1
        # Now we are sure that there is at least ONE solution in this input
        # (And according to the problem description, there is only ONE.)

        for i, diff in enumerate([g - c for g, c in zip(gas, cost)]):
            # If total gas is less than 0 we will seak next index that has a positive diff
            if total_gas < 0:
                if 0 <= diff:
                    # We found the new index that has a positive diff
                    # Update total gas and index
                    total_gas = diff
                    starting_index = i
                continue

            # total gas is positive - add diff to the total
            total_gas += diff

        return starting_index
```

</TabItem>
</Tabs>
