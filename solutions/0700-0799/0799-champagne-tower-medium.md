---
description: 'Author: @wingkwong | https://leetcode.com/problems/champagne-tower/'
---

# 0799 - Champagne Tower (Medium)

## Problem Statement

We stack glasses in a pyramid, where the **first** row has `1` glass, the **second** row has `2` glasses, and so on until the 100th row.  Each glass holds one cup of champagne.

Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)

For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png)

Now after pouring some non-negative integer cups of champagne, return how full the `jth` glass in the `ith` row is (both `i` and `j` are 0-indexed.)

**Example 1:**

```
Input: poured = 1, query_row = 1, query_glass = 1
Output: 0.00000
Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.
```

**Example 2:**

```
Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.
```

**Example 3:**

```
Input: poured = 100000009, query_row = 33, query_glass = 17
Output: 1.00000
```

**Constraints:**

* `0 <= poured <= 10^9`
* `0 <= query_glass <= query_row < 100`

## Approach 1: DP

Let $$dp[i][j]$$ be the amount poured to a glass located at row $$i$$ and column $$j$$. We know that the topmost glass is $$poured$$ so the base case is $$dp[0][0] = poured$$. If the glass has excess liquid, then it will fall equal to the glass to the left and the right of it. It means if $$dp[i][j]$$ is greater than $$1$$, then the overflow $$dp[i][j] - 1$$will be equally distributed to the glass to the left $$dp[i + 1][j]$$ and to the right $$dp[i + 1][j + 1]$$. We can just simulate it and return the answer. Since $$dp[queryRow][queryGlass]$$ may exceed $$1$$, we need to return $$1$$in this case.

```cpp
class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        vector<vector<double>> dp(query_row + 2, vector<double>(query_glass + 2));
        // the topmost glass
        dp[0][0] = poured;
        for (int i = 0; i <= query_row; i++) {
            for (int j = 0; j <= query_glass; j++) {
                // check if has any excess liquid
                if (dp[i][j] > 1.0) {
                    // if so, amount - capacity of glass (1.0) = overflow
                    double overflow = dp[i][j] - 1.0;
                    // distribute to the left and right equally
                    dp[i + 1][j] += overflow / 2;
                    dp[i + 1][j + 1] += overflow / 2;
                }
            }
        }
        // dp[query_row][query_glass] may have excess liquid
        // take min to avoid it 
        return min(1.0, dp[query_row][query_glass]);
    }
};
```

We can see that the row $$i$$ depends on $$i - 1$$ row so we can use 1D array to store the state. Let $$dp[j]$$ be the amount poured to a glass located at $$j$$ column. We use $$ndp$$ to store the current state while $$dp$$ state stores the previous state. We swap them for every row, i.e. transit the state from row $$i$$ to row $$i + 1$$.&#x20;

```cpp
class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        vector<double> dp(query_glass + 2);
        // the topmost glass
        dp[0] = poured;
        for (int i = 0; i < query_row; i++) {
            // use ndp to store the current state
            // while dp here is the previous state
            vector<double> ndp(query_glass + 2);
            for (int j = 0; j <= query_glass; j++) {
                // check if has any excess liquid
                if (dp[j] > 1.0) {
                    // if so, amount - capacity of glass (1.0) = overflow
                    double overflow = dp[j] - 1.0;
                    // distribute to the left and right equally
                    ndp[j] += overflow / 2;
                    ndp[j + 1] += overflow / 2;
                }
            }
            // transit the state from row i to row i + 1
            swap(dp, ndp);
        }
        // dp[query_glass] may have excess liquid
        // take min to avoid it
        return min(1.0, dp[query_glass]);
    }
};
```
