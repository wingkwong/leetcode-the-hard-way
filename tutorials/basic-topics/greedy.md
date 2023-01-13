---
title: 'Greedy'
description: 'Designing greedy algorithms to find a greedy strategy that produces an optimal solution to the problem'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - greedy
  - algorithm
---

<TutorialAuthors names="@abhishek-sultaniya, @wingkwong"/>

## Overview

A greedy algorithm is a type of algorithmic approach that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum. In other words, at each step, it chooses the option that looks the best at that moment without considering the potential impact of the decision on future steps.

This algorithm is mainly used for optimization problems where the goal is to find the best solution among a set of possibilities. The solutions are constructed incrementally, with the algorithm making the locally optimal choice at each stage.

A Greedy algorithm is simple and easy to implement, but it doesn't always give an optimal solution. It can be used to solve problems such as scheduling, Huffman coding, and finding the shortest path in a graph.

Overall, the Greedy algorithm is a useful approach for solving optimization problems, but it should be used with caution, as it may not always lead to the best global solution.

## Example 1: [0605 - Can Place Flowers](https://leetcode.com/problems/can-place-flowers/)

> You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
>
> Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

For a greedy solution, we would solve in such a way that we will always have the best choice at every max. Our task is to calculate maximum flowers we can plant. Its simple that if there are three consecutive zeroes then the middle one will be planted. But if we have to calculate maximum then we will miss 2 side case this way.

**Case 1: 001....**

Here intially we have just 2 consecutive zeroes but we can plant at first place. So we will consider this case too.

**Case 2: ...100**

Here at the end we have just 2 consecutive zeroes but we can plant at last place. So we will consider this case too.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@abhishek-sultaniya"/>

```cpp
class Solution {
public:
	bool canPlaceFlowers(vector<int>& flowerbed, int p) {
      int n = flowerbed.size();
      // count variable will calculate max flowers we can plant
      int count = 0;
      if (flowerbed[0] == 0 && n == 1) {
        count++;
      }
      // The following will cover case 1
      if (n > 1 && flowerbed[0] == 0 && flowerbed[1] == 0) {
        count++;
        flowerbed[0] = 1;
      }
      // Mid approach to check 3 consecutive zeroes
      for (int i = 1; i < n - 1; i++) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
          flowerbed[i] = 1;
          count++;
        }
      }
      // The following will cover case 2
      if (n > 2 && flowerbed[n - 2] == 0 && flowerbed[n - 1] == 0) {
        count++;
      }
      return count >= p;
	}
};
```
</TabItem>
</Tabs>

## Example 2: [455 - Assign Cookies](https://leetcode.com/problems/assign-cookies/)


> Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
>
> Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number

This problem uses the concept of greedy. Our aim is to just assign the cookies starting from the child with less greediness to maximize the number of happy children. So we will sort greediness of child and size of cookies too. Then as soon as a child gets the cookie, we move to next child. We are using greedy in such a way that if child will less greediness cannot get a cookie, then all children with higher greediness will also not get that cookie.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@abhishek-sultaniya"/>

```cpp
class Solution {
public:
	int findContentChildren(vector<int>& g, vector<int>& s) {
		sort(s.begin(), s.end());
		sort(g.begin(), g.end());
		int ans = 0;
		for (int j = 0; j < s.size() && ans < g.size(); ++j) {
			if (g[ans] <= s[j]) {
				ans++;
			}
		}
		return ans;
	}
};
```
</TabItem>
</Tabs>

export const suggestedProblems = [
  {
    "problemName": "0561 - Array Partition",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/array-partition/",
    "solutionLink": ""
  },
  {
    "problemName": "0860 - Lemonade Change",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/lemonade-change/",
    "solutionLink": ""  
  },
  {
    "problemName": "1005 - Maximize Sum Of Array After K Negations",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/",
    "solutionLink": ""
  },
  {
    "problemName": "0045 - Jump Game II",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/jump-game-ii/",
    "solutionLink": ""
  },
  {
    "problemName": "0402 - Remove K Digits",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/remove-k-digits/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />
