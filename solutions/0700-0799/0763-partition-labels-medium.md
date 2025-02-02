---
description: 'Author: @ColeB2 | https://leetcode.com/problems/partition-labels/'
tags: [Hash Table, Two Pointers, String, Greedy]
---

# 0763 - Partition Labels (Medium)

## Problem Link

https://leetcode.com/problems/partition-labels/

## Problem Statement

You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be `s`.

Return _a list of integers representing the size of these parts_.

**Example 1:**

```
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
```

**Example 2:**

```
Input: s = "eccbbbbdec"
Output: [10]
```

**Constraints:**

- `1 <= s.length <= 500`
- `s` consists of lowercase English letters.

## Approach 1: Greedy

To solve this we know that we need to make as many windows as we can, that contain characters that appear in only that window. So we can imagine if start with a character in a window, that we would have to continue to grow our window until we run out of occurrences of that character. Not only that but for each character we add to our window, we must also run out of occurrences of those characters too.

Knowing that we will need a hashmap to track the characters in the string. By using our hash map to track the furthest right each character appears in the string, we can vastly simplify our code. Then in combination with a pointer that tells us what is the furthest right a character in our window stretches to, we can iterate through the string, updating how far the furthest character in our window stretches too with each new character added, and we can stop growing our window when our iteration reaches the furthest right character.

That's the point we mark the size of the window to add to our partitions length array and adjust our left pointer to start the process over again.

Time Complexity: $$O(n)$$, we only need to iterate over our string twice, once to create our hash map, and another to solve the problem.

Space Complexity: $$O(26)$$, there are only $$26$$ unique lowercase characters, which is the maximum size our partitions length array can reach, as well as our hash map.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        # hash map to hold the furthest right a character can be in string
        # s. This help simplify things, as when a character enters the
        # window, we don't have to count how many characters are left, we
        # can just keep expanding the window until we reach that
        # characters furthest right position.
        chars_position = {}
        for i, ch in enumerate(s):
            # by always setting characters position to i, and iterating
            # left to right, we are guaranteed to have the furthest
            # right position be the value of the character in the hashmap.
            chars_position[ch] = i
        # array of partitions length we are going to return.
        partitions_length = []
        # left and right pointers. Left pointer is the left side of
        # the window, right pointer is the right side, which will be
        # updated everytime we add a new character to the window.
        left, right = 0, 0
        # iterate all characters in s tracking index and character
        for i, ch in enumerate(s):
            # update right side of our window. It will be updated with
            # the furthest right our incoming character can reach in s.
            right = max(right, chars_position[ch])
            # if our index ever reaches right, it means all characters
            # in the window don't appear in the remaining portion of the
            # string anymore so we can add this partition to our array.
            if i == right:
                # add the partition to the array and update our
                # left pointer.
                partitions_length.append(right - left + 1)
                left = right + 1
        return partitions_length
```

</TabItem>
</Tabs>
