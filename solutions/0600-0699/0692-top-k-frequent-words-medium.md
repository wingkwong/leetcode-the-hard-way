---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/top-k-frequent-words/
---

# 0692 - Top K Frequent Words (Medium)

## Problem Link

https://leetcode.com/problems/top-k-frequent-words/

## Problem Statement

Given an array of strings `words` and an integer `k`, return the `k` _most frequent strings_.

Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.

**Example 1:**

```
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
```

**Example 2:**

```
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
```

**Constraints:**

* `1 <= words.length <= 500`
* `1 <= words[i].length <= 10`
* `words[i]` consists of lowercase English letters.
* `k` is in the range `[1, The number of unique words[i]]`

**Follow-up**: Could you solve it in `O(n log(k))` time and `O(n)` extra space?


## Approach 1: Priority Queue

The idea is to solve this question by, first count all occurances of each word, and then add each word to a PriorityQueue (heap) that sorts the entries based on the number of occurances counted. If the number of occurances are equal, we want to sort in lexicographical order.

The ideal approach is use to **MinHeap**, that helps maintains the elements sorted from smallest to largest. The lowest element will be stayed on top so that it can easily polled out. This allows the optimal runtime because the size of the heap never goes over $(k + 1)$.

The heap structure can guarantee the collection stays sorted upon addition and deletion in $O(log m)$ time (where **m is the number of elements in the heap**).

Time Complexity: $O(n log(k))$, where $n$ - # of words, $k$ - top K frequency words

Space Complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        LinkedList<String> result = new LinkedList<>();
        // Word occurrence frequency
        Map<String, Integer> frequency = new HashMap<>();
        for (String word : words) {
            frequency.put(word, frequency.getOrDefault(word, 0) + 1);
        }
        Comparator<String> wordComparator = (w1, w2) -> {
            return frequency.get(w1) == frequency.get(w2) ? w2.compareTo(w1) : frequency.get(w1) - frequency.get(w2);
        };
        PriorityQueue<String> priorityQueue = new PriorityQueue<>(wordComparator);
        for (String word : frequency.keySet()) {
            priorityQueue.offer(word);
            if (priorityQueue.size() > k) priorityQueue.poll();
        }
        while (!priorityQueue.isEmpty()) {
            result.addFirst(priorityQueue.poll());
        }
        return result;
    }
}
```
</TabItem>
</Tabs>


## Approach 2: Bucket Sort

Consider, if we could find the no. of occurances of all words and forms frequency ordering element from highest to lowest, the we could solve this problem easily. 

- Builds a word frequency of all words
- Then, build a value frequency (no of occurances) of all words from highest to lowest
- Iterate through value frequency HashMap, and add only top $K$ elements to result and return it. 

Time Complexity: $O(n log(k))$, where $n$ - # of words, $k$ - top K frequency words

Space Complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        List<String> result = new LinkedList<>();
        // Value frequency
        Map<Integer, List<String>> table = new HashMap<>();
        // Word occurrence frequency
        Map<String, Integer> frequency = new HashMap<>();
        for (String word : words) {
            frequency.put(word, frequency.getOrDefault(word, 0) + 1);
        }
        frequency.forEach((key, value) -> {
            List<String> keys = table.getOrDefault(value, new ArrayList<>());
            keys.add(key);
            table.put(value, keys);
        });
        for (int i = words.length; i > 0; i--) {
            if (table.containsKey(i)) {
                List<String> sorted = table.get(i).stream().sorted(Comparator.naturalOrder()).collect(Collectors.toList());
                for (int j = 0; j < sorted.size() && result.size() < k; j++) {
                    result.add(sorted.get(j));
                }
            }
        }
        return result;
    }
}
```
</TabItem>
</Tabs>


## Approach 3: STL (Comparator Interface)

Leveraging the Comparator interface and sorting the elements by considering object attributes for comparison. 
This feature allows to use Lambda expression in the context of Functional Interfaces. 

This is an Optimal solution with minimizing the amount of operation we did in the above two approaches. 

Time Complexity: $O(n log(k))$, where $n$ - # of words, $k$ - top K frequency words

Space Complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        // Word occurrence frequency
        Map<String, Integer> frequency = new HashMap<>();
        for (String word : words) {
            frequency.put(word, frequency.getOrDefault(word, 0) + 1);
        }
        List<String> result = new ArrayList<>(frequency.keySet());
        Comparator<String> wordCompartor = (w1, w2) -> {
            return frequency.get(w1) == frequency.get(w2) ? w1.compareTo(w2) : frequency.get(w2) - frequency.get(w1);
        };
        Collections.sort(result, wordCompartor);
        return result.subList(0, k);
    }
}
```
</TabItem>
</Tabs>

