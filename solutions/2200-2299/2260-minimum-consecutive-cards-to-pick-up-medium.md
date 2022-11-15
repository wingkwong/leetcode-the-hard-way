---
description: >-
  Author: @wingkwong, @dhanu084 |
  https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/
---

# 2260 - Minimum Consecutive Cards to Pick Up (Medium)

## Problem Link

https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/

## Problem Statement

You are given an integer array `cards` where `cards[i]` represents the **value** of the `ith` card. A pair of cards are **matching** if the cards have the **same** value.

Return _the **minimum** number of **consecutive** cards you have to pick up to have a pair of **matching** cards among the picked cards._ If it is impossible to have matching cards, return `-1`.

**Example 1:**

```
Input: cards = [3,4,2,3,4,7]
Output: 4
Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.
```

**Example 2:**

```
Input: cards = [1,0,5,3]
Output: -1
Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.
```

**Constraints:**

- `1 <= cards.length <= 10^5`
- `0 <= cards[i] <= 10^6`

## Approach 1: Hash Map

Time complexity: $$O(n)$$

Space complexity: $$O(n)$$ if there are no pairs

Store the index for each number, check each element with size > 1 and find out the minimum gap between them.

<Tabs>
<TabItem value = "cpp" label = "C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int minimumCardPickup(vector<int>& cards) {
        int n = cards.size(), ans = INT_MAX;
        unordered_map<int, vector<int>> m;
        // store the indices for each number
        for (int i = 0; i < n; i++) m[cards[i]].push_back(i);
        for (auto& x : m) {
            // a pair needs to have at least 2 elements with same value
            for (int i = 1; i < x.second.size(); i++) {
                // calculate the min gap
                ans = min(ans, x.second[i] - x.second[i - 1] + 1);
            }
        }
        return ans == INT_MAX ? -1 : ans;
    }
};
```

</TabItem>

<TabItem value = "py" label ="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        seen = {}
        length = inf
        n = len(cards)

        for i in range(n):
            # check if there exists a card with same number
            if cards[i] in seen:
                # if present, then it represents a pair
                # calculate the current lenth and update min length
                length = min(length, i - seen.get(cards[i]) + 1)
            # add the card with the index in the dictionary
            seen[cards[i]] = i

        # if no pair is found length will be inf so return -1
        return length if length != inf else -1
```

</TabItem>
</Tabs>
