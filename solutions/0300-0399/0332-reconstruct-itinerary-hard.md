---
description: 'Author: @ColeB2 | https://leetcode.com/problems/reconstruct-itinerary/'
tags: [Depth-First Search, Graph, Eulerian Circuit]
---

# 0332 - Reconstruct Itinerary (Hard)

## Problem Link

https://leetcode.com/problems/reconstruct-itinerary/

## Problem Statement

You are given a list of airline `tickets` where `tickets[i] = [fromi, toi]` represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from `"JFK"`, thus, the itinerary must begin with `"JFK"`. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

- For example, the itinerary `["JFK", "LGA"]` has a smaller lexical order than `["JFK", "LGB"]`.

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg)

```
Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
Output: ["JFK","MUC","LHR","SFO","SJC"]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg)

```
Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
```

**Constraints:**

- `1 <= tickets.length <= 300`
- `tickets[i].length == 2`
- `fromi.length == 3`
- `toi.length == 3`
- `fromi` and `toi` consist of uppercase English letters.
- `fromi != toi`

## Approach 1: Euler Path DFS

The simple way to solve this would be the bruteforce/dfs/backtracking. That is to create an adjacency list, run our DFS algorithm and track the path and a visited set at each iteration (you'd also need a way to differentiate 2 of the same ticket), and find all itineraries, then choose the lexically smallest itinerary.

You could also simplify it by sorting the sublists of our adjacency list in reverse sorted order. This would give you the lexically smallest itinerary first, so you could stop your DFS early. But still the copying of the paths, and visited sets for each iteration for backtracking purposes would be inefficient.

A more efficient solution involves knowing a bit about Euler Paths, and how to create them. We do the same thing to start, we build our adjacency list, and sort the lists in reverse order so the lexically smaller destination appears at the end of each list. Ex: $$\{"JFK": ["C", "B", "A"]\}$$

Then we would start our DFS at $$JFK$$. Inside our dfs, while our current destinations have tickets, we would traverse to the lexically smallest destination, and continue that until we reach a destination that has no tickets. Since we reached a dead end, that is when we backtrack, we do that by adding the dead-end destination to our itinerary and popping it off the stack to try the next destination.

This will give us an itinerary in reverse order, as you can imagine $$JFK$$ was the first destination on the stack, and will be the last destination off the stack. Since we find it in reverse, we must reverse our itinerary before returning it.

Time Complexity: We can break out time complexity into 3 parts. Constructing our adjacency list $$O(V + E)$$, sorting our adjacency list, $$O(ElogE)$$, then finally our Euler traversal in $$O(E)$$ time.

Space Complexity: $$O(V + E) where V is the vertices, and E is the edges, we need to create an adjacency list.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        # Create an adjaceny list. O(V+E)
        # key: from destination and values: list of all to destinations.
        adj_list = defaultdict(list)
        for from_dest, to_dest in tickets:
            adj_list[from_dest].append(to_dest)
        # Reverse sort all the to destinations so we can pop the last
        # destination off the list in order we are traversing.
        # Do this so our destination is smallest lexically.
        # O(ElogE)
        for to_dest in adj_list.values():
            to_dest.sort(reverse=True)

        # Initialize our stack, starting at "JFK" and our
        # itinerary which will be empty to start.
        stack = ["JFK"]
        itinerary = []
        # While our stack still has values and isn't empty. O(E)
        while stack:
            # adj_list[stack[-1]] -> stack[-1] top of the stack, and
            # our current destination. So we are checking that while
            # the destination we are at (which updates on each loop), 
            # has a destination to go to, go to it.
            while adj_list[stack[-1]]:
                stack.append(adj_list[stack[-1]].pop())
            # Reached a dead end, not more tickets from the last destination.
            else:
                itinerary.append(stack.pop())
                # No tickets, we reached a dead end, then the place
                # that reaches a dead end should be the last in our
                # itinerary, so we will add it to the itinerary first.
                # And backtrack to last destination we were at.
        # Since we added the itinerary in reverse order, return reversed
        # version of our itinerary.
        return itinerary[::-1]
```

</TabItem>
</Tabs>