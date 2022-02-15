---
description: >-
  Author: @heiheihang, @wingkwong |
  https://leetcode.com/problems/maximum-and-sum-of-array/
---

# 2172 - Maximum AND Sum of Array (Hard)

## Problem Statement

You are given an integer array `nums` of length `n` and an integer `numSlots` such that `2 * numSlots >= n`. There are `numSlots` slots numbered from `1` to `numSlots`.

You have to place all `n` integers into the slots such that each slot contains at **most** two numbers. The **AND sum** of a given placement is the sum of the **bitwise** `AND` of every number with its respective slot number.

* For example, the **AND sum** of placing the numbers `[1, 3]` into slot `1` and `[4, 6]` into slot `2` is equal to `(1 AND 1) + (3 AND 1) + (4 AND 2) + (6 AND 2) = 1 + 1 + 0 + 2 = 4`.

Return _the maximum possible **AND sum** of_ `nums` _given_ `numSlots` _slots._

**Example 1:**

```
Input: nums = [1,2,3,4,5,6], numSlots = 3
Output: 9
Explanation: One possible placement is [1, 4] into slot 1, [2, 6] into slot 2, and [3, 5] into slot 3. 
This gives the maximum AND sum of (1 AND 1) + (4 AND 1) + (2 AND 2) + (6 AND 2) + (3 AND 3) + (5 AND 3) = 1 + 0 + 2 + 2 + 3 + 1 = 9.
```

**Example 2:**

```
Input: nums = [1,3,10,4,7,1], numSlots = 9
Output: 24
Explanation: One possible placement is [1, 1] into slot 1, [3] into slot 3, [4] into slot 4, [7] into slot 7, and [10] into slot 9.
This gives the maximum AND sum of (1 AND 1) + (1 AND 1) + (3 AND 3) + (4 AND 4) + (7 AND 7) + (10 AND 9) = 1 + 1 + 3 + 4 + 7 + 8 = 24.
Note that slots 2, 5, 6, and 8 are empty which is permitted.
```

**Constraints:**

* `n == nums.length`
* `1 <= numSlots <= 9`
* `1 <= n <= 2 * numSlots`
* `1 <= nums[i] <= 15`

## Approach 1: Brute Force

Naive backtracking

```python
class Solution:
    def maximumANDSum(self, nums: List[int], numSlots: int) -> int:
        
        #store the number of elements in each slot
        slots = defaultdict(int)
        val = 0
        res = 0
        
        def backtrack(idx):
            
            #return 0 when reaches the end of nums
            if(idx == len(nums)):
                return 0
            
            #store the maximum result    
            res = 0
            
            #iterate all slots
            for i in range(numSlots):
                
                #naive pruning for trivial results
                if(nums[idx] & (i+1) == 0 or slots[i+1] == 2):
                    continue
                
                #update if we want to take that number at ith slot
                slots[i+1] += 1
                
                #backtrack
                res = max(res, backtrack(idx+1) + ((i+1) & nums[idx]))
                
                #resume state
                slots[i+1] -= 1
            
            #final backtrack for not using the current number
            backtrack(idx+1) 
                
        return backtrack(0)
```

## Approach 1: Bitmask DP

We notice that the naive approach is too inefficient. There are some repetitions in the combination of numbers in slots. We can take advantage of that by storing the state of the slots (utilizing the `slots` dictionary from brute force!)

To do this, we use bits. Each slot has 3 states: 0 element, 1 element, 2 elements. We need to use 2 bits to represent each slot. We can use a single integer to cover potentially 18 bits, but its implementation is more complicated than using two separate bit masks.&#x20;

We can use the _ith_ bit `mask1` to represent if the _ith_ slot has 0 or 1 element. We can use the _ith_ bit of `mask2` to represent if the _ith_ slot has 2 elements.&#x20;

We need to use some bit manipulation to update the states.&#x20;

```python
class Solution:
    def maximumANDSum(self, nums: List[int], numSlots: int) -> int:
        
        
        #mask 1 represents if the slot has 0 or 1 element
        #mask 2 represents if the slot has 2 element 
        @lru_cache(None)
        def dp(i, mask1, mask2):
            
            #reached the end of nums
            if(i == len(nums)):
                return 0
            
            #set the initial result
            res = 0
            
            #iterate all slots
            for j in range(numSlots):
                
                #check if slot is full
                #both slots are filled
                if(mask2 & (1 << j) != 0):
                    continue
                else:
                    newMask1 = mask1
                    newMask2 = mask2
                    
                    #slot is empty
                    if(mask1 & (1 << j) == 0):
                        #set mask 1 to 
                        newMask1 = mask1 | (1 << j)
                    #slot has 1 element
                    else:
                        #clear mask 1 
                        newMask1 = mask1 ^ (1 << j)
                        newMask2 = mask2 | (1 << j)
                        
                    res = max(res, dp(i+1, newMask1, newMask2) + (nums[i] & (j+1)))
                    
            return res
        
        return dp(0,0,0)
```

## Approach 2: MCMF

**Prerequisite**: MCMF

