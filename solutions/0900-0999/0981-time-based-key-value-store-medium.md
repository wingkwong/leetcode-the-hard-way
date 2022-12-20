---
description: 'Author: @ganajayant | https://leetcode.com/problems/time-based-key-value-store/'
---

# 0981 - Time Based Key-Value Store (Medium)

## Problem Link

https://leetcode.com/problems/time-based-key-value-store/

## Problem Statement

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the `TimeMap` class:

- `TimeMap()` Initializes the object of the data structure.
- `void set(String key, String value, int timestamp)` Stores the key `key` with the value `value` at the given time `timestamp`.

- `String get(String key, int timestamp)` Returns a value such that `set` was called previously, with `timestamp_prev <= timestamp`. If there are multiple such values, it returns the value associated with the largest `timestamp_prev`. If there are no values, it returns `""`.

**Example 1:**

```
Input: ["TimeMap", "set", "get", "get", "set", "get", "get"] 
        [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output: [null, null, "bar", "bar", null, "bar2", "bar2"]
```

**Constraints:**

* `1 <= key.length, value.length <= 100`
* `key` and `value` consist of lowercase English letters and digits.
* `1 <= timestamp <= 10^7`
* All the timestamps `timestamp` of `set` are strictly increasing.
* At most `2 * 10^5` calls will be made to `set` and `get`.

## Approach 1: Binary Search
Create a hashmap to store key, value pairs. Here the value timestamp value with acutal value which is stored in another Object of class Element
Whenever get used for a particular element we will be going to get all the values of corresponding key and binary search the list of timestamps 


<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Element {
    String val;
    int timestamp;

    public Element(String val, int timestamp) {
        this.val = val;
        this.timestamp = timestamp;
    }

}

class TimeMap {
    HashMap<String, LinkedList<Element>> hm;

    public TimeMap() {
        hm = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        if (hm.containsKey(key)) {
            LinkedList<Element> ll = hm.get(key);
            ll.add(new Element(value, timestamp));
            hm.put(key, ll);
        } else {
            LinkedList<Element> ll = new LinkedList<>();
            ll.add(new Element(value, timestamp));
            hm.put(key, ll);
        }
    }

    public String get(String key, int timestamp) {
        LinkedList<Element> ll = hm.getOrDefault(key, null);
        if (ll == null) {
            return "";
        }
        int low = 0, high = ll.size() - 1;
        if (ll.get(low).timestamp > timestamp) {
            return "";
        }
        if (ll.get(high).timestamp <= timestamp) {
            return ll.get(high).val;
        }
        while (low < high) {
            int mid = (low + high) / 2;
            if (ll.get(mid).timestamp == timestamp) {
                return ll.get(mid).val;
            }
            if (ll.get(mid).timestamp < timestamp) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }
        return ll.get(low - 1).val;
    }
}
```
</TabItem>


<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class TimeMap:
    # Here we will implement our TimeMap. We need easy access to our values, via
    # a key,value pair system, as well as we may also have multiple values for 
    # each key, which will be inputted at a given timestamp. So a hash map, for
    # O(1) access given keys, with values being an array of all our values at a given
    # timestamp. ie: { key: [(timestamp1, value1), (timestamp2, value2)...] }
    # That gives us O(1) access to the arrays, then we just need to search. Knowing
    # values will be added in strictly increasing order means they will be sorted
    # by time, allowing us to use Binary Search, O(logn), to search over timestamps.
    def __init__(self):
        # initialize empty hash map, O(1) to init.
        self.map = {}
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        # add key, value, timestamps to hash map, O(1) to add to hash map.
        # key doesn't yet exist in our hash map, initialize as empty array.
        if key not in self.map:
            self.map[key] = []
        # add tuple to hash map @ key, consisting of (timestamp, value)
        self.map[key].append((timestamp, value))
        

    def get(self, key: str, timestamp: int) -> str:
        # Get value from key, #O(logn) where n length of array we are searching.
        # base case: key doesn't exist, return early
        if key not in self.map:
            return ""
        # get value at key, which is an array we will be binary searching.
        arr = self.map[key]
        # base case: checking if timestamp predates all times in array,
        # if timestamp does predate all times, return early
        if timestamp < arr[0][0]:
            return ""
        # binary search, initialize left, l and right, r pointers.
        l, r = 0, len(arr)
        while l < r:
            # calculate middle, m. Do it this way as good practice
            # for languages that might overflow max integer.
            m = l + (r - l) // 2
            time = arr[m][0]
            # found time, return early
            if time == timestamp:
                return arr[m][1]
            # time looking at is smaller than timestamp we need.
            elif time < timestamp:
                # move left pointer, scan the array, right of m.
                l = m + 1
            # time we are looking at is larger than timestamp we need.
            else:
                # move right pointer, scan the array, left of m.
                r = m
        # our binary search will always either return the proper answer
        # or finish with left pointer 1 above the answer, as it didn't
        # exactly find the answer, so we can return:
        return arr[l - 1][1]
```
</TabItem>
</Tabs>
