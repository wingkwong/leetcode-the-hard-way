---
description: >-
  Author: @Sanchita1304 |
  https://leetcode.com/problems/sort-characters-by-frequency/
---

# 0451 - Sort Characters by Frequency (Medium)

## Problem Link

https://leetcode.com/problems/sort-characters-by-frequency/

## Problem Statement

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

**Example 1:**

```
Input: s = "tree"
Output: "eert"

Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
```

**Example 2:**

```
Input: s = "cccaaa"
Output: "aaaccc"

Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
```

**Example 3:**
```
Input: s = "Aabb"
Output: "bbAa"

Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```

**Constraints:**

- `1 <= s.length <= 5 * 105.`
- `s` consists of uppercase and lowercase English letters and digits.

## Approach 1: Using a Hash Map and Buckets

1. Counting Frequencies:

    Create an unordered_map freqMap to count the frequency of each character in the input string s.

2. Finding Maximum Frequency:

    Iterate through freqMap to find the maximum frequency (maxFreq). This value helps determine the range of frequencies.

3. Bucket Creation:

    Create a vector of vectors called buckets, where each inner vector represents characters with the same frequency. The size of buckets is maxFreq + 1 to accommodate all possible frequencies.

4. Distributing Characters:

    Distribute characters into their respective buckets based on their frequencies. Iterate through freqMap, and for each character, place it in the corresponding bucket determined by its frequency.

5. Building Sorted String:

    Build the sorted string result by iterating over the buckets in decreasing order of frequency (maxFreq to 1). For each bucket, add the characters back to the result string in the order they appear in the bucket.

6. Return Result:

    Return the sorted string result as the output.


__Time Complexity__ is $O(n)$, where $n$ is the length of the input string `s`.

__Space Complexity__ is $O(c + maxFreq)$, where $c$ is the number of unique characters and $maxFreq$ is the maximum character frequency.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    string frequencySort(string s) {
        // Create a hash map to count character frequencies
        unordered_map<char, int> freqMap;
        for (char ch : s) {
            freqMap[ch]++;
        }

        // Find the maximum frequency to determine the range of frequencies
        int maxFreq = 0;
        for (const auto& entry : freqMap) {
            maxFreq = max(maxFreq, entry.second);
        }

        // Create buckets to store characters based on their frequencies
        vector<vector<char>> buckets(maxFreq + 1);

        // Distribute characters into buckets based on their frequencies
        for (const auto& entry : freqMap) {
            buckets[entry.second].push_back(entry.first);
        }

        // Build the sorted string by iterating over the buckets
        string result;
        for (int i = maxFreq; i >= 1; i--) {
            for (char ch : buckets[i]) {
                result += string(i, ch);
            }
        }

        return result;
    }
};

```
</TabItem>
</Tabs>


## Approach 2: Using an Array of Buckets

1. Counting Frequencies:

    Create an unordered_map freqMap to count the frequency of each character in the input string s.

2. Finding Maximum Frequency:

    Iterate through freqMap to find the maximum frequency (maxFreq). This value helps determine the range of frequencies.

3. Bucket Creation:

    Create a vector of strings called buckets, where each element represents characters with the same frequency. The size of buckets is maxFreq + 1 to accommodate all possible frequencies.

4. Distributing Characters:

    Distribute characters into their respective buckets based on their frequencies. Iterate through freqMap, and for each character, append it to the corresponding bucket determined by its frequency.

5. Building Sorted String:

    Build the sorted string result by iterating over the buckets in decreasing order of frequency (maxFreq to 1). For each bucket, concatenate its contents to the result string.

6. Return Result:

    Return the sorted string result as the output.

__Time Complexity__ is $O(n)$, where $n$ is the length of the input string `s`.

__Space Complexity__ is $O(c + maxFreq)$, where $c$ is the number of unique characters and $maxFreq$ is the maximum character frequency.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    string frequencySort(string s) {
        // Create a hash map to count character frequencies
        unordered_map<char, int> freqMap;
        for (char ch : s) {
            freqMap[ch]++;
        }

        // Find the maximum frequency to determine the range of frequencies
        int maxFreq = 0;
        for (const auto& entry : freqMap) {
            maxFreq = max(maxFreq, entry.second);
        }

        // Create an array of buckets to store characters based on their frequencies
        vector<string> buckets(maxFreq + 1, "");

        // Distribute characters into buckets based on their frequencies
        for (const auto& entry : freqMap) {
            buckets[entry.second] += entry.first;
        }

        // Build the sorted string by iterating over the buckets
        string result;
        for (int i = maxFreq; i >= 1; i--) {
            result += buckets[i];
        }

        return result;
    }
};

```
</TabItem>
</Tabs>