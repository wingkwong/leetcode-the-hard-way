---
title: "Prim's Algorithm"
description: "Prim's algorithm finds the Minimum Spanning Tree (MST) of a graph, ensuring all vertices are connected with the smallest possible total edge weight in O(E + V log V) time."
draft: true
keywords:
  - leetcode
  - tutorial
  - prim
  - algorithm
---

## Suggested Pre-requisites
Before moving on to learn the Prims algorithm, it is suggested that you know what a [Minimum Spanning Tree (MST)](../graph-theory/minimum-spanning-tree.md) is.

## Overview
The Prims algorithm is a [Greedy Algorithm](../basic-topics/greedy.md)  used to find a minimum spanning tree (MST) for a connected weighted undirected graph. In simpler terms, it finds a subset of the edges that forms a tree that includes *every* vertex, where the total **weight** of all the **edges** in the tree is **minimized**.

### How does it work? 
- It starts with a single vertex (that can be randomly chosen) and gradually expands the tree by adding the smallest edge that connects a vertex present in the tree to a vertex not yet in the tree.
- It continues until every vertex is included in the tree.
- The algorithm uses a priority queue or similar structure to efficiently track the smallest edge that can be added to the tree at each step.
  
**Note:** Since the starting vertex is chosen at random, it is possible to have different edges included in the MST for the same graph, but the total edge weight of the MST will still have the same minimum value.

### Complexity and Use-Cases
When implemented using a priority queue (usually a binary heap), the time complexity of Prim’s algorithm is $O(E + V log V)$, where E is the number of edges and V is the number of vertices. This makes Prim's algorithm highly efficient for **dense** graphs, where the number of edges is close to the maximum possible. For sparse graphs (a graph with a relatively small number of edges compared to the maximum number of possible edges), other algorithms like [Kruskal’s](kruskals-algorithm.md) may perform better.

The space complexity of the Prims Algorithm is $O(V + E)$, where V is the number of vertices and E is the number of edges.

Prim's algorithm is widely used in network design, where the goal is to minimize the cost of building a network while connecting all nodes. Examples include laying cables, designing road networks, or creating efficient communication paths. It is also used as a building block in other algorithms for solving more complex problems.

![Prims Algorithm Image](https://miro.medium.com/max/700/1*7kpPIPcmXr38Juh0umM6fA.jpeg)

## Example [1135 - Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/description/?envType=problem-list-v2&envId=minimum-spanning-tree)
**Note:** The above link requires the Leetcode Subscription. To view the problem, use [this](https://leetcode.ca/all/1135.html) alternate link.

### Instructions: 
- There are N cities numbered from 1 to N.
- You are given connections, where each connections[i] = [city1, city2, cost] represents the cost to connect city1 and city2 together. The connections are all bidirectional.
- Return the minimum cost so that for every pair of cities, there exists a path of connections (possibly of length 1) that connects those two cities together.  The cost is the sum of the connection costs used. If the task is impossible, return -1.

Example: 
**Input:** N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
**Output:** 6

### Approach
First, we convert the given 'connections' array, into an adjacency list for ease of traversing.
```python3
connections = [[1,2,5],[1,3,6],[2,3,1]] # Example
adjacency_list = {}

for connection in connections:
    if connection[0] not in adjacency_list:
        adjacency_list[connection[0]] = []
    if connection[1] not in adjacency_list:
        adjacency_list[connection[1]] = []
    adjacency_list[connection[0]].append((connection[2], connection[1]))
    adjacency_list[connection[1]].append((connection[2], connection[0]))
```
The adjacency list will look like:
```
1: [(5, 2), (6, 3)]
2: [(5, 1), (1, 3)]
3: [(6, 1), (1, 2)]
```
Where each tuple consists of '(cost, destination)'.

Now, to find the minimum cost, we use the below code.
```python3
import random
import heapq

# Number of nodes in the given tree
N = len(adjacency_list)
# A list which we will use to implement a priority queue
connection_queue = []
# Total minimum cost to traverse all the cities
solution = 0
# Taking the assumption that the N nodes in the adjacency list are from 1 to N
start = random.randint(1, N)
# To ensure we don't create closed loops
seen = set([start]) 

for connection in adjacency_list[start]:
    heapq.heappush(connection_queue, connection)

while len(seen) < N and connection_queue:
    cost, current = heapq.heappop(connection_queue)
    if current in seen:
        continue

    solution += cost
    seen.add(current)

    for connection in adjacency_list[current]:
        if connection[1] not in seen:
            heapq.heappush(connection_queue, connection)

if len(seen) < N: print(-1)
else: print(solution)
```

#### Explanation:
```python3
for connection in adjacency_list[start]:
    heapq.heappush(connection_queue, connection)
```
First, we push all the connections of the starting node into the priority queue. On doing so, the nodes with edges of MINIMUM COST come in front.

```python3
while len(seen) < N and connection_queue:
    cost, current = heapq.heappop(connection_queue)
    if current in seen:
        continue

    solution += cost
    seen.add(current)
```
- Then, we take the first element out of the queue (this is the node we ideally will add to our MST as it will have the minimum cost. We also ensure that the node selected hasn't already been visited.
- If the node hasn't been visited, we then add the cost to our solution and mark the node as visited.

```python3
for connection in adjacency_list[current]:
        if connection[1] not in seen:
            heapq.heappush(connection_queue, connection)

if len(seen) < N: print(-1)
else: print(solution)
```
- After that, we check the adjacency list for all the nodes connected to the current node (the node visited most recently) and if the connections of this node haven't been visited, they are added to the priority queue.
- This process goes on until one of two outcomes is achieved.
    - **Not all** the nodes have been visited, in which case the number of nodes in 'seen' will be less than the total number of nodes. In this case, we do not have a successful output and print **-1**
    - If all the nodes have been visited, we print the solution.

export const suggestedProblems = [ { "problemName": "1584 - Min Cost to Connect All Points", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/min-cost-to-connect-all-points/", "solutionLink": "" }, { "problemName": "0787 - Cheapest Flights Within K Stops", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/cheapest-flights-within-k-stops/", "solutionLink": "" },]

## References:
1. For the Prim's Algorithm image: https://miro.medium.com/max/700/1*7kpPIPcmXr38Juh0umM6fA.jpeg
