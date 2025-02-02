---
description: 'Author: @wkw | https://leetcode.com/problems/push-dominoes/'
tags: [Two Pointers, String, Dynamic Programming]
---

# 0838 - Push Dominoes (Medium)

## Problem Link

https://leetcode.com/problems/push-dominoes/

## Problem Statement

There are `n` dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

You are given a string `dominoes` representing the initial state where:

- `dominoes[i] = 'L'`, if the `ith` domino has been pushed to the left,
- `dominoes[i] = 'R'`, if the `ith` domino has been pushed to the right, and
- `dominoes[i] = '.'`, if the `ith` domino has not been pushed.

Return _a string representing the final state_.

**Example 1:**

```
Input: dominoes = "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.
```

**Example 2:**

```
Input: dominoes = ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
```

**Constraints:**

- `n == dominoes.length`
- `1 <= n <= 105`
- `dominoes[i]` is either `'L'`, `'R'`, or `'.'`.

## Approach 1: Two Pointers

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string pushDominoes(string dominoes) {
        // l is the left pointer
        int l = 0, n = dominoes.size();
        // r is the right pointer
        for (int r = 0; r < n; r++) {
            if (dominoes[r] == '.') {
                // case 1. meeting `.`, then skip it
                continue;
            } else if ((dominoes[r] == dominoes[l]) || (dominoes[l] == '.' && dominoes[r] == 'L')) {
                // case 2. both end is equal, i.e. dominoes[r] == dominoes[l]
                // then fill all the dots between both end
                // e.g. L....L -> LLLLLL
                // e.g. R....R -> RRRRRR
                // case 2.1 if the left end is . and the right end is L,
                // i.e. dominoes[l] == '.' && dominoes[r] == 'L'
                // then we need to fill them from `l` to `r` in this case
                for (int k = l; k < r; k++) dominoes[k] = dominoes[r];
            } else if (dominoes[l] == 'L' && dominoes[r] == 'R') {
                // case 3. left end is L and right end is R
                // e.g. L.....R
                // then do nothing
            }  else if (dominoes[l] == 'R' && dominoes[r] == 'L') {
                // case 4. left end is R and right end is L
                // if we have odd number of dots between them (let's say m dots),
                // then we can only add (m / 2) Ls and (m / 2) Rs.
                // p.s `/` here is integer division. e.g. 3 / 2 = 1
                // e.g. R...L -> RR.LL
                // if we have even number of dots between them (let's say m dots),
                // then we can only add (m / 2) Ls and (m / 2) Rs.
                // e.g. R....L -> RRRLLL
                int m = (r - l - 1) / 2;
                for (int k = 1; k <= m; k++) dominoes[r - k] = 'L', dominoes[l + k] = 'R';
            }
            // update left pointer
            l = r;
        }
        // case 5. if the left dominoe is `R`, then fill all 'R' till the end
        // e.g. LL.R. -> LL.RR
        if (dominoes[l] == 'R') for (int k = l; k < n; k++) dominoes[k] = 'R';
        return dominoes;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public String pushDominoes(String dominoes) {
        char[] d = dominoes.toCharArray();
        // l is the left pointer
        int l = 0, n = dominoes.length();
        // r is the right pointer
        for (int r = 0; r < n; r++) {
            if (d[r] == '.') {
                // case 1. meeting `.`, then skip it
                continue;
            } else if ((d[r] == d[l]) || (d[l] == '.' && d[r] == 'L')) {
                // case 2. both end is equal, i.e. d[r] == d[l]
                // then fill all the dots between both end
                // e.g. L....L -> LLLLLL
                // e.g. R....R -> RRRRRR
                // case 2.1 if the left end is . and the right end is L,
                // i.e. d[l] == '.' && d[r] == 'L'
                // then we need to fill them from `l` to `r` in this case
                for (int k = l; k < r; k++) d[k] = d[r];
            } else if (d[l] == 'L' && d[r] == 'R') {
                // case 3. left end is L and right end is R
                // e.g. L.....R
                // then do nothing
            }  else if (d[l] == 'R' && d[r] == 'L') {
                // case 4. left end is R and right end is L
                // if we have odd number of dots between them (let's say m dots),
                // then we can only add (m / 2) Ls and (m / 2) Rs.
                // p.s `/` here is integer division. e.g. 3 / 2 = 1
                // e.g. R...L -> RR.LL
                // if we have even number of dots between them (let's say m dots),
                // then we can only add (m / 2) Ls and (m / 2) Rs.
                // e.g. R....L -> RRRLLL
                int m = (r - l - 1) / 2;
                for (int k = 1; k <= m; k++) {
                    d[r - k] = 'L';
                    d[l + k] = 'R';
                }
            }
            // update left pointer
            l = r;
        }
        // case 5. if the left dominoe is `R`, then fill all 'R' till the end
        // e.g. LL.R. -> LL.RR
        if (d[l] == 'R') for (int k = l; k < n; k++) d[k] = 'R';
        return new String(d);
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        d = list(dominoes)
        # l is the left pointer
        l, n = 0, len(dominoes)
        # r is the right pointer
        for r in range(n):
            if d[r] == '.':
                # case 1. meeting `.`, then skip it
                continue
            elif (d[r] == d[l]) or (d[l] == '.' and d[r] == 'L'):
                # case 2. both end is equal, i.e. d[r] == d[l]
                # then fill all the dots between both end
                # e.g. L....L -> LLLLLL
                # e.g. R....R -> RRRRRR
                # case 2.1 if the left end is . and the right end is L,
                # i.e. d[l] == '.' && d[r] == 'L'
                # then we need to fill them from `l` to `r` in this case
                for k in range(l, r):
                    # case 3. left end is L and right end is R
                    # e.g. L.....R
                    # then do nothing
                    d[k] = d[r]
            elif d[l] == 'L' and d[r] == 'R':
                # case 3. left end is L and right end is R
                # e.g. L.....R
                # then do nothing
                pass
            elif d[l] == 'R' and d[r] == 'L':
                # case 4. left end is R and right end is L
                # if we have odd number of dots between them (let's say m dots),
                # then we can only add (m // 2) Ls and (m // 2) Rs.
                # p.s // here is integer division. e.g. 3 // 2 = 1
                # e.g. R...L -> RR.LL
                # if we have even number of dots between them (let's say m dots),
                # then we can only add (m // 2) Ls and (m // 2) Rs.
                # e.g. R....L -> RRRLLL
                m = (r - l - 1) // 2
                for k in range(1, m + 1):
                    d[r - k] = 'L'
                    d[l + k] = 'R'
            # update left pointer
            l = r

        # case 5. if the left dominoe is `R`, then fill all 'R' till the end
        # e.g. LL.R. -> LL.RR
        if d[l] == 'R':
            for k in range(l, n):
                d[k] = 'R'

        return ''.join(d)
```

</TabItem>
</Tabs>
