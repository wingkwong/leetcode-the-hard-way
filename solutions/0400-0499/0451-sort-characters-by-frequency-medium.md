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

## Approach 1: Using an Array of Buckets

1. Count Character Frequencies:

    The code starts by creating an unordered map `freqMap`, where each character in the string `s` is associated with its frequency (the number of times it appears in the string). It counts the character frequencies by iterating through the input string `s`.

2. Finding Maximum Frequency:

    After counting all character frequencies, the code finds the maximum frequency, which determines the range of frequencies in the input string. This is done by iterating through the `freqMap` and keeping track of the maximum frequency encountered `(maxFreq)`.

3. Bucket Creation:

    The code creates a vector of strings called buckets with a size of `maxFreq + 1`. These buckets will be used to store characters based on their frequencies. Each bucket is an empty string initially.

4. Distribute Characters into Buckets:

    The code then distributes characters into the buckets based on their frequencies. For each character-frequency pair in `freqMap`, it appends the character to the appropriate bucket corresponding to its frequency.

5. Build the Sorted String:

    - Next, the code initializes an empty string called result to store the final sorted string.
    - It iterates over the buckets in reverse order, starting from the bucket with the highest frequency `(maxFreq)`.For each bucket, it appends the characters in that bucket to the result string.
    - This process effectively builds the sorted string by placing characters with higher frequencies before characters with lower frequencies.

6. Return the Sorted String:

    Finally, the code returns the result, which contains the input string s sorted based on character frequencies in decreasing order.


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

## Approach 2: Using MultiMap

1. Create a Multimap: 

    We start by creating a `multimap<int, char, greater<int>>` called freq_map. This multimap will store characters as keys and their frequencies as values. We use `greater<int>` as the comparison function to ensure that the multimap orders elements in descending order of frequency

2. Count Character Occurrences: 

    Next, we use an unordered map called count to count the occurrences of each character in the input string s. We iterate through the string and update the count for each character.

3. Insert into Multimap: 

    After counting, we iterate through the count map. For each character and its corresponding frequency, we insert a pair into the freq_map multimap. The key is the frequency, and the value is the character. The use of a multimap allows multiple characters with the same frequency to be stored.

4. Construct the Sorted String: 

    Now that we have the characters and their frequencies sorted in the freq_map, we construct the sorted string. We initialize an empty string called result.

5. Iterate Through the Multimap: 

    We iterate through the freq_map, which is already sorted in descending order of frequency. For each pair (frequency, character), we append the character to the result string frequency times. This effectively constructs the sorted string based on character frequencies.

6. Return the Result:

    Finally, we return the result string, which contains the characters sorted in decreasing order of frequency.


__Time Complexity__ is $O(n)$, where $n$ is the length of the input string `s`.

__Space Complexity__ is $O(n)$, where $n$ is the length of the input string `s`.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    string frequencySort(string s) {
        // Create a multimap to store characters and their frequencies
        multimap<int, char, greater<int>> freq_map;

        // Count character occurrences and insert into the multimap
        unordered_map<char, int> count;
        for (char c : s) {
            count[c]++;
        }
        for (const auto& pair : count) {
            freq_map.insert({pair.second, pair.first});
        }

        // Construct the sorted string
        string result;
        for (const auto& pair : freq_map) {
            int freq = pair.first;
            char c = pair.second;
            result.append(freq, c);
        }

        return result;
    }
};

```
</TabItem>
</Tabs>


