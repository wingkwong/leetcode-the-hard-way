---
title: 'Sliding Window'
description: 'Sliding window is a technique used to solve problems in array or string.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - sliding window
  - algorithm
---

<TutorialAuthors names="@heiheihang, @wingkwong"/>

## Overview

Sliding Window is a technique used for iterating through a finite data set, typically an array, in a specific and controlled way. It involves creating a window, which is a subset of the data, that "slides" through the larger data set, typically one element at a time, while performing a specific operation on each subset of the data.

The size of the window and the number of elements it moves at each step can be adjusted to suit the needs of the specific problem being solved. The technique is commonly used in algorithms that involve finding patterns or trends in data, such as finding the maximum/minimum value in a set of data, or counting the number of occurrences of a specific element.

Sliding window can be applied in various problems such as:

- Finding the maximum/minimum value in a set of data.
- Counting the number of occurrences of a specific element.
- Finding the longest substring without repeating characters.
- Finding the maximum sum of a sub-array of size $k$.

Overall, the sliding window technique is a useful approach for solving specific types of problems that involve iterating through a data set in a controlled way, such as in pattern matching, data analysis, and statistics. It allows for an efficient and controlled iteration of a data set, which can lead to improved performance and more accurate results.

# Example 1: [1876 - Substrings of Size Three with Distinct Characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)

> A string is **good** if there are no repeated characters.
>
> Given a string `s`, return _the number of **good substrings** of length **three** in_ `s`.
>
> Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
>
> A **substring** is a contiguous sequence of characters in a string.

For example, with this input:

```py
s = "xyzzaz"
```

The substrings with length of 3 are:

```py
s1 = "xyz" #index 0-2
s2 = "yzz" #index 1-3
s3 = "zza" #index 2-4
s4 = "zaz" #index 3-5
```

Among these substrings, the only substring with distinct characters is `"xyz"`.

In this problem, we need to keep a _window_ of substrings of length 3.

We can use the following strategy:

* `left_pointer` to keep track of the left character of the substring length of $3$
* `right_pointer` to keep track of the right character of the substring length of $3$
* We check if the following characters are unique:
  * `s[left_pointer]`
  * `s[left_pointer + 1]`
  * `s[right_pointer]`

Let's take a look at the following solution:

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```py
def countGoodSubstrings(self, s: str) -> int:
        # two pointers to keep track of sliding window
        left_pointer = 0
        right_pointer = 2
        unique_substring_count = 0
        # when the sliding window is within s
        while (right_pointer < len(s)):
            # we declare the 3 characters in the sliding window
            first_char = s[left_pointer]
            second_char = s[left_pointer + 1]
            third_char = s[right_pointer]
            #  if all characters are unique, add 1
            if (first_char != second_char and first_char != third_char and second_char != third_char):
                unique_substring_count += 1
            # shift the sliding window right
            left_pointer += 1
            right_pointer += 1
        # return result
        return unique_substring_count
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int countGoodSubstrings(string s) {
        int left_pointer = 0;
        int right_pointer = 2;
        int unique_substring_count = 0;
        while (right_pointer < s.length()) {
            char first_char = s[left_pointer];
            char second_char = s[left_pointer + 1];
            char third_char = s[right_pointer];
            if (first_char != second_char && first_char != third_char && second_char != third_char) {
                unique_substring_count += 1;
            }
            left_pointer += 1;
            right_pointer += 1;
        }
        return unique_substring_count;
    }
};

```
</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    public int countGoodSubstrings(String s) {
        int left_pointer = 0;
        int right_pointer = 2;
        int unique_substring_count = 0;
        
        while (right_pointer < s.length()) {
            char first_char = s.charAt(left_pointer);
            char second_char = s.charAt(left_pointer + 1);
            char third_char = s.charAt(right_pointer);
            
            if (first_char != second_char && first_char != third_char && second_char != third_char) {
                unique_substring_count += 1;
            }
            
            left_pointer += 1;
            right_pointer += 1;
        }
        
        return unique_substring_count;
    }
}
```
</TabItem>
</Tabs>

In this problem, the size of the sliding window is constant. There are harder problems with varying sliding window size, but you need to learn [Hash Map](hash-map) first.

export const suggestedProblems = [
  {
    "problemName": "1852 - Distinct Numbers in Each Subarray",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/distinct-numbers-in-each-subarray",
    "solutionLink": "../../solutions/1800-1899/distinct-numbers-in-each-subarray-medium"
  },
  {
    "problemName": "1004 - Max Consecutive Ones III",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/max-consecutive-ones-iii",
    "solutionLink": "../../solutions/1000-1099/max-consecutive-ones-iii-medium"
  },
  {
    "problemName": "1876 - Substrings of Size Three with Distinct Characters",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />