---
description: 'Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/house-robber/'
tags: [Array, Dynamic Programming]
---

# 0198 - House Robber (Medium)

## Problem Link

https://leetcode.com/problems/house-robber/

## Problem Statement

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return _the maximum amount of money you can rob tonight **without alerting the police**_.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

**Example 2:**

```
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
```

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

## Approach 1: Dynamic Programming

At any given house, the max number of money we can have would be either all the money at that house plus the amount we brought from 2 houses before that house, or the money we got from the last house plus us skipping this house. Knowing that, we can see we don't need to have access to any values except the 2 houses before the current, and the current, so we can forgo using an array to store the max amount of money we robbed at each house, and instead use store them in variables.

Time Complexity: $$O(n)$$ Where $$n$$ is the number of houses. We must traverse each house at least once.

Space Complexity: $$O(1)$$, whether we overwrote the nums array with the money we stole, or just tracked the previous 2 houses, we would only need constant extra space.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def rob(self, nums: List[int]) -> int:
        # initialize the previous 2 houses we stole from. Start at
        # zero as for the first house we would be going in with 0 money.
        # For any given house, we will need to know what we received
        # from the previous 2 houses.
        # [house1, house2, house3]
        house1, house2 = 0, 0
        # loop through all houses in nums. We will call each house
        # house3, as its the 3rd house being track overall.
        for house3 in nums:
            # Current house we have 2 options, to either take the money.
            # or skip. Our temp variable decides which option is better.
            # house1 + house3 is us taking the money, which means we 
            # would have the same money we had from house1, which was
            # the house 2 houses before house3.
            # house2, is us deciding to take money from the last house
            # and skipping taking money from this house.
            temp = max((house1 + house3), house2)
            house1 = house2
            house2 = temp
        # house2 will store the max amount of money we could have
        # possibly stolen during our trip.
        return house2
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        int rob1 = 0, rob2 = 0;
        for (int n : nums) {
            int temp = max(rob1 + n, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
};
```

</TabItem>
</Tabs>
