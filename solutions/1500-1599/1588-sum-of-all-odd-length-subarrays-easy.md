---
description: >-
  Author: @luiz290788
---

# 1588 - Sum Of All Odd Length Subarrays (Easy)

## Problem Link

https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

## Problem Statement

Given an array of positive integers `arr`, return the sum of all possible **odd-length subarrays** of `arr`.

A **subarray** is a contiguous subsequence of the array.

**Example 1:**

```
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
```

**Example 2:**

```
Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
```

**Example 3:**

```
Input: arr = [10,11,12]
Output: 66
```

**Constraints:**

- `1 <= arr.length <= 100`
- `1 <= arr[i] <= 1000`
 
**Follow up:**

Could you solve this problem in $O(n)$ time complexity?

## Approach 1: Brute Force

Brute force solution for this problem is to generate every subarray with odd length and sum all its members.

Starting from the position one, we and sum all subarray of odd length that starts in the current position. We repeat this process to all positions.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@luiz290788"/>

```Java
class Solution {
  public int sumOddLengthSubarrays(int[] arr) {
    int totalSum = 0;
    
    for (int startingPosition = 0; startingPosition < arr.length; startingPosition++) {
      for (int length = 1; length + startingPosition - 1 < arr.length; length += 2) {
        for (int numberToSum = startingPosition; numberToSum < startingPosition + length; numberToSum++) {
          totalSum += arr[numberToSum];
        }
      }
    }

    return totalSum;
  }
}
```

</TabItem>
</Tabs>

**Time Complexity: $O(n^3)$**

Iterating over the starting positions is $O(n)$.

For each position, we iterate over the sizes of odd subarrays that can start on that position: $O(n/2).$

For each subarray, we need to iterate over its items to sum the values: $O(n).$

As each of the processes stated above are nested into each other the total complexity is $O(n^3)$.

**Space Complexity: $O(1)$**

The only extra memory we are using is the result sum.

## Approach 2: Sliding window

The second approach uses a sliding window. We can create a window of each odd size that fits the array and move the window removing the value of the first element and adding the value of the next element. With this approach we save an extra loop avoiding to calculate the window from scratch every time.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@luiz290788"/>

```Java
class Solution {
  public int sumOddLengthSubarrays(int[] arr) {
    int totalSum = 0;
    for (int windowSize = 1; windowSize <= arr.length; window += 2) {
      int windowSum = 0;
      
      // calculate the sum of the window with one element missing
      for (int index = 0; index < windowSize - 1; index++) {
        windowSum += arr[index];
      }

      // loop invariant: windowSum is always 1 element short
      for (int index = windowSize - 1; index < arr.length; index++) {
        // add the missing element
        windowSum += arr[index];
        totalSum += window;
        // remove the first element
        windowSum -= arr[index - (windowSize - 1)];
      }
    }
    
    return totalSum;
  }
}
```

</TabItem>
</Tabs>

**Time Complexity: $O(n^2)$**

Possible sizes of odd windows: $O(n)$.

Calculate window without the last element: $O(n)$.

Slide the window until the end of the array: $O(n)$.

As we only need to calculate the widow once for each size and then slide the complexity would be $O(n * (n + n)) => O(n^2)$.

**Space Complexity: $O(1)$**

The only extra memory we are using is the result sum and another one for the window sum.

## Approach 3: Calculate the number of subarrays and element is present.

Things gets a bit tricky when we think about the follow up question: Can we make it O(n)?

The idea to try to make this O(n) is to calculate the number of subarrays a single element would be present. If we can calculate that then we just need to iterate over the array once summing the current element times the number of subarrays it is present.

Let's forget for a bit the fact that we are only interested in odd-length subarrays. The total number of subarrays and element is present can be calculated with the following formula:

```
(element position + 1) * (number of elements - element position)
```

To visualize that we can create a table representing the subarrays. In the columns we have the index of the last element in the subarray and in the rows we have the first element of the subarray. Let's create that table for an array of size 8 and fulfill the table to calculate the number of subarrays the element in position 2 appears. An empty cell means impossible subarray (ending before it starts), `f` means element in position 3 is not present and `t` means it is present.

```
 |0|1|2|3|4|5|6|7
0|f|f|t|t|t|t|t|t
1| |f|t|t|t|t|t|t
2| | |t|t|t|t|t|t
3| | | |f|f|f|f|f
4| | | | |f|f|f|f
5| | | | | |f|f|f
6| | | | | | |f|f
6| | | | | | | |f
```

As we can observe, the `t`s formed a rectangle with sides position of the element plus 1 and number of elements minus the position of the element.

As we are only interested in the odd-length arrays, we can divide this number by two rounding up. When the number of subarrays is odd, we know that there is one more odd-length than even-length subarrays, eg: 7 subarrays => 3 even-length and 4 odd-length.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@luiz290788"/>

```Java
class Solution {
  public int sumOddLengthSubarrays(int[] arr) {
    int totalSum = 0;
    
    for (int index = 0; index < arr.length; index++) {
      int totalOfSubArrays = (index + 1) * (arr.length - i);
      // summing the rest of the division to round up
      totalSum += (totalOfSubArrays / 2 + totalOfSubArrays % 2) * arr[i];
    }

    return totalSum;
  }
}
```

</TabItem>
</Tabs>

**Time Complexity: $O(n)$**

Access each element of the array and calculate the number of subarrays for each: $O(n)$.

**Space Complexity: $O(1)$**

The only extra memory we are using is the result sum and another one for the window sum.