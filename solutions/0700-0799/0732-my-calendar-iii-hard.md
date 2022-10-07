---
description: 'Author: @wingkwong | https://leetcode.com/problems/my-calendar-iii/'
tags: [Binary Search, Design, Segment Tree, Ordered Set]
---

# 0732 - My Calendar III (Hard) 

## Problem Link

https://leetcode.com/problems/my-calendar-iii/

## Problem Statement

A `k`-booking happens when `k` events have some non-empty intersection (i.e., there is some time that is common to all `k` events.)

You are given some events `[start, end)`, after each given event, return an integer `k` representing the maximum `k`-booking between all the previous events.

Implement the `MyCalendarThree` class:

- `MyCalendarThree()` Initializes the object.
- `int book(int start, int end)` Returns an integer `k` representing the largest integer such that there exists a `k`-booking in the calendar.

**Example 1:**

```
Input
["MyCalendarThree", "book", "book", "book", "book", "book", "book"]
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
Output
[null, 1, 1, 2, 3, 3, 3]

Explanation
MyCalendarThree myCalendarThree = new MyCalendarThree();
myCalendarThree.book(10, 20); // return 1, The first event can be booked and is disjoint, so the maximum k-booking is a 1-booking.
myCalendarThree.book(50, 60); // return 1, The second event can be booked and is disjoint, so the maximum k-booking is a 1-booking.
myCalendarThree.book(10, 40); // return 2, The third event [10, 40) intersects the first event, and the maximum k-booking is a 2-booking.
myCalendarThree.book(5, 15); // return 3, The remaining events cause the maximum K-booking to be only a 3-booking.
myCalendarThree.book(5, 10); // return 3
myCalendarThree.book(25, 55); // return 3
```

**Constraints:**

- `0 <= start < end <= 109`
- At most `400` calls will be made to `book`.

## Approach 1: Line Sweeping

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// Time Complexity: O(N ^ 2)
// Space Complexity: O(N)
class MyCalendarThree {
public:
    // finding number of overlapping elements at time points -> line sweeping
    MyCalendarThree() {}
    
    int book(int start, int end) {
        // new event starts here -> increase by 1
        lines[start]++;
        // the event ends here -> decrease by 1
        // p.s. sometimes you may see `lines[end + 1]--;`. e.g. 2406. Divide Intervals Into Minimum Number of Groups
        //      you may search `leetcode-the-hard-way` on Discussion to see my solution explanation on that problem
        //      this is because the interval is inclusive, i.e [start, end] 
        //      however, the interval in this problem is [start, end), so we don't need to add 1 here.
        lines[end]--;
        int mx = 0, cnt = 0;
        for (auto x : lines) {
            // here we calculate the prefix sum
            cnt += x.second;
            // and record the maximum overlapping intervals
            mx = max(mx, cnt);
        }
        return mx;
    }
private:
    // can I use `vector` instead? 
    // given that the constraints state 0 <= start < end <= 10 ^ 9 
    // it means we need to sweep from 0 to 10 ^ 9 if we use vector
    // let's say the books are [10, 20) and [1e9 - 10, 1e9)
    // then the range [20, 1e9 - 10 - 1] is empty but we still spend time to check them
    
    // in c++, we can use map instead since we only have at most 400 calls
    // in line sweeping, we need to ensure the keys are sorted
    // map is implemented as red-black trees so the it fulfils
    // lines[i] = j means we have j overlapping elements at time point i
    map<int, int> lines;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree* obj = new MyCalendarThree();
 * int param_1 = obj->book(start,end);
 */
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
// Time Complexity: O(N ^ 2)
// Space Complexity: O(N)
class MyCalendarThree {
    // can I use `ArrayList` instead? 
    // given that the constraints state 0 <= start < end <= 10 ^ 9 
    // it means we need to sweep from 0 to 10 ^ 9 if we use ArrayList
    // let's say the books are [10, 20) and [1e9 - 10, 1e9)
    // then the range [20, 1e9 - 10 - 1] is empty but we still spend time to check them
    
    // in java, we can use TreeMap instead since we only have at most 400 calls
    // in line sweeping, we need to ensure the keys are sorted
    // TreeMap is implemented as red-black trees so the it fulfils
    // lines[i] = j means we have j overlapping elements at time point i
    private TreeMap<Integer, Integer> lines;

    // finding number of overlapping elements at time points -> line sweeping
    
    public MyCalendarThree() {
        // init TreeMap
        lines = new TreeMap<>();
    }
    
    public int book(int start, int end) {
        // new event starts here -> increase by 1
        lines.put(start, lines.getOrDefault(start, 0) + 1);
        // the event ends here -> decrease by 1
        // p.s. sometimes you may see `lines[end + 1]--;`. e.g. 2406. Divide Intervals Into Minimum Number of Groups
        //      you may search `leetcode-the-hard-way` on Discussion to see my solution explanation on that problem
        //      this is because the interval is inclusive, i.e [start, end] 
        //      however, the interval in this problem is [start, end), so we don't need to add 1 here.
        lines.put(end, lines.getOrDefault(end, 0) - 1);
        int mx = 0, cnt = 0;
        for (int x : lines.values()) {
            // here we calculate the prefix sum
            cnt += x;
            // and record the maximum overlapping intervals
            mx = Math.max(mx, cnt);
        }
        return mx;
    }
    
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree obj = new MyCalendarThree();
 * int param_1 = obj.book(start,end);
 */
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
from sortedcontainers import SortedDict

# Time Complexity: O(N ^ 2)
# Space Complexity: O(N)
class MyCalendarThree:

