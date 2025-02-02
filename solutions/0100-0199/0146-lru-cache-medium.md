---
description: 'Author: @ColeB2 | https://leetcode.com/problems/lru-cache/'
tags: [Hash Table, Linked List, Design, Doubly-Linked List]
---

# 0146 - LRU Cache (Medium)

## Problem Link

https://leetcode.com/problems/lru-cache/

## Problem Statement

Design a data structure that follows the constraints of a [Least Recently Used (LRU) cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU).

Implement the `LRUCache` class:

- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

**Example 1:**

```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```

**Constraints:**

- `1 <= capacity <= 3000`
- `0 <= key <= 10^4`
- `0 <= value <= 10^5` At most `2 * 10^5` calls will be made to `get` and `put`.

## Approach 1: Doubly-Linked List

For a design question, it helps to brainstorm out approach, and get all the requirements we need to breakdown how we should design it. So we know we are given a $$capacity$$ meaning and if we ever go over our capacity we are going to have to remove an item. We also know we need to get and put into our cache in $$O(1)$$ time, so that points towards a Hash map. With a hash map, we can get and put key-value pairs inside of it $$O(1)$$.

So now how do we handle the order in which we use items? We could use an array, but there is no way to quickly remove an item from the middle to update its position to the front without using $$O(n)$$ time. We need a way to track both the front and the back, as well as have $$O(1)$$ removal time. That is where a doubly-linked list comes into play! With a doubly-linked list, we can track both the head and tail of the list, so we can add nodes to the front in $$O(1)$$ time to update the order items were used in. We can also remove from the tail in $$O(1)$$ time when we go over capacity and need to remove the least recently used item. We can also remove a node form anywhere inside the linked list in $$O(1)$$ since unlike a singly-linked list, a doubly-linked list has both the next and previous pointers for access to both nodes next to a given node. This gives us the perfect data structure.

To recap we need:

1. A hash map for $$O(1)$$ access to a node given a key.
2. A doubly linked list for $$O(1)$$ insertion and removal times.

So by tracking each node given a key inside our hash map, we can access them in $$O(n)$$ time, and since the nodes are a part of a doubly-linked list, we can access both neighbours in $$O(1)$$ time to update their pointers for easy removal.

Note: like most linked list problems, we will use a dummy node for both the head and the tail to help simplify the code, and since we will be constantly inserting and removing nodes, it will help to create methods for those repeated actions.

Time Complexity: $$O(1)$$ for both the get, put, as well as the initializing of our LRU Cache.

Space Complexity: $$O(capacity)$$ where the capacity is given as the most nodes our cache can fit.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Node:
    def __init__(self, key=None, val=None):
        # create a custom node that tracks key, value, next and previous node.
        self.key = key
        self.val = val
        self.next = None
        self.prev = None

class LRUCache:
    def __init__(self, capacity: int):
        # capacity so we can access what our max capacity is
        self.capacity = capacity
        # initialize empty hash map/
        self.hash_map = {}
        # Dummy nodes at both head and tail for easier node manipulation.
        self.head = Node()
        self.tail = Node()
        # set dummy nodes next/prev to be each other.
        self.head.next, self.tail.prev = self.tail, self.head

    def insert(self, node: Node) -> None:
        # Insert node as the new head of the linked list. O(1) time.
        # get the nodes ahead and behind of where we want to insert
        # that will be the dummy head, and the dummy heads next node.
        # dummy-> <-node2
        prev, nxt = self.head, self.head.next
        # set the node ahead behind of our insertion spots pointers to
        # be the node we are inserting: Dummy-> insertion_node <-node2
        prev.next = nxt.prev = node
        # update the inserted nodes pointers to point to the nodes
        # ahead and behind of it: Dummy-> <-insertion_node-> <-node2
        node.next, node.prev = nxt, prev

    def remove(self, node: Node) -> None:
        # remove node from linked list: O(1) time
        # get the node behind and ahead of the node we are removing
        # *prev_node*->  <-node_to_remove-> <-*next_node*
        prev, nxt = node.prev, node.next
        # set the behind node next to the ahead node
        # and the ahead nodes prev to the behind node. prev_node-> <-next_node
        prev.next, nxt.prev = nxt, prev


    def get(self, key: int) -> int:
        # Make sure key is in our LRU Cache
        if key in self.hash_map:
            # remove node using above remove method
            self.remove(self.hash_map[key])
            # insert it at the front of our cache.
            self.insert(self.hash_map[key])
            # return value of node we found
            return self.hash_map[key].val
        # did not find, return -1
        return -1


    def put(self, key: int, value: int) -> None:
        # make sure key is in out LRU Cache
        if key in self.hash_map:
            # remove it
            self.remove(self.hash_map[key])
        # create new node to insert to front
        node = Node(key, value)
        # update hash with new node
        self.hash_map[key] = node
        # insert at front of linked list
        self.insert(node)
        # check if we have gone over capacity
        if len(self.hash_map) > self.capacity:
            # Went over capacity, remove the tail node.
            node = self.tail.prev
            self.remove(node)
            # delete key from our hash map.
            del self.hash_map[node.key]
```

</TabItem>
</Tabs>
