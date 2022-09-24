---
description: 'Author: @ganajayant | https://leetcode.com/problems/time-based-key-value-store/'
---

# 981 - Time Based Key-Value Store (Medium)

## Problem Link

https://leetcode.com/problems/time-based-key-value-store/

## Problem Statement

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.

String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

**Example 1:**

```
Input: ["TimeMap", "set", "get", "get", "set", "get", "get"] 
        [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output: [null, null, "bar", "bar", null, "bar2", "bar2"]
```

**Constraints:**

* `1 <= key.length, value.length <= 100`
* `key and value consist of lowercase English letters and digits.`
* `1 <= timestamp <= 107`
* `All the timestamps timestamp of set are strictly increasing.`
* `At most 2 * 105 calls will be made to set and get.`

## Approach 1: Binary Search
create a hashmap to store key value pair,here the value timestamp value with acutal value which is stored in another Object of class Element
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
</Tabs>
