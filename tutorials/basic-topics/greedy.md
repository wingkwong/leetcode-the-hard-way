---
title: 'Greedy'
description: 'Designing greedy algorithms to find a greedy strategy that produces an optimal solution to the problem'
# hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - greedy
  - algorithm
---

<TutorialAuthors names="@abhishek-sultaniya"/>

## Overview

Greedy is a strategy to solve various problems optimally.A greedy algorithm constructs a solution to the problem by always making a
choice that looks the best at the moment. A greedy algorithm never takes back
its choices, but directly constructs the final solution. For this reason, greedy
algorithms are usually very efficient.

Rules:

1. Always pick the best choice at any step.

2. Works on the assumption that by picking a local optimum solution at each step we will reach a global optimum.

3. The greedy algorithm never reconsiders its choices.

## Example 1: [605 -Can Place Flowers](https://leetcode.com/problems/can-place-flowers/)

```
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
```

For a greedy solution, we would solve in such a way that we will always have the best choice at every max.Our task is to calculate maximum flowers we can plant.Its simple that if there are three consecutive zeroes then the middle one will be planted. But if we have to calculate maximum then we will miss 2 side case this way.

Case 1: 001....
Here intially we have just 2 consecutive zeroes but we can plant at first place.So we will consider this case too.

Case 2: ........100
Here at the end we have just 2 consecutive zeroes but we can plant at last place.So we will consider this case too.

```cpp
class Solution {
public:
	bool canPlaceFlowers(vector<int>& flowerbed, int p) {
		int n = flowerbed.size();
		// count variable will calculate max flowers we can plant.
		int count = 0;
		if (flowerbed[0] == 0 && n == 1)
			count++;
		// The following will cover case1
		if (n > 1 && flowerbed[0] == 0 && flowerbed[1] == 0) {
			count++;
			flowerbed[0] = 1;
		}
		// Mid approach to check 3 consecutive zeroes.
		for (int i = 1; i < n - 1; i++) {
			if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
				flowerbed[i] = 1;
				count++;
			}
		}
		// The following will cover case2
		if (n > 2 && flowerbed[n - 2] == 0 && flowerbed[n - 1] == 0)
			count++;
        return count>=p;
	}
};
```
## Example 2: [322 - Coin Change](https://leetcode.com/problems/coin-change/)

```
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
```

This problem uses the concept of dynamic programming along with greedy.Here, we want to choose such coins whose sum of coins selected equals amount and count_coins is minimized.
See, Right from here we can say it is a DP problem, as it requires minimization (optimization).The naive idea for the problem would be to choose coins in all possible ways including duplicates (as number of each coin is infinite) that sums upto amount and then from all the possible ways, we select the way with minimum number of coins. But this simple naive idea of greedy will lead to TLE.Sowe must use DP.

```cpp
class Solution {
public:
	int coinChange(vector<int>& coins, int amount) {
		vector<int> dp(amount+1,amount+1);
		dp[0]=0;
		for(auto x:coins){
			for(int i=x;i<=amount;i++){
				dp[i]=min(dp[i],dp[i-x]+1);
			}
		}
		return dp[amount]>=amount+1 ? -1:dp[amount];
	}
};
```

export const suggestedProblems = [
  {
    "problemName": "455- Assign Cookies",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/assign-cookies/",
    "solutionLink": ""
  },
  {
    "problemName": "860 - Lemonade Change",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/lemonade-change/",
    "solutionLink": ""  
  },
  {
    "problemName": "1005- Maximize Sum Of Array After K Negations",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/",
    "solutionLink": ""
  },
  {
    "problemName": "45- Jump Game II",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/jump-game-ii/",
    "solutionLink": ""
  },
  {
    "problemName": "402- Remove K Digits",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/remove-k-digits/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />
