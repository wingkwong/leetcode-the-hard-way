---
description: 'Author: @wingkwong | https://leetcode.com/problems/count-the-hidden-sequences/'
---

# 2145 - Count the Hidden Sequences (Medium)

## Problem Statement

You are given a **0-indexed** array of `n` integers `differences`, which describes the **differences** between each pair of **consecutive** integers of a **hidden** sequence of length `(n + 1)`. More formally, call the hidden sequence `hidden`, then we have that `differences[i] = hidden[i + 1] - hidden[i]`.

You are further given two integers `lower` and `upper` that describe the **inclusive** range of values `[lower, upper]` that the hidden sequence can contain.

* For example, given `differences = [1, -3, 4]`, `lower = 1`, `upper = 6`, the hidden sequence is a sequence of length `4` whose elements are in between `1` and `6` (**inclusive**).
  * `[3, 4, 1, 5]` and `[4, 5, 2, 6]` are possible hidden sequences.
  * `[5, 6, 3, 7]` is not possible since it contains an element greater than `6`.
  * `[1, 2, 3, 4]` is not possible since the differences are not correct.

Return _the number of **possible** hidden sequences there are._ If there are no possible sequences, return `0`.

**Example 1:**

```
Input: differences = [1,-3,4], lower = 1, upper = 6
Output: 2
Explanation: The possible hidden sequences are:
- [3, 4, 1, 5]
- [4, 5, 2, 6]
Thus, we return 2.
```

**Example 2:**

```
Input: differences = [3,-4,5,1,-2], lower = -4, upper = 5
Output: 4
Explanation: The possible hidden sequences are:
- [-3, 0, -4, 1, 2, 0]
- [-2, 1, -3, 2, 3, 1]
- [-1, 2, -2, 3, 4, 2]
- [0, 3, -1, 4, 5, 3]
Thus, we return 4.
```

**Example 3:**

```
Input: differences = [4,-7,2], lower = 3, upper = 6
Output: 0
Explanation: There are no possible hidden sequences. Thus, we return 0.
```

**Constraints:**

* `n == differences.length`
* `1 <= n <= 10^5`
* `-10^5 <= differences[i] <= 10^5`
* `-10^5 <= lower <= upper <= 10^5`

## Approach 1: Moving up and down

Note that we just need to return the **number** of possible hidden sequences. Supposing `hidden[0] = 0`,  we can calculate the next value by `differences`, i.e. `hidden[i + 1] = hidden[i] + differences[i]`. Here we just need to record the max and min values and calculate the possible ranges by moving the hidden array up and down within upper and lower range.

If we move the hidden array up (i.e. +1 to each element) until the maximum value reaches upper boundary, we can move `upper - max` steps. Similarly, if we move down (i.e. -1 to each element), then we can move `min - lower` steps. Therefore, the answer is `(upper - max) - (min - lower) + 1`.  We need to add 1 here because this is the original hidden array without moving.

Another way to think about it is that we first include the whole boundary which is `(upper - lower)` and we exclude the fixed area `(max - min)`.  In this case, we will also get the same answer `(upper - lower) - (max - min) + 1`.

### C++

```cpp
class Solution {
public:
    int numberOfArrays(vector<int>& differences, int lower, int upper) {
        long long sum = 0, mx = 0, mi = 0;
        for (auto x : differences) {
            sum += x;
            mx = max(mx, sum);
            mi = min(mi, sum);
        }
        return max(upper - lower - (mx - mi) + 1, 0LL);
    }
};
```

### Kotlin

```kotlin
class Solution {
    fun numberOfArrays(differences: IntArray, lower: Int, upper: Int): Int {
        var mi = 0L
        var mx = 0L
        var sum = 0L
        for (x in differences) {
            sum += x
            mi = minOf(mi, sum)
            mx = maxOf(mx, sum)
        }
        return maxOf(upper - lower - (mx - mi) + 1, 0L).toInt()
    }
}
```

### Python3

```python
class Solution:
    def numberOfArrays(self, differences: List[int], lower: int, upper: int) -> int:
        hidden = list(accumulate(differences, initial = 0))
        return max((upper - lower) - (max(hidden) - min(hidden)) + 1, 0)
```

Time Complexity: O(n)

Space Complexity: O(1)