    def __init__(self):
        # in line sweeping, we need to ensure the keys are sorted
        # in python, we can use SortedDict which fulfils the above requirement
        # lines[i] = j means we have j overlapping elements at time point i
        self.lines = SortedDict()


    # finding number of overlapping elements at time points -> line sweeping
    def book(self, start: int, end: int) -> int:
        # new event starts here -> increase by 1
        self.lines[start] = self.lines.get(start, 0) + 1
        # the event ends here -> decrease by 1
        # p.s. sometimes you may see `lines.get(end + 1, 0) - 1;`. e.g. 2406. Divide Intervals Into Minimum Number of Groups
        #      you may search `leetcode-the-hard-way` on Discussion to see my solution explanation on that problem
        #      this is because the interval is inclusive, i.e [start, end] 
        #      however, the interval in this problem is [start, end), so we don't need to add 1 here.
        self.lines[end] = self.lines.get(end, 0) - 1
        # here we calculate the prefix sum using `accumulate`
        # and get the maximum overlapping intervals using `max`
        return max(accumulate(self.lines.values()))


# Your MyCalendarThree object will be instantiated and called as such:
# obj = MyCalendarThree()
# param_1 = obj.book(start,end)
```

</TabItem>
</Tabs>

## Approach 2: Segment Tree

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class MyCalendarThree {
public:
    // modified from https://usaco.guide/plat/sparse-segtree?lang=cpp
    struct Node {
        int sum, lazy, tl, tr, l, r;
        Node() : sum(0), lazy(0), l(-1), r(-1) {}
    };
    
    const static int magic = 64 * 200 * 10;

    Node segtree[magic];
    int cnt = 2;

    void push_lazy(int node) {
        if (segtree[node].lazy) {
            segtree[node].sum += segtree[node].lazy;
            int mid = (segtree[node].tl + segtree[node].tr) / 2;
            if (segtree[node].l == -1) {
                segtree[node].l = cnt++;
                segtree[segtree[node].l].tl = segtree[node].tl;
                segtree[segtree[node].l].tr = mid;
            }
            if (segtree[node].r == -1) {
                segtree[node].r = cnt++;
                segtree[segtree[node].r].tl = mid + 1;
                segtree[segtree[node].r].tr = segtree[node].tr;
            }
            segtree[segtree[node].l].lazy += segtree[node].lazy;
            segtree[segtree[node].r].lazy += segtree[node].lazy;
            segtree[node].lazy = 0;
        }
    }

    void update(int node, int l, int r) {
        push_lazy(node);
        if (l == segtree[node].tl && r == segtree[node].tr) {
            segtree[node].lazy += 1;
            push_lazy(node);
        } else {
            int mid = (segtree[node].tl + segtree[node].tr) / 2;
            if (segtree[node].l == -1) {
                segtree[node].l = cnt++;
                segtree[segtree[node].l].tl = segtree[node].tl;
                segtree[segtree[node].l].tr = mid;
            }
            if (segtree[node].r == -1) {
                segtree[node].r = cnt++;
                segtree[segtree[node].r].tl = mid + 1;
                segtree[segtree[node].r].tr = segtree[node].tr;
            }

            if (l > mid) update(segtree[node].r, l, r);
            else if (r <= mid) update(segtree[node].l, l, r);
            else {
                update(segtree[node].l, l, mid);
                update(segtree[node].r, mid + 1, r);
            }
            push_lazy(segtree[node].l);
            push_lazy(segtree[node].r);
            segtree[node].sum = max(segtree[segtree[node].l].sum, segtree[segtree[node].r].sum);
        }
    }

    int query(int node, int l, int r) {
        push_lazy(node);
        if (l == segtree[node].tl && r == segtree[node].tr) return segtree[node].sum;
        else {
            int mid = (segtree[node].tl + segtree[node].tr) / 2;
            if (segtree[node].l == -1) {
                segtree[node].l = cnt++;
                segtree[segtree[node].l].tl = segtree[node].tl;
                segtree[segtree[node].l].tr = mid;
            }
            if (segtree[node].r == -1) {
                segtree[node].r = cnt++;
                segtree[segtree[node].r].tl = mid + 1;
                segtree[segtree[node].r].tr = segtree[node].tr;
            }
            if (l > mid) return query(segtree[node].r, l, r);
            else if (r <= mid) return query(segtree[node].l, l, r);
            else return max(query(segtree[node].l, l, mid), query(segtree[node].r, mid + 1, r));
        }
    }


    MyCalendarThree() {
        segtree[1].sum = 0; segtree[1].lazy = 0;
        segtree[1].tl = 0; segtree[1].tr = 1e9;
    }
    
    int book(int start, int end) {
        update(1, start, end - 1);
        return segtree[1].sum;
    }
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree* obj = new MyCalendarThree();
 * int param_1 = obj->book(start,end);
 */
```

</TabItem>
</Tabs>
