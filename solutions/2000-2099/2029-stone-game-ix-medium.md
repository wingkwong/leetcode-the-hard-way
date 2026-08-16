---
description: 'Author: @wkw | https://leetcode.com/problems/stone-game-ix'
---

# 2029 - Stone Game IX (Medium) 

## Problem Link

https://leetcode.com/problems/stone-game-ix

## Problem Statement

Alice and Bob continue their games with stones. There is a row of n stones, and each stone has an associated value. You are given an integer array `stones`, where `stones[i]` is the **value** of the `ith` stone.

Alice and Bob take turns, with **Alice** starting first. On each turn, the player may remove any stone from `stones`. The player who removes a stone **loses** if the **sum** of the values of **all removed stones** is divisible by `3`. Bob will win automatically if there are no remaining stones (even if it is Alice's turn).

Assuming both players play **optimally**, return `true` *if Alice wins and* `false` *if Bob wins*.

**Example 1:**

```
Input: stones = [2,1]
Output: true
Explanation: The game will be played as follows:
- Turn 1: Alice can remove either stone.
- Turn 2: Bob removes the remaining stone. 
The sum of the removed stones is 1 + 2 = 3 and is divisible by 3. Therefore, Bob loses and Alice wins the game.
```

**Example 2:**

```
Input: stones = [2]
Output: false
Explanation: Alice will remove the only stone, and the sum of the values on the removed stones is 2. 
Since all the stones are removed and the sum of values is not divisible by 3, Bob wins the game.
```

**Example 3:**

```
Input: stones = [5,1,2,4,3]
Output: false
Explanation: Bob will always win. One possible way for Bob to win is shown below:
- Turn 1: Alice can remove the second stone with value 1. Sum of removed stones = 1.
- Turn 2: Bob removes the fifth stone with value 3. Sum of removed stones = 1 + 3 = 4.
- Turn 3: Alices removes the fourth stone with value 4. Sum of removed stones = 1 + 3 + 4 = 8.
- Turn 4: Bob removes the third stone with value 2. Sum of removed stones = 1 + 3 + 4 + 2 = 10.
- Turn 5: Alice removes the first stone with value 5. Sum of removed stones = 1 + 3 + 4 + 2 + 5 = 15.
Alice loses the game because the sum of the removed stones (15) is divisible by 3. Bob wins the game.
```

**Constraints:**

- `1 <= stones.length <= 1e5`
- `1 <= stones[i] <= 1e4`

## Approach 1: Construction

When $cnt[0]$ is odd, one remainder-$0$ stone remains after pairing the others. Taking this stone does not change the current sum modulo $3$, but it switches whose turn it is. This extra turn switch reverses the usual advantage between Alice and Bob.

Assuming $cnt[1] >= cnt[2]$, the opposite case is symmetric. Alice starts with a remainder-$1$ stone. After the extra remainder-$0$ move switches the turn order, Alice is forced to consume the remainder-$1$ stones while Bob consumes the remainder-$2$ stones. Alice also uses one additional remainder-$1$ stone to start the game, so having only one or two more remainder-$1$ stones is insufficient: Bob can avoid losing until all stones are removed.

If $cnt[1]$ exceeds $cnt[2]$ by at least $3$, a remainder-$1$ stone is still available when Bob is forced to move from a sum whose remainder is $2$. Taking it makes the sum divisible by $3$, so Bob loses. The same logic applies when remainder-$2$ stones are more numerous, so Alice wins exactly when $abs(cnt[1] - cnt[2]) > 2$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def stoneGameIX(self, stones: List[int]) -> bool:
        cnt = [0, 0, 0]
        for s in stones: cnt[s % 3] += 1
        return cnt[1] > 0 and cnt[2] > 0 if cnt[0] % 2 == 0 else abs(cnt[1] - cnt[2]) > 2
```

</TabItem>
</Tabs>