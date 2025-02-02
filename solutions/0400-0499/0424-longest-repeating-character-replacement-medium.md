---
description: >-
  Author: @ColeB2 | https://leetcode.com/problems/longest-substring-without-repeating-characters/


tags: [Hash Table, String, Sliding Window]
---

# 0424 - Longest Repeating Character Replacement (Medium)

## Problem Link

https://leetcode.com/problems/longest-repeating-character-replacement/

## Problem Statement

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return _the length of the longest substring containing the same letter you can get after performing the above operations._

**Example 1:**

```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
```

**Example 2:**

```
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of only uppercase English letters.
- `0 <= k <= s.length`

## Approach 1: Sliding Window - Get the Most Frequent Letter Count

We need to create a window, where the letters inside of the window are all the exact same letters, except for `k` number of letters, which can be converted to the letter we need them to be to maintain a window of the same letter.

We can do that by tracking the left side of our window, and looping through the letters of `s`. On each iteration we need to update our hashmap with the incoming letter, check the value of the most commonly used letter inside hash map, check that the size of our window minus the value of most commonly used letter is less than or equal to k. If it isn't we know we have too many letters that need replacing so we can decrement the left most letter of our window's count inside the hash map and move the left side pointer forward.

Finally we can update our longest length of window counter.

Note: We have no need to continuously check that our window is in compliance after the first check, as we don't care about windows smaller than the longest window we created so far, so by shrinking it once, we know it won't falsely set a window length longer than the max length found so far.

Time complexity: $O(26*n)$ Where $n$ is the number of characters in the string, and $26$ is the length of the time to find the most commonly value of our hash map, as their are only $26$ uppercase English letters.

Space complexity: $O(26)$, As our counter will only ever get $26$ keys large, to handle the $26$ uppercase English letters.

<Tabs>

<TabItem value="python" label="Python">
<SolutionAuthor name="ColeB2"/>

```py
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # initialize variables.
        # l, left pointer, tracks the left side of our sliding window.
        l = 0
        # length, to track the longest window we end up creating.
        length = 0
        # counter, hash map to track count of each letter inside our window.
        counter = {}
        # loop to expand right side of our window, tracking the character to enter window.
        for r, ch in enumerate(s):
            # First add character to hash map, it it isn't in there initialize it
            # with a value of 0.
            if ch not in counter:
                counter[ch] = 0
            counter[ch] += 1
            # get the size of our current window.
            # number of replacements will be equal to
            # window_length - highest frequency value character.
            window_length = (r-l) + 1
            if window_length - max(counter.values()) > k:
                # decrement value in counter of left most character.
                counter[s[l]] -= 1
                # move left pointer up
                l += 1
            # update max length
            length = max(length, (r-l)+1)
        return length
```

</TabItem>
</Tabs>

## Approach 2: Sliding Window - Track Most Frequent Letter Count

Similar to Approach 1, with 1 little change related to the note. Since we don't really care about windows smaller than the longest window so far, we don't need to get the most common character in the window, we can just track the value outside of the loop, and update it as we update our hash map with the incoming letter. By doing this we save $O(26)$ time searching for the highest value. Improving our time complexity.

Note: most_frequent will track the max value of the most frequently used character that is inside of our max length window we ever reached. So for example if a previous window's most_frequent was 4, and we only have 3 most frequenct characters in current window, we know it isn't accurate, but we know that the 3 isn't large enough to overwrite our max length, so we can reuse the 4 anyways, which will only tie our max length, and won't increment it further above the max length.

Time complexity: $O(n)$ Where $n$ is the number of characters in the string.

Space complexity: $O(26)$, As our counter will only ever get $26$ keys large, to handle the $26$ uppercase English letters.

<Tabs>

<TabItem value="python" label="Python">
<SolutionAuthor name="ColeB2"/>

```py
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # initialize variables.
        # l, left pointer, tracks the left side of our sliding window.
        l = 0
        # length, to track the max length of the longest window we end up creating.
        length = 0
        # counter, hash map to track count of each letter inside our window.
        counter = {}
        # most_frequent, tracks value of most frequent letter inside our window.
        most_frequent = 0
        # loop to expand right side of our window, tracking the character to enter window.
        for r, ch in enumerate(s):
            # First add character to hash map, it it isn't in there initialize it
            # with a value of 0.
            if ch not in counter:
                counter[ch] = 0
            counter[ch] += 1
            # update most_frequent to reflect the frequency of most frequently
            # used character inside our window.
            most_frequent = max(most_frequent, counter[ch])
            # get the size of our current window.
            # number of replacements will be equal to
            # window_length - most_frequenct character.
            window_length = (r-l) + 1
            if window_length - most_frequent > k:
                # decrement value of in counter of left most character.
                counter[s[l]] -= 1
                # move left pointer up
                l += 1
            # update max length
            length = max(length, (r-l)+1)
        return length
```

</TabItem>
</Tabs>
