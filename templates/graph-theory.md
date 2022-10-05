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



### Depth First Traversal

Go to [Tutorial](../tutorials/graph-theory/binary-tree#traversal)


#### Preorder traversal

<Tabs>

<TabItem value="cpp" label="C++">

```cpp
void preorder(TreeNode* node) {
    if (node == NULL) return;
    s.push_back(node->val);
    preorder(node->left);
    preorder(node->right);
}
```
</TabItem>

<TabItem value="py" label="Python">

```py
def preorder(node):
    if(node == None):
        return
        
    s.append(node.val)    
    preorder(node.left)
    preorder(node.right)
```
</TabItem>
</Tabs>


#### Inorder traversal
<Tabs>

<TabItem value="cpp" label="C++">

```cpp
void inorder(TreeNode* node) {
    if (node == NULL) return;
    inorder(node->left);
    s.push_back(node->val);
    inorder(node->right);
}
```
</TabItem>

<TabItem value="py" label="Python">

```py
def inorder(node):
    if(node == None):
        return
        
    inorder(node.left)
    s.append(node.val)
    inorder(node.right)
```
</TabItem>
</Tabs>


#### Postorder traversal
<Tabs>

<TabItem value="cpp" label="C++">

```cpp
void postorder(TreeNode* node) {
    if (node == NULL) return;
    postorder(node->left);
    postorder(node->right);
    s.push_back(node->val);
}
```
</TabItem>

<TabItem value="py" label="Python">

```py
def postorder(node):
    if(node == None):
        return
          
    postorder(node.left)
    postorder(node.right)
    s.append(node.val)  
```

</TabItem>
</Tabs>

### Breadth First Search

Go to [Tutorial](../tutorials/graph-theory/breadth-first-search)

<Tabs>

<TabItem value="py" label="Python">

```py
def findTargetNode(root, targetValue):
    if(root is None):
        return None
    
    currentLevel = [root]
    
    while(len(level) > 0):
    
        nextLevel = []
        
        for node in currentLevel:
            if(node is None):
                continue
            if(node.val == targetValue):
                return node
                
            nextLevel.append(node.left)
            nextLevel.append(node.right)
       
        currentLevel = nextLevel
      
    return None

```
</TabItem>
</Tabs>



### Bellman Ford Algorithm

Go to [Tutorial](../tutorials/graph-theory/bellman-ford-algorithm)

<Tabs>
<TabItem value="cpp" label="C++">

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

</TabItem>
</Tabs>

### Dijkstra

Go to [Tutorial](../tutorials/graph-theory/dijkstra)

<Tabs>
<TabItem value="cpp" label="C++">

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

</TabItem>
</Tabs>

### Topological Sorting

Go to [Tutorial](../tutorials/graph-theory/topological-sorting)

<Tabs>
<TabItem value="cpp" label="C++">

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

</TabItem>
</Tabs>

### Disjoin Set Union (DSU)

Go to [Tutorial](../tutorials/graph-theory/disjoint-set-union)

<Tabs>
<TabItem value="cpp" label="C++">

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

</TabItem>
</Tabs>