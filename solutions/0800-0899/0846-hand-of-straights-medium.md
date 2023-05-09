---
description: 'Author: @ColeB2 | https://leetcode.com/problems/hand-of-straights/'
tags: [Array, Hash Table, Greedy, Sorting]
---

# 0846 - Hand of Straights (Medium)

## Problem Link

https://leetcode.com/problems/hand-of-straights/

## Problem Statement

Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size `groupSize`, and consists of `groupSize` consecutive cards.

Given an integer array `hand` where `hand[i]` is the value written on the `ith` card and an integer `groupSize`, return `true` if she can rearrange the cards, or `false` otherwise.

**Example 1:**

```
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
```

**Example 2:**

```
Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.
```

**Constraints:**

- `1 <= hand.length <= 10^4`
- `0 <= hand[i] <= 10^9`
- `1 <= groupSize <= hand.length`

**Note**: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

## Approach 1: Greedy using Sorting and a Hash Map.

Breaking down this problem, it would be efficient to access the cards in $$O(1)$$ time, so a hash map to keep track of the count of cards will be of use. 

We also know that given a number, it can be potentially used in a multitude of ways, for example, $$3$$, could be used in the group $$1,2,3$$, group $$2,3,4$$ and/or group $$3,4,5$$ assuming a $$groupSize$$ of $$3$$. This is where our greedy approach comes in. If we sort our cards and start with the smallest group first, we can eliminate cards and create our groups that way.

For example, if our next card in $$hand$$ is $$2$$ and our $$groupSize$$ is $$3$$, we know $$2$$ can only appear in $$2,3,4$$ as since we have a sorted list of cards, and $$2$$ is the smallest that it can't appear in $$1,2,3$$ so by using a sorted list, we can be Greedy with our approach, and only select cards starting with the smallest if they exist, and checking our card counter hash map if $$card + i$$ exists from $$i$$ $$1 to groupSize - 1$$.

Time Complexity $$O(nlogn)$$ we will have to sort our input in $$nlogn$$ time.

Space Complexity: $$O(n)$$ for our card counter hash map.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        # base case, if we can't make even number of groups, return False.
        if len(hand) % groupSize != 0:
            return False
        # create a hash map counter of each card, so we can check if we
        # have enough cards to utilize in O(1) time.
        card_count = Counter(hand)
        # reverse sort our hand, so we can pop from the hand in O(1) time.
        hand.sort(reverse=True)
        # while we have cards in our hand
        while hand:
            # pop the initial card from our hand.
            card = hand.pop()
            # if the card we popped was already used in previous
            # iterations and its count reached 0, we can continue.
            if not card_count[card]:
                continue
            # update our card count of the card we popped.
            card_count[card] -= 1
            # check the cards, card + i, from 1 to group size.
            # example card 1 and groupSize 4, check cards 2, 3, 4.
            for i in range(1, groupSize):
                # set what our new card we want to search for is.
                new_card = card + i
                # if the card exists in our hash map counter:
                if card_count[new_card]:
                    # use that card, and decrement its count by one.
                    card_count[new_card] -= 1
                else:
                    # card no longer has a count > 0 in hash map. Then
                    # we ran out of cards, and can return false.
                    return False
        # if we make it through the above loop, it means we could make
        # enough groupings of cards and can return True.
        return True
```

</TabItem>
</Tabs>
