---
description: >-
  Author: @wkw, @vigneshshiv | https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits


tags: ['Sorting']
---

# 1356 - Sort Integers by The Number of 1 Bits (Easy)

## Problem Link

https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits

## Problem Statement

You are given an integer array `arr`. Sort the integers in the array in ascending order by the number of `1`'s in their binary representation and in case of two or more integers have the same number of `1`'s you have to sort them in ascending order.

Return _the array after sorting it_.

**Example 1:**

```
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]
```

**Example 2:**

```
Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
```

**Constraints:**

- `1 <= arr.length <= 500`
- `0 <= arr[i] <= 10^4`

## Approach 1: Sorting + \_\_builtin_popcount / Bit Count

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> sortByBits(vector<int>& arr) {
        sort(arr.begin(), arr.end(), [&](int a, int b){
            // __builtin_popcount(x) returns the number of 1-bits set in an int x.
            int x = __builtin_popcount(a), y = __builtin_popcount(b);
            return x == y ?
                // in case of two or more integers have the same number of 1's you have to sort them in ascending order
                a < b :
                // else sort the integers in the array in ascending order by the number of 1's in their binary representation
                x < y;
        });
        return arr;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int[] sortByBits(int[] arr) {
        return Arrays.stream(arr)
                .boxed()
                .sorted(Comparator.comparing(Integer::bitCount).thenComparing(Integer::intValue))
                .mapToInt(num -> num)
                .toArray();
    }
}
```

</TabItem>
</Tabs>

## Approach 2: Sorting with Math Logic

Since the input values can range from `0` to `10000`, we can add to each element on the array the value of the bit count (number of 1s) multiplied by 10001.

`10001` is not a magic number, it is merely the max possible number the array may have + 1, which ensures that the bit count has the maximum priority

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int[] sortByBits(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] += (Integer.bitCount(arr[i]) * 10001);
        }
        Arrays.sort(arr);
        for (int i = 0; i < arr.length; i++) {
            arr[i] %= 10001;
        }
        return arr;
    }
}
```

</TabItem>
</Tabs>
