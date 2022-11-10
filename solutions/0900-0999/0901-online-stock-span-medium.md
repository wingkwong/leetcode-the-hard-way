---
description: 'Author: @wingkwong | https://leetcode.com/problems/online-stock-span/'
tags: [Stack, Design, Monotonic Stack, Data Stream]
---

# 0901 - Online Stock Span (Medium) 

## Problem Link

https://leetcode.com/problems/online-stock-span/

## Problem Statement

Design an algorithm that collects daily price quotes for some stock and returns **the span** of that stock's price for the current day.

The **span** of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

- For example, if the price of a stock over the next `7` days were `[100,80,60,70,60,75,85]`, then the stock spans would be `[1,1,1,2,1,4,6]`.

Implement the `StockSpanner` class:

- `StockSpanner()` Initializes the object of the class.
- `int next(int price)` Returns the **span** of the stock's price given that today's price is `price`.

**Example 1:**

```
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
```

**Constraints:**

- `1 <= price <= 10^5`
- At most `10^4` calls will be made to `next`.

## Approach 1: Stack

<Tabs>
<TabItem value="kt" label="Kotlin">
<SolutionAuthor name="@wingkwong"/>

```kt
class StockSpanner() {
    val s = Stack<Pair<Int, Int>>()
    fun next(price: Int): Int {
        var res = 1
        while (!s.isEmpty() && s.peek().first <= price) {
            res += s.peek().second
            s.pop()
        }
        s.add(Pair(price, res))
        return res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = StockSpanner()
 * var param_1 = obj.next(price)
 */
```

</TabItem>
</Tabs>

## Approach 2: Segment Tree

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// modified from https://wingkwong.github.io/leetcode-the-hard-way/templates/segment-tree
struct segtree {
    vector<long long> sums;
    int size;
    
    void init(int n) {
        size = 1;
        while (size < n) size *= 2;
        sums.assign(size * 2, 0LL);
    }
    
    void set(int i, int v, int x, int lx, int rx) {
        if (rx - lx == 1) {
            sums[x] = v;
            return;
        }
        int m = (lx + rx) / 2;
        if (i < m) set(i, v, 2 * x + 1, lx, m);
        else set(i, v, 2 * x + 2, m, rx);
        sums[x] = max(sums[2 * x + 1], sums[2 * x + 2]);
    }
    
    void set(int i, int v) {
        set(i, v, 0, 0, size);
    }
    
    long long sum(int l, int r, int x, int lx, int rx) {
        if (lx >= r || l >= rx) return 0;
        if (lx >= l && rx <= r) return sums[x];
        int m = (lx + rx) / 2;
        return max(sum(l, r, 2 * x + 1, lx, m), sum(l, r, 2 * x + 2, m, rx));
    }
    
    long long sum(int l, int r) {
        return sum(l, r, 0, 0, size);
    }
};

class StockSpanner {
public:
    int mxN = 1e5;
    int p = 1;
    segtree st;
    
    StockSpanner() { 
        st.init(mxN);
    }
    
    int next(int price) {
        st.set(price, p);
        return p++ - st.sum(price + 1, mxN);
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */
```

</TabItem>
</Tabs>