---
description: "Author: @Dhanu084 | https://leetcode.com/problems/online-stock-span/"
tags: [Array, Prefix Sum]
---

# 2055 - Plates Between Candles (Medium)

## Problem Link

https://leetcode.com/problems/plates-between-candles/

## Problem Statement

There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters '_' and '|' only, where a '_' represents a plate and a '|' represents a candle.

You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and at least one candle to its right in the substring.

For example, s = `||**||**|*`, and a query [3, 8] denotes the substring `*||**|`. The number of plates between candles in this substring is 2, as each of the two plates has at least one candle in the substring to its left and right.
Return an integer array answer where answer[i] is the answer to the ith query.

**Example 1:**

```
Input: s = "**|**|***|", queries = [[2,5],[5,9]]
Output: [2,3]
Explanation:
- queries[0] has two plates between candles.
- queries[1] has three plates between candles.
```

**Example 2:**

```
Input: s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
Output: [9,0,0,0,0]
Explanation:
- queries[0] has nine plates between candles.
- The other queries have zero plates between candles.
```

**Constraints:**

- 3 <= s.length <= 105
  = s consists of '\*' and '|' characters.
- 1 <= queries.length <= 105
- queries[i].length == 2
- 0 <= left<sub>i</sub> <= right<sub>i</sub> < s.length

## Approach 1: Prefix Sum

Time complexity: $$O(max(q,n))$$ where q is the number of queries and n is the size of input

Space complexity: $$O(n)$$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:
        '''
            In this approach we will use three arrays
            left_candle, right_candle and candle_count.
            * left candle is to store the last left candle index
            * right candle is to store the last right candle index
            * candle count is to store the number of candles
              till a given index
        '''
        n = len(s)
        left_candle, right_candle = [0]*n,[0]*n
        candle_count = [0]*n
        m = len(queries)
        res = [0]*m

        candle = -1
        for i in range(n):
            if s[i] == '|':
                candle = i
            left_candle[i] = candle


        candle = -1
        for i in range(n-1,-1,-1):
            if s[i] == '|':
                candle = i
            right_candle[i] = candle

        count = 0

        for i in range(n):
            if s[i] == '|':
                count+=1
            candle_count[i] = count

        for idx, query in enumerate(queries):
            l, r = query

            '''
                if a plate is not surrounded by candles
                either in left or right then 0 will be the answer
            '''
            if left_candle[r] == -1 or right_candle[l] == -1:
                continue

            ''' if distance is 1 that means both are
                candles and no plates can be between them
                so just take 0
            '''
            distance = left_candle[r]-right_candle[l]

            '''
                if distance > 1 then there may be plates at this distance
                calculate the number of plates only, by
                subtracting the number of candles
            '''
            if distance>1:
                res[idx] = distance+1-(candle_count[left_candle[r]]-candle_count[right_candle[l]]+1)

        return res
```

</TabItem>
</Tabs>
