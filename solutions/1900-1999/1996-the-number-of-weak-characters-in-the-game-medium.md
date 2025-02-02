---
description: 'Author: @wkw, @iraycd | https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/'
tags: [Array, Stack, Greedy, Sorting, Monotonic Stack]
---

# 1996 - The Number of Weak Characters in the Game (Medium)

## Problem Statement

You are playing a game that contains multiple characters, and each of the characters has **two** main properties: **attack** and **defense**. You are given a 2D integer array `properties` where `properties[i] = [attacki, defensei]` represents the properties of the `ith` character in the game.

A character is said to be **weak** if any other character has **both** attack and defense levels **strictly greater** than this character's attack and defense levels. More formally, a character `i` is said to be **weak** if there exists another character `j` where `attackj > attacki` and `defensej > defensei`.

Return _the number of **weak** characters_.

**Example 1:**

```
Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.
```

**Example 2:**

```
Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.
```

**Example 3:**

```
Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.
```

**Constraints:**

- `2 <= properties.length <= 105`
- `properties[i].length == 2`
- `1 <= attacki, defensei <= 105`

## Approach 1: Hash Map

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // the idea is to
    // 1. rearrange the order of attack and defense
    // 2. count weak characters (those defenses less than the current maximum defense)
    // 3. update the maximum defense
    int numberOfWeakCharacters(vector<vector<int>>& p) {
        // the final answer to be returned
        int weakCharacters = 0;
        // record maximum defense. since 1 <= defense_i <= 10 ^ 5
        // we can set the init value to x where x < 1
        int maxDefense = 0;
        // use a hash map to map the attack and defense with greater<int> as a key_compare
        map<int, vector<int>, greater<int>> m;
        for(auto x : p) m[x[0]].push_back(x[1]);
        // for each attack
        for(auto x : m) {
            // we count the number of weak characters
            // and add it to `weakCharacters`
            weakCharacters += count_if(x.second.begin(), x.second.end(), [&](int curDefense){ return curDefense < maxDefense;});
            // then update `maxDefense` which is the maximum value in current defenses
            maxDefense = max(maxDefense, *max_element(x.second.begin(), x.second.end()));
        }
        return weakCharacters;
    }
};
```

## Approach 2: Sort with custom comparator

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // the idea is to
    // 1. rearrange the order of attack and defense
    // 2. count weak characters (those defenses less than the current maximum defense)
    // 3. update the maximum defense
    int numberOfWeakCharacters(vector<vector<int>>& p) {
        // the final answer to be returned
        int weakCharacters = 0;
        // record maximum defense. since 1 <= defense_i <= 10 ^ 5
        // we can set the init value to x where x < 1
        int maxDefense = 0;
        // sort properties with custom sort comparator
        sort(p.begin(), p.end(), [](const vector<int>& x, const vector<int>& y) {
            // if the attack is same, then sort defense in ascending order
            // otherwise, sort attack in in descending order
           return x[0] == y[0] ? x[1] < y[1] : x[0] > y[0];
        });
        // by doing so, we don't need to compare starting from the back
        for (auto& x : p) {
            // x[1] is defense of properties[i]
            // if it is less than current maxDefense, then it means it is a weak character
            weakCharacters += x[1] < maxDefense;
            // update maxDefense
            maxDefense = max(maxDefense, x[1]);
        }
        return weakCharacters;
    }
};
```

<SolutionAuthor name="@wkw"/>

```py
class Solution:
    # the idea is to
    # 1. rearrange the order of attack and defense
    # 2. count weak characters (those defenses less than the current maximum defense)
    # 3. update the maximum defense
    def numberOfWeakCharacters(self, p: List[List[int]]) -> int:
        # the final answer to be returned
        weakCharacters = 0
        # record maximum defense. since 1 <= defense_i <= 10 ^ 5
        # we can set the init value to x where x < 1
        maxDefense = 0
        # sort properties with custom sort comparator
        # if the attack is same, then sort defense in descending order
        # otherwise, sort attack in in ascending order
        p.sort(key = lambda x: (x[0], -x[1]), reverse = True)
		# or we can do it like
		# p.sort(key = lambda x: (-x[0], x[1]))
        for _, defense in p:
            # if it is less than current maxDefense, then it means it is a weak character
            if defense < maxDefense: weakCharacters += 1
            # update maxDefense
            else: maxDefense = defense
        return weakCharacters
```

<SolutionAuthor name="@iraycd" />

```golang
// the idea is to
// 1. rearrange the order of attack and defense
// 2. count weak characters (those defenses less than the current maximum defense)
// 3. update the maximum defense
func numberOfWeakCharacters(properties [][]int) int {

    // Weak starts at 0, this is the variable which is going to be returned
    weekCharacterCount := 0
    maxDefence := 0

    // Sorting the order of the desending order of the attack
    sort.Sort(ByAttack(properties))
    for _, elem := range properties {
        // Appending the count if the current element is less than the max defense
        // Else change the max defence
        if(elem[1] < maxDefence){
            weekCharacterCount++;
        }else {
            maxDefence = elem[1]
        }
    }
    return weekCharacterCount
}

// Custom sorting Logic by attack
type ByAttack [][]int
func (a ByAttack) Len() int           { return len(a) }
func (a ByAttack) Less(i, j int) bool {
    if(a[i][0] == a[j][0]){
        return a[i][1] < a[j][1]
    }
    return a[i][0] > a[j][0]
}
func (a ByAttack) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
```
