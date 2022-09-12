---
description: 'Author: @wingkwong, @iraycd | https://leetcode.com/problems/bag-of-tokens/'
tags: [Array, Two Pointers, Greedy, Sorting]
---

# 0948 - Bag of Tokens (Medium) 

## Problem Statement

You have an initial **power** of `power`, an initial **score** of `0`, and a bag of `tokens` where `tokens[i]` is the value of the `ith` token (0-indexed).

Your goal is to maximize your total **score** by potentially playing each token in one of two ways:

- If your current **power** is at least `tokens[i]`, you may play the `ith` token face up, losing `tokens[i]` **power** and gaining `1` **score**.
- If your current **score** is at least `1`, you may play the `ith` token face down, gaining `tokens[i]` **power** and losing `1` **score**.

Each token may be played **at most** once and **in any order**. You do **not** have to play all the tokens.

Return *the largest possible **score** you can achieve after playing any number of tokens*.

**Example 1:**

```
Input: tokens = [100], power = 50
Output: 0
Explanation: Playing the only token in the bag is impossible because you either have too little power or too little score.
```

**Example 2:**

```
Input: tokens = [100,200], power = 150
Output: 1
Explanation: Play the 0th token (100) face up, your power becomes 50 and score becomes 1.
There is no need to play the 1st token since you cannot play it face up to add to your score.
```

**Example 3:**

```
Input: tokens = [100,200,300,400], power = 200
Output: 2
Explanation: Play the tokens in this order to get a score of 2:
1. Play the 0th token (100) face up, your power becomes 100 and score becomes 1.
2. Play the 3rd token (400) face down, your power becomes 500 and score becomes 0.
3. Play the 1st token (200) face up, your power becomes 300 and score becomes 1.
4. Play the 2nd token (300) face up, your power becomes 0 and score becomes 2.
```

**Constraints:**

- `0 <= tokens.length <= 1000`
- `0 <= tokens[i], power < 1064`

## Approach 1: Greedy + Two Pointers

**C++**

<SolutionAuthor name="@wingkwong"/>

```cpp
// Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)
// Space Complexity: O(logN)
// where N is the number of tokens
class Solution {
public:
    int bagOfTokensScore(vector<int>& tokens, int power) {
        // play i-th token face up -> lose tokens[i] power -> choose the smallest one
        // play i-th token face down -> gain tokens[i] power -> choose the largest one
        // hence, sort tokens first
        sort(tokens.begin(), tokens.end());
        // two pointes - l for tracking face up & r for tracking face down
        int l = 0, r = tokens.size() - 1;
        int cur_score = 0, mx_score = 0;
        while (l <= r) {
            // there are 3 cases
            if (tokens[l] <= power) {
                // case 1. play l-th tokens face up if its power <= the current power
                // ---
                // losing tokens[l] power
                power -= tokens[l];
                // and gaining 1 score
                cur_score += 1;
                // cur_score can be mx_score potentially
                mx_score = max(mx_score, cur_score);
                // move the pointer to the right
                l += 1;
            } else if (cur_score >= 1) {
                // case 2. play r-th tokens face down if the current score is at least 1
                // ---
                // gaining tokens[r] power
                power += tokens[r];
                // and losing 1 score
                cur_score -= 1;
                // move the pointer to the left
                r -= 1;
            } else {
                // case 3. impossible to play
				// ---
                // either you don't enough power or enough score
                break;
            }
        }
        return mx_score;
    }
};
```

**Python**

<SolutionAuthor name="@wingkwong"/>

```py
# Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)
# Space Complexity: O(N) - python's inbuilt sort uses TimSort
# where N is the number of tokens
class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        # play i-th token face up -> lose tokens[i] power -> choose the smallest one
        # play i-th token face down -> gain tokens[i] power -> choose the largest one
        # hence, sort tokens first
        tokens.sort()
        # two pointes - l for tracking face up & r for tracking face down
        l, r = 0, len(tokens) - 1
        cur_score = mx_score = 0
        while l <= r:
            # there are 3 cases
            if tokens[l] <= power:
                # case 1. play l-th tokens face up if its power <= the current power
                # ---
                # losing tokens[l] power
                power -= tokens[l]
                # and gaining 1 score
                cur_score += 1
                # cur_score can be mx_score potentially
                mx_score = max(mx_score, cur_score)
                # move the pointer to the right
                l += 1
            elif cur_score >= 1:
                # case 2. play r-th tokens face down if the current score is at least 1
                # ---
                # gaining tokens[r] power
                power += tokens[r]
                # and losing 1 score
                cur_score -= 1
                # move the pointer to the left
                r -= 1
            else:
                # case 3. impossible to play
                # ---
                # either you don't enough power or enough score
                break
        return mx_score
```

**Java**

<SolutionAuthor name="@wingkwong"/>

```java
// Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)
// Space Complexity: O(logN)
// where N is the number of tokens
class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        // play i-th token face up -> lose tokens[i] power -> choose the smallest one
        // play i-th token face down -> gain tokens[i] power -> choose the largest one
        // hence, sort tokens first
        Arrays.sort(tokens);
        // two pointes - l for tracking face up & r for tracking face down
        int l = 0, r = tokens.length - 1;
        int cur_score = 0, mx_score = 0;
        while (l <= r) {
            // there are 3 cases
            if (tokens[l] <= power) {
                // case 1. play l-th tokens face up if its power <= the current power
                // ---
                // losing tokens[l] power
                power -= tokens[l];
                // and gaining 1 score
                cur_score += 1;
                // cur_score can be mx_score potentially
                mx_score = Math.max(mx_score, cur_score);
                // move the pointer to the right
                l += 1;
            } else if (cur_score >= 1) {
                // case 2. play r-th tokens face down if the current score is at least 1
                // ---
                // gaining tokens[r] power
                power += tokens[r];
                // and losing 1 score
                cur_score -= 1;
                // move the pointer to the left
                r -= 1;
            } else {
                // case 3. impossible to play
                // ---
                // either you don't enough power or enough score
                break;
            }
        }
        return mx_score;
    }
}
```

**Go**

<SolutionAuthor name="@iraycd"/>

```golang
// Idea
// ------------------
// Sorting:
// Why sorting?
// We need max power when we consume score
// Both lowest power or greatest power gives us same score of 1
// But 1 score can maximize power, so we have to consume the power in order of descending from score consumed.
// ------------------
// 2 Pointer Method:
// left uses power, right uses score
// Since there is a chance of consuming score even after maxScore is achieved we record max score.
// we still append left if it doesn't match the both power and score cases.

func bagOfTokensScore(tokens []int, power int) int {
	sort.Ints(tokens)
	score := 0
	left := 0
	maxScore := 0
	right := len(tokens) - 1
	for left <= right { // Left can be right in the case of [100,200] with power 150
		if power >= tokens[left] {
			power = power - tokens[left]
			score++
			left++
		} else if score >= 1 {
			power = power + tokens[right]
			right--
			score--
		} else { // Needed in the case of [100] with power 50, else it will result in infinite loop
			break
		}
		maxScore = max(maxScore, score)
	}
	return maxScore
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```

