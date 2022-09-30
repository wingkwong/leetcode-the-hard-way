---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/design-hashmap/
---

# 0706 - Design HashMap (Medium)

## Problem Link

https://leetcode.com/problems/design-hashmap/

## Problem Statement

Design a HashMap without using any built-in hash table libraries.

Implement the `MyHashMap` class:

* `MyHashMap()` initializes the object with an empty map.
* `void put(int key, int value)` inserts a `(key, value)` pair into the HashMap. If the `key` already exists in the map, update the corresponding `value`.
* `int get(int key)` returns the `value` to which the specified `key` is mapped, or `-1` if this map contains no mapping for the `key`.
* `void remove(key)` removes the `key` and its corresponding `value` if the map contains the mapping for the `key`.

<br/>

**Example 1:**

```
Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
```


**Constraints:**

* `0 <= key, value <= 106`
* At most `10^4` calls will be made to `put`, `get`, and `remove`.

<br/>

## Approach 1: With Array and LinkedList

Prerequisite: [HashMap](../../tutorials/basic-topics/hash-map)

As a problem stated, Design HashMap, but what is HashMap or HashTable ?

_A hash tables is a data structure that maps keys to values_ for highly efficient lookup (constant $O(1)$ time).

In this simple implementation, we use an array of linked lists and a hash code function to store the values.

**To Insert a key**,

* First, compute the key’s hash code, which will usually be an `int` or `long`.
* Then, map the hash code to an index in the array. Eg: `hash(key) % array_length`.
* _Store the key and value in this index_, we must use linked list because of collisions.

<br />

How can we design the HashMap which is similar to used in programming languages?

Few points to consider while designing the HashMap, 

* How to handle the collisions? Collision is if the same key is mapped to more than value. 
* HashMap should be efficient and should automatically grow and shrink in size. 

We will look at first, How to handle collisions. There are multiple ways of handling HashTable (HashMap) collision, here I have used Chaining with Linked Lists.

<br />

**Chaining with Linked Lists**

The hash table’s array maps to a linked list of items. We just add the items to this linked list. As long as the number of collisions is fairly small, this will be quite efficient.

In the worst case, lookup is $O(n)$, where the $n$ is the number of elements in the Linked List.

<br />

**Automatically increase and decrease in size**

Since internally, all `HashMap` implementation uses _array to store the values_. 

As we know array's can't be increase or decrease in size automatically, because once we initialize the array with a fixed size, the array is default to the size, until we re-assign the values with new array or re-initialize the array with the new size when program needs. 

But HashMap stores and operates thousands and millions of elements seamlessly with constant $O(1)$ time. As technically it's `amortized` constant $O(1)$ time. 

What is amortized time?

When the array in it has reached its capacity and need to re-create itself with the doubled size. The array has hit the capacity and we have no slots available. Then we need to create a brand new array with the doubled size. And then copy the items in the old one to the new one, which takes $O(n)$ where $n$ is the capacity of the old array and the worst case.

<br />

The implementation of HashMap increase / decrease in size happens in the below cases.

Initial Capacity is $16$ and I have used `Load Factor` as $75$%, As soon as the size reaches $75$%, Hashmap does table doubling and shrink automatically ($~30$%).

If $m > n$, HashMap allocating the memory for $2*N$ elements and **rehasing the entire array for the newly allocated slots**.

If $n / 4$ size reached while removing elements, then Hashmap shrink it to $n / 2$ size.

<br />

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class MyHashMap {
    
    private static final int INITIAL_CAPACITY = 1 << 4;
    private static final int MAXIMUM_CAPACITY = 1 << 16;
    private static final float LOAD_FACTOR = 0.75f;

    private ListNode[] arr;

    private int capacity = INITIAL_CAPACITY;
    private int threshold = (int) (INITIAL_CAPACITY * LOAD_FACTOR); // Default
    private int shrink_threshold = 0;
    private int size = 0;

    public MyHashMap() {
        arr = new ListNode[INITIAL_CAPACITY];
    }

    /* Value will always be non-negative */
    public void put(int key, int value) {
        int _key = hash(key);
        ListNode node = arr[_key];
        if (node != null) {
            node.add(key, value);
        } else {
            node = new ListNode(key, value);
            arr[_key] = node;
        }
        // Threshold Range for Table doubling
        if (++size > threshold) {
            grow();
        }
    }

    /* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    public int get(int key) {
        int _key = hash(key);
        ListNode node = arr[_key];
        Node item;
        if (node == null || (item = node.find(key)) == null) {
            return -1;
        }
        return item.val;
    }

    /* Remove the mapping of the specified value of key */
    public void remove(int key) {
        int _key = hash(key);
        ListNode node = arr[_key];
        if (node == null) return;
        // System.out.println("has removed for key - " + key);
        node.remove(key);
        // If head is null, then remove that item from array
        if (node.head == null) {
            arr[_key] = null;
        }
        // Shrink Threshold Range for Table half reducing
        if (--size < shrink_threshold) {
            shrink();
        }
    }

    /* Get size */
    public int size() {
        return size;
    }

    /* Hash key function */
    private int hash(int key) {
        return key % capacity;
    }

    private void grow() {
        if ((capacity <<= 1) >= MAXIMUM_CAPACITY) {
            capacity = MAXIMUM_CAPACITY;
        }
        ListNode[] oldArr = arr;
        ListNode[] newArr = new ListNode[capacity];
        int count = 0;
        for (int i = 0; i < oldArr.length; i++) {
            ListNode node = oldArr[i];
            if (node != null) {
                Node current = node.head;
                while (current != null) {
                    int _key = hash(current.key);
                    node = newArr[_key]; // New Key check
                    if (node != null) {
                        node.add(current.key, current.val);
                    } else {
                        node = new ListNode(current.key, current.val);
                        newArr[_key] = node;
                    }
                    current = current.next;
                }
                count += 1;
            }
        }
        // Update next threshold
        threshold = (int) (capacity * LOAD_FACTOR);
        arr = newArr;
        size = count; // Actual size
    }

    private void shrink() {
        if ((capacity >>= 1) <= INITIAL_CAPACITY) {
            capacity = INITIAL_CAPACITY;
        }
        ListNode[] oldArr = arr;
        ListNode[] newArr = new ListNode[capacity];
        int count = 0;
        for (int i = 0; i < oldArr.length; i++) {
            ListNode node = oldArr[i];
            if (node != null) {
                Node current = node.head;
                while (current != null) {
                    int _key = hash(current.key);
                    node = newArr[_key]; // New Key check
                    if (node != null) {
                        node.add(current.key, current.val);
                    } else {
                        node = new ListNode(current.key, current.val);
                        newArr[_key] = node;
                    }
                    current = current.next;
                }
                count += 1;
            }
        }
        // Update next shrink threshold
        if (capacity == INITIAL_CAPACITY) {
            shrink_threshold = 0;
        } else {
            shrink_threshold = (int) ((capacity >> 1) * LOAD_FACTOR);
        }
        arr = newArr;
        size = count;
    }

    private class Node {
        int key, val;
        Node next;

        public Node(int key, int val) {
            this.key = key;
            this.val = val;
        }

        public Node(int key, int val, Node next) {
            this(key, val);
            this.next = next;
        }
    }

    private class ListNode {
        private Node head;
        private Node tail;

        private int size = 0;

        private ListNode(int key, int val) {
            head = new Node(key, val);
            tail = head;
            size += 1;
        }

        private void add(int key, int val) {
            boolean updateNode = update(key, val);
            if (!updateNode) {
                Node node = new Node(key, val);
                if (head == tail) {
                    head.next = node; // 2nd Node
                } else {
                    tail.next = node;
                }
                tail = node;
            }
            size += updateNode ? 0 : 1;
        }

        private boolean update(int key, int val) {
            Node node = find(key);
            if (node != null) {
                node.val = val;
                return true;
            }
            return false;
        }

        private Node find(int key) {
            if (head == null) return null;
            Node current = head;
            while (current != null && current.key != key) {
                current = current.next;
            }
            return current;
        }

        private void remove(int key) {
            if (head == null) return;
            if (head.key == key) {
                if (head == tail) {
                    head = null; tail = null;
                } else {
                    head = head.next;
                }
            } else {
                Node current = head, prev = null;
                while (current != null && current.key != key) {
                    prev = current;
                    current = current.next;
                }
                if (prev.next == null) return;
                prev.next = prev.next.next;
                // Last Node
                if (prev.next == null) {
                    if (tail.key == key) {
                        tail = prev;
                    } else {
                        tail = head;
                    }
                }
            }
            size -= 1;
        }
    }
}

```
</TabItem>
</Tabs>


