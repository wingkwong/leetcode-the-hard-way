---
description: 'Author: @ColeB2 | https://leetcode.com/problems/koko-eating-bananas/'
---

# 0875 - Koko Eating Bananas

## Problem Link

https://leetcode.com/problems/koko-eating-bananas/

## Problem Statement

Koko loves to eat bananas. There are `n` piles of bananas, the `ith` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return _the minimum integer `k` such that she can eat all the bananas within `h` hours_.

**Example 1:**

```
Input: piles = [3,6,7,11], h = 8
Output: 4
```

**Example 2:**

```
Input: piles = [30,11,23,4,20], h = 5
Output: 30
```

**Example 3:**

```
Input: piles = [30,11,23,4,20], h = 6
Output: 23
```

**Constraints:**

- `1 <= piles.length <= 10^4`
- `piles.length <= h <= 10^9`
- `1 <= piles[i] <= 10^9`

## Approach 1: Brute Force - TLE

It is a medium problem, so the brute force will likely TLE, but we can gather some insight by figuring out the brute force solution.

First, we must think about what we are trying to solve. Koko loves to eat slowly, but also all of the bananas. So we must find out how slowly can she eat, while still eating all the bananas.

Do we know the fastest possible rate she could eat all the bananas? Yes we know if she eats the bananas at a rate of $$k = max(piles)$$, that is at a rate of k being the largest pile of bananas. That she could eat them in $$piles.length$$ time. If she ate faster, we know she still has to wait to move on to a new pile, so it doesn't speed up anything, giving us a max k rate of $$k = max(piles)$$

What about the slowest possible rate? Given an h value, we can calculate the sum of all piles of bananas, and figure out that $$k = Ceil(sum(piles)/h)$$. We will check example 3 for more concrete numbers.

Example 3: There are 88 bananas that is $$sum(piles)$$, and we know we have 6 hours to finish them. $$h=6$$. So, $$Ceil(88 / 6) = 15$$. We get a close minimum k value of at least 15 bananas per hour to finish all of them in 6 hours. We also know that if we ate 30 bananas per hour, we could eat all of them in 5 hours. So we have our boundaries, we know we need to eat somewhere between 15 and 30 bananas. So the brute force would be to check, starting at 15, and finishing at 30. For time we will have to do $$O(n)$$ at each k value.

Time Complexity: $$O(n(maxKValue - minKValue))$$. Where $$n$$ is the number of banana piles. $$maxKValue$$ is $$max(piles)$$ and $$minKValue$$ is $$Ceil(sum(piles)/h)$$. We know we are going to have to loop through all the possible k values, and inside of each k, we are going to have to do $$O(n)$$ work to find the total time.

Space Complexity: O(1)

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # Base Case, must eat 1 pile an hour. So we can return early.
        if h == len(piles):
            return max(piles)
        # Find the min and max values that k can be.
        # Sum of all bananas / hours will give us our min.
        # Note we could start at k=1, but using O(n) work, we can eliminate many
        # poor k values that won't be close.
        k_min = math.ceil(sum(piles) / h)
        # Number of bananas in the largest pile will give us max possible k.
        k_max = max(piles)
        # Loop through all possible k values from min to max.
        for k in range(k_min,k_max):
            # initialize how many hours it will take to eat all bananas
            hours_to_eat = 0
            # loop through each pile of bananas. Note: If we finish before
            # the hour is up, we still have to wait to move on.
            for pile in piles:
                # Time to finish will be the number of bananas in the pile,
                # divided by the rate in which we eat the bananas
                hours_to_eat += math.ceil(pile/k)
            # When ever we hit our target h, we know we are at the perfect k.
            if hours_to_eat == h:
                return k
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

Can we improve the brute force approach? Sure our first instinct should be that if we linearly scan all possible ks, that is from the minimum k value to the maximum k value, then it must me it is possible to binary search those values. That means for example 3, given a minimum k of 15, and a maximum k of 30, it makes more sense to start at 22, $$30//15 = 22$$ than it does to start at 15. Then we can also eliminate half of all k values during each iteration.

Time Complexity: $$O(nlog(maxKValue-minKValue))$$ Where $$n$$ is the number of banana piles. $$maxKValue$$ is $$max(piles)$$ and $$minKValue$$ is $$Ceil(sum(piles)/h)$$. The log comes from the halving of the number of valid k values each iteration.

Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # Base Case, must eat 1 pile an hour.
        if h == len(piles):
            return max(piles)
        # Find the min and max values that k can be.
        k_min = math.ceil(sum(piles) / h)
        k_max = max(piles)
        # Initialize our return_k value, since during binary search, we may find
        # an appropriate answer, but since we are jumping around the array, their
        # may be a better answer, so we can't return at the first k that works.
        return_k = k_max
        # set left, l, and right, r, boundaries to k_min, k_max
        l,r = k_min, k_max
        while l < r:
            #calculate our initial k value to be the middle value.
            # l +  (r-1) // 2 to prevent integer overflow, doesn't matter for
            # python but it is good practice for other languages.
            k = l + (r-l) // 2
            # initialize our hours to eat, being 0
            hours_to_eat = 0
            # loop through every pile
            for pile in piles:
                # update our hours to eat, with the time it will take to eat the pile.
                hours_to_eat += math.ceil(pile/k)
            # hours to eat < h, eating too fast, and can move our right boundary
            # hours == h we are eating them all in time, but can still potentially
            # improve.
            # ex 3: 24 is enough to eat in 6 hours, but we know 23 is a
            # better answer. Search for a better answer.
            if hours_to_eat <= h:
                # move right bound to find smaller k.
                r = k
                # update value of our return k
                return_k = min(k,return_k)
            # hours to eat > h
            # eating too slowly to finish
            else:
                # move left bound to find larger k.
                l = k + 1
        # return our return k.
        return return_k
```

</TabItem>
</Tabs>