{% hint style="warning" %}
MCMF tutorial will not be included here. Please check out [https://cp-algorithms.com/graph/min\_cost\_flow.html](https://cp-algorithms.com/graph/min\_cost\_flow.html) for more.
{% endhint %}

We can think of $$nums$$ as the source of a bipartite graph and $$slots$$ as the destination. If we add two more vertices $$source$$ before $$nums$$ and $$sink$$ after $$slots$$, then we can easily solve it using standard MCMF template.

<details>

<summary>MCMF Template</summary>

This [template](https://github.com/ShahjalalShohag/code-library/blob/master/Graph%20Theory/Min%20Cost%20Max%20Flow.cpp) is created by Shahjalal Shohag.

```cpp
using T = long long;
const T inf = 1LL << 61;
struct MCMF {
  struct edge {
    int u, v;
    T cap, cost;
    int id;
    edge(int _u, int _v, T _cap, T _cost, int _id) {
      u = _u;
      v = _v;
      cap = _cap;
      cost = _cost;
      id = _id;
    }
  };
  int n, s, t, mxid;
  T flow, cost;
  vector<vector<int>> g;
  vector<edge> e;
  vector<T> d, potential, flow_through;
  vector<int> par;
  bool neg;
  MCMF() {}
  MCMF(int _n) { // 0-based indexing
    n = _n + 10;
    g.assign(n, vector<int> ());
    neg = false;
    mxid = 0;
  }
  void add_edge(int u, int v, T cap, T cost, int id = -1, bool directed = true) {
    if(cost < 0) neg = true;
    g[u].push_back(e.size());
    e.push_back(edge(u, v, cap, cost, id));
    g[v].push_back(e.size());
    e.push_back(edge(v, u, 0, -cost, -1));
    mxid = max(mxid, id);
    if(!directed) add_edge(v, u, cap, cost, -1, true);
  }
  bool dijkstra() {
    par.assign(n, -1);
    d.assign(n, inf);
    priority_queue<pair<T, T>, vector<pair<T, T>>, greater<pair<T, T>> > q;
    d[s] = 0;
    q.push(pair<T, T>(0, s));
    while (!q.empty()) {
      int u = q.top().second;
      T nw = q.top().first;
      q.pop();
      if(nw != d[u]) continue;
      for (int i = 0; i < (int)g[u].size(); i++) {
        int id = g[u][i];
        int v = e[id].v;
        T cap = e[id].cap;
        T w = e[id].cost + potential[u] - potential[v];
        if (d[u] + w < d[v] && cap > 0) {
          d[v] = d[u] + w;
          par[v] = id;
          q.push(pair<T, T>(d[v], v));
        }
      }
    }
    for (int i = 0; i < n; i++) { // update potential
      if(d[i] < inf) potential[i] += d[i];
    }
    return d[t] != inf;
  }
  T send_flow(int v, T cur) {
    if(par[v] == -1) return cur;
    int id = par[v];
    int u = e[id].u;
    T w = e[id].cost;
    T f = send_flow(u, min(cur, e[id].cap));
    cost += f * w;
    e[id].cap -= f;
    e[id ^ 1].cap += f;
    return f;
  }
  //returns {maxflow, mincost}
  pair<T, T> solve(int _s, int _t, T goal = inf) {
    s = _s;
    t = _t;
    flow = 0, cost = 0;
    potential.assign(n, 0);
    if (neg) {
      // run Bellman-Ford to find starting potential
      d.assign(n, inf);
      for (int i = 0, relax = true; i < n && relax; i++) {
        for (int u = 0; u < n; u++) {
          for (int k = 0; k < (int)g[u].size(); k++) {
            int id = g[u][k];
            int v = e[id].v;
            T cap = e[id].cap, w = e[id].cost;
            if (d[v] > d[u] + w && cap > 0) {
              d[v] = d[u] + w;
              relax = true;
            }
          }
        }
      }
      for(int i = 0; i < n; i++) if(d[i] < inf) potential[i] = d[i];
    }
    while (flow < goal && dijkstra()) flow += send_flow(t, goal - flow);
    flow_through.assign(mxid + 10, 0);
    for (int u = 0; u < n; u++) {
      for (auto v : g[u]) {
        if (e[v].id >= 0) flow_through[e[v].id] = e[v ^ 1].cap;
      }
    }
    return make_pair(flow, cost);
  }
}
```

</details>

Let's build the graph. We have $$len(nums) + len(slots) + 2$$ vertices in total (including $$source$$ and $$sink$$). You may treat all vertices in a 1D array in the following order with 0-base indexing.

$$
source, nums[0], nums[1], ... ,nums[n - 1], slot_1, slot_2, .., slot_k, sink
$$

Now we need to create the edges from $$source$$ to each element in $$nums$$ with $$1$$ capacity and $$0$$ cost. Then we create the edges from each element in $$nums$$ to each slot with $$1$$ capacity and $$-(nums[i - 1] \text & slot)$$. The minus sign is here because this MCMF template is to calculate the minimum cost and this problem is asking for the maximum one. Similarly, we create edges from each slot to $$sink$$ with $$2$$ capacities (because each slot at most contains 2 elements) and $$0$$ cost.

```cpp
class Solution {
public:
    int maximumANDSum(vector<int>& nums, int slots) {
        int n = (int) nums.size();
        // n + slots + 1 (source) + 1 (sink)
        int vertices = n + slots + 2; 
        // [source, ...nums..., ...slots..., sink]
        int source = 0, sink = vertices - 1; // 0-based indexing
        MCMF F(vertices);
        for (int i = 1; i <= n; i++) {
            // from source (0) to each element in nums (i)
            // with 1 capacity and 0 cost
            F.add_edge(0, i, 1, 0);
            for (int slot = 1; slot <= slots; slot++) {
                // from each element in nums (i) to each slot (slot)
                // with 1 capacity and -(nums[i - 1] & slot) cost
                // negative sign for getting the max cost
                F.add_edge(i, slot + n, 1, -(nums[i - 1] & slot));
            }
        }
        for (int slot = 1; slot <= slots; slot++) {
            // from each slot to sink
            // with 2 capacities and 0 cost
            F.add_edge(slot + n, sink, 2, 0);
        }
        // get the cost from source to sink
        // solve() return {max_flow, min_cost} 
        // we just need the latter one
        return -F.solve(source, sink, n).second;
    }
};
```
