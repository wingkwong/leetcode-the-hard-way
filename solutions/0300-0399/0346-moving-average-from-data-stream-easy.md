---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/moving-average-from-data-stream/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0346 - Moving Average from Data Stream (Easy)

## Problem Link

https://leetcode.com/problems/moving-average-from-data-stream/

## Problem Statement

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the `MovingAverage` class:

* `MovingAverage(int size)` Initializes the object with the size of the window `size`.
* `double next(int val)` Returns the moving average of the last `size` values of the stream.

**Example 1:**

```
Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3
```

**Constraints:**

* `1 <= size <= 1000`
* `-10^5 <= val <= 10^5`
* At most `10^4` calls will be made to `next`.

## Approach 1: Deque

We define a deque $$d$$ to store the values, $$sum$$ to store the sum. If this is not a sliding window problem, for every move, we add the current value to $$sum$$ and output $$sum / (int) d.size()$$.

```cpp
deque<int> d;
int sum = 0;
for (auto x : nums) {
    sum += x;
    d.push_back(x);
    cout << (double) sum / (int) d.size() << endl;
}
```

In general, for sliding window, we have a pointer to track if it is within the window or not. Here we can check the size of $$d$$. If it already has $$n$$ elements, then we need to remove the one from the front (i.e. the leftmost one) before pushing the next one to the back. We also need to subtract the old value and add the new value to $$sum$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class MovingAverage {
public:
    deque<int> d;
    int n, sum;
    MovingAverage(int size) {
        n = size;
        sum = 0;
    }
    
    double next(int val) {
        // keep track the current sum to avoid recalculation
        sum += val;
        // window size is n. need to remove the first one
        if (d.size() == n) {
            // substract the first value
            sum -= d.front();
            // remove it from the deque
            d.pop_front();
        }
        // add the new value
        d.push_back(val);
        // use double as '/' is integer division
        return (double) sum / (int) d.size();
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage* obj = new MovingAverage(size);
 * double param_1 = obj->next(val);
 */
```
