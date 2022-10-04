---
title: 'Graph Theory'
description: 'Graph Templates'
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - graph
  - algorithm
  - bellman ford
  - dijkstra
  - topological sort
---



### Depth First Search

Go to [Tutorial](../tutorials/graph-theory/depth-first-search)

```cpp
def dfs(node):
    if(node == None):
        # we stop when node is invalid
        return
        
    # explore left branch first
    dfs(node.left)
    
    # evalute current node
    print("I just visited the left branch!")
    print("I am number: " + str(node.val))
    print("I am visiting the right branch now!")
    
    # explore right branch
    dfs(node.right)

```



### Breadth First Search

Go to [Tutorial](../tutorials/graph-theory/breadth-first-search)

```cpp
def findTargetNode(root, targetValue):
    if(root is None):
        return None
    
    #currentLevel contains the nodes with the same distance to root (closest so far)
    currentLevel = [root]
    
    #we increase our depth one by one as long as there is still node
    while(len(level) > 0):
    
        #we store the current level node's children in nextLevel
        nextLevel = []
        
        for node in currentLevel:
            #skip if the node is None
            if(node is None):
                continue
            #we can be sure the target node is the CLOSEST so we can return
            #because we are traversing the tree level by level
            if(node.val == targetValue):
                return node
                
            #add the children to nextLevel
            nextLevel.append(node.left)
            nextLevel.append(node.right)
        #change the currentLevel to nextLevel (no target node in this level, go next)
        currentLevel = nextLevel
    
    #if no target node has been returned    
    return None
    
```



### Bellman Ford Algorithm

Go to [Tutorial](../tutorials/graph-theory/bellman-ford-algorithm)

```cpp
template<typename T_a3, typename T_vector>
void bellman_ford(T_a3 &g, T_vector &dist, int src, int mx_edges) {
    dist[src] = 0;
    for (int i = 0; i <= mx_edges; i++) {
        T_vector ndist = dist;
        for (auto x : g) {
            auto [from, to, cost] = x;
            ndist[to] = min(ndist[to], dist[from] + cost);
        }
        dist = ndist;
    }
}
```

### Dijkstra

Go to [Tutorial](../tutorials/graph-theory/dijkstra)

```cpp
template<typename T_pair, typename T_vector>
void dijkstra(T_pair &g, T_vector &dist, int start) {
  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
  dist[start] = 0;
  pq.push({start, 0});
  while (!pq.empty()) {
    auto [u_node, u_cost] = pq.top(); pq.pop();
    if (u_cost > dist[u_node]) continue;
    for (auto [v_node, v_cost] : g[u_node]) {
      if (dist[v_node] > dist[u_node] + v_cost) {
        dist[v_node] = dist[u_node] + v_cost;
        pq.push({v_node, dist[v_node]});
      }
    }
  }
}
```

### Topological Sorting

Go to [Tutorial](../tutorials/graph-theory/topological-sorting)

```cpp
struct TopologicalSort {
    int n;
    vector<int> indegree;
    vector<int> orders;
    vector<vector<int>> G;
    bool isTopologicalSorted = false;
    
    TopologicalSort(vector<vector<int>>& g, vector<int>& in) {
        G = g; vector<vector<int>>
        n = (int) G.size();
        indegree = in;
        
        int res = 0;
        queue<int> q;
        for(int i = 0; i < n; i++) {
            if(indegree[i] == 0) {
                q.push(i);
            }
        }
        while(!q.empty()) {
            auto u = q.front(); q.pop();
            orders.push_back(u);
            for(auto v : G[u]) {
                if(--indegree[v] == 0) {
                    q.push(v);
                }
            }
            res++;
        }
        isTopologicalSorted = res == n;
    }
};
```

### Disjoin Set Union (DSU)

Go to [Tutorial](../tutorials/graph-theory/disjoint-set-union)

```cpp
class dsu {
 public:
  vector<int> root, rank;
  int n;
  int cnt;

  dsu(int _n) : n(_n) {
    root.resize(n);
    rank.resize(n);
    for(int i = 0; i < n; i++) {
        root[i] = i;
        rank[i] = 1;
    }
    cnt = n;
  }

  inline int getCount() { return cnt; }

  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }

  inline bool unite(int x, int y) {
    x = get(x);
    y = get(y);
    if (x != y) {
        if (rank[x] > rank[y]) {
            root[y] = x;
        } else if (rank[x] < rank[y]) {
            root[x] = y;
        } else {
            root[y] = x;
            rank[x] += 1;
        }
        cnt--;
      return true;
    }
    return false;
  }
};
```