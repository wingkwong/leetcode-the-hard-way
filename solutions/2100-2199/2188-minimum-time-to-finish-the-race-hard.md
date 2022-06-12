---
description: >-
  Author: @heiheihang |
  https://leetcode.com/problems/minimum-time-to-finish-the-race/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2188 - Minimum Time to Finish the Race (Hard)

## Problem Link

https://leetcode.com/problems/minimum-time-to-finish-the-race/

## Problem Statement

You are given a **0-indexed** 2D integer array `tires` where `tires[i] = [fi, ri]` indicates that the `ith` tire can finish its `xth` successive lap in `fi * ri(x-1)` seconds.

* For example, if `fi = 3` and `ri = 2`, then the tire would finish its `1st` lap in `3` seconds, its `2nd` lap in `3 * 2 = 6` seconds, its `3rd` lap in `3 * 22 = 12` seconds, etc.

You are also given an integer `changeTime` and an integer `numLaps`.

The race consists of `numLaps` laps and you may start the race with **any** tire. You have an **unlimited** supply of each tire and after every lap, you may **change** to any given tire (including the current tire type) if you wait `changeTime` seconds.

Return _the **minimum** time to finish the race._

**Example 1:**

```
Input: tires = [[2,3],[3,4]], changeTime = 5, numLaps = 4
Output: 21
Explanation: 
Lap 1: Start with tire 0 and finish the lap in 2 seconds.
Lap 2: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.
Lap 3: Change tires to a new tire 0 for 5 seconds and then finish the lap in another 2 seconds.
Lap 4: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.
Total time = 2 + 6 + 5 + 2 + 6 = 21 seconds.
The minimum time to complete the race is 21 seconds.
```

**Example 2:**

```
Input: tires = [[1,10],[2,2],[3,4]], changeTime = 6, numLaps = 5
Output: 25
Explanation: 
Lap 1: Start with tire 1 and finish the lap in 2 seconds.
Lap 2: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.
Lap 3: Change tires to a new tire 1 for 6 seconds and then finish the lap in another 2 seconds.
Lap 4: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.
Lap 5: Change tires to tire 0 for 6 seconds then finish the lap in another 1 second.
Total time = 2 + 4 + 6 + 2 + 4 + 6 + 1 = 25 seconds.
The minimum time to complete the race is 25 seconds. 
```

**Constraints:**

* `1 <= tires.length <= 10^5`
* `tires[i].length == 2`
* `1 <= fi, changeTime <= 10^5`
* `2 <= ri <= 10^5`
* `1 <= numLaps <= 1000`

## Approach 1: DP

The general approach is to store the minimum time required to travel each lap. We must make the following observation:

* To travel $$n$$ laps, we must use the same tire for $$n$$ laps, or we can use the set of tires used to travel $$a$$ laps and another set of tires used to travel $$b$$ laps such that $$a+b=n$$.
* Before we can find an optimal set of tires to travel $$n$$ laps, we can only consider using the same tire to travel $$1$$ to $$n$$ laps

We can now break this problem into 2 parts:

1. Find the shortest time to travel $$n$$ laps when we can only use 1 tire at a time
2. Find the shortest time to travel $$n$$ laps by potentially choosing the time needed to travel $$a$$ laps and the time needed to travel $$b$$ laps such that we can travel $$n$$ laps with $$time(a)+time(b)+changeTime$$

The first part is straightforward as we only need to iterate each tire for $$numLaps$$ times. However, we need some optimizations to stop iterating when the following condition is met

```
f_i * (r_i) ^ n >= time[(n+1)//2] + time[(n+1)//2] + changeTime
```

Notice that the above condition is not optimally the upper bound, but it is good enough to break the loop. We know that we can stop here because using the same tire increases exponentially, and further combining previous sets of tires increases linearly.

The second part involves looking for a combination of laps for each lap. For example, if we want to find the minimum time for running 9 laps, we need to find the following

* `dp[1] + dp[8] + changeTime`
* `dp[2] + dp[7] + changeTime`
* `dp[3] + dp[6] + changeTime`
* `dp[4] + dp[5] + changeTime`

Of course, if there exists a tire running 9 laps in a row that is fast than the above, we keep it.

A small optimisation here is that instead of generating repeating pairs (\[1,8] and \[8,1]), we can cut each loop by half.

Here is a dry run of the following test case:

```
tires = [2,3], [3,3], [3, 2], changeTime = 5, numLaps = 6
```

![image](https://user-images.githubusercontent.com/35857179/168303953-913d229c-ce49-4480-8810-a7b397856140.png)

![image](https://user-images.githubusercontent.com/35857179/168303969-2225c532-7582-4940-ab0f-5a76a3662e60.png)

![image](https://user-images.githubusercontent.com/35857179/168303988-5ec8284a-8690-4702-a363-a14a2f963cd9.png)

![image](https://user-images.githubusercontent.com/35857179/168304003-39cee495-675e-4b33-b813-4fd1ee280ea8.png)

![image](https://user-images.githubusercontent.com/35857179/168304019-dfb9f067-4556-44e8-9c2e-c19e42f8415c.png)

![image](https://user-images.githubusercontent.com/35857179/168304028-cf195b2c-3e05-4736-b950-a0c5851fcc20.png)

<SolutionAuthor name="@heiheihang"/>

```python
def minimumFinishTime(self, tires: List[List[int]], changeTime: int, numLaps: int) -> int:

    # initialize DP Array
    # it keeps track of the shortest time needed to finish each lap
    dp = [float('inf')] * (numLaps + 1)

    # initialize the shortest time needed to finish each lap with 1 tire only
    for f, r in tires:

        # initialize the finishing time
        time = f

        # initialize the number of laps
        cnt = 1

        # hard upper limit is numLaps
        while(cnt <= numLaps):

            # a terminating condition if continually running the same lap is slower
            if(dp[(cnt + 1) // 2] * 2 + changeTime <= time):
                dp[cnt] = min(dp[(cnt + 1) // 2] * 2 + changeTime, dp[cnt])
                break
            else:
                # update the shortest time needed to finish cnt laps
                dp[cnt] = min(dp[cnt], time)

            # update finishing time and number of laps
            time += f * (r ** (cnt))
            cnt += 1

    # check for all small + big = i
    for i in range(2, numLaps+1):
        for j in range(1, i // 2 + 1):

            small = j
            big = i - j

            # remember to add changeTime if we combine two previous sets of tires
            dp[i] = min(dp[i], dp[small] + dp[big] + changeTime)

    return dp[-1]

```
