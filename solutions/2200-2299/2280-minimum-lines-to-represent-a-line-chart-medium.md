---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart
---

# 2280 - Minimum Lines to Represent a Line Chart (Medium)

## Problem Link

https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart

## Problem Statement

You are given a 2D integer array stockPrices where stockPrices[i] = [dayi, pricei] indicates the price of the stock on day dayi is pricei. A line chart is created from the array by plotting the points on an XY plane with the X-axis representing the day and the Y-axis representing the price and connecting adjacent points. One such example is shown below:

Return the minimum number of lines needed to represent the line chart.

**Example 1:**

```
Input: stockPrices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]
Output: 3
Explanation:
The diagram above represents the input, with the X-axis representing the day and Y-axis representing the price.
The following 3 lines can be drawn to represent the line chart:
- Line 1 (in red) from (1,7) to (4,4) passing through (1,7), (2,6), (3,5), and (4,4).
- Line 2 (in blue) from (4,4) to (5,4).
- Line 3 (in green) from (5,4) to (8,1) passing through (5,4), (6,3), (7,2), and (8,1).
It can be shown that it is not possible to represent the line chart using less than 3 lines.
```

**Example 2:**

```
Input: stockPrices = [[3,4],[1,2],[7,8],[2,3]]
Output: 1
Explanation:
As shown in the diagram above, the line chart can be represented with a single line.
```

**Constraints:**

- 1 <= stockPrices.length <= 10^5
- stockPrices[i].length == 2
- 1 <= day_i, price_i <= 10^9
- All day_i are distinct.

## Approach 1: Greedy

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int minimumLines(vector<vector<int>>& stockPrices) {
        int n = stockPrices.size();
        // one point = no line
        if (n == 1) return 0;
        // > 1 point means at least one line
        long long ans = 1;
        // sort it first as it doesn't mention it's sorted
        // and we want to compare adjacent points
        sort(stockPrices.begin(), stockPrices.end());
        // slope = (y1 - y0) / (x1 - x0)
        // a line is needed when the slope is different
        // to check if the slope is same 
        // use integer multiplcation instead of float dvision to avoid precision problem
        // hence, 
        // slope1 = (y1 - y0) / (x1 - x0)
        // slope2 = (y2 - y1) / (x2 - x1)
        // slope1 = slope2 
        // (y1 - y0) / (x1 - x0) = (y2 - y1) / (x2 - x1)
        // (y1 - y0) * (x2 - x1) = (y2 - y1) * (x1 - x0)

        // the slope for the first line
        long long prev_x = (stockPrices[1][0] - stockPrices[0][0]);
        long long prev_y = (stockPrices[1][1] - stockPrices[0][1]);
        for (int i = 1; i < n; i++) {
            long long cur_x = (stockPrices[i][0] - stockPrices[i - 1][0]);
            long long cur_y = (stockPrices[i][1] - stockPrices[i - 1][1]);
            // different slope -> need a new line
            if (cur_x * prev_y != cur_y * prev_x) {
                ans += 1;
            }
            // update prev_x & prev_y
            prev_x = cur_x;
            prev_y = cur_y;
        }
        return ans;
    }
};
```