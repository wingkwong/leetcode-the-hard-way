---
description: 'Author: @ganajayant | https://leetcode.com/problems/bitwise-xor-of-all-pairings'
---

# 2425 - Bitwise XOR of All Pairings (Medium) 

## Problem Link

https://leetcode.com/problems/bitwise-xor-of-all-pairings/

## Problem Statement

You are given two 0-indexed arrays, `nums1` and `nums2`, consisting of non-negative integers. There exists another array, `nums3`, which contains the bitwise XOR of all pairings of integers between `nums1` and `nums2` (every integer in nums1 is paired with every integer in nums2 exactly once).

Return the bitwise XOR of all integers in `nums3`.

**Example 1:**

```
Input: nums1 = [2,1,3], nums2 = [10,2,5,0]
Output: 13
Explanation: A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
The bitwise XOR of all these numbers is 13, so we return 13.
```

**Example 2:**

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 0
Explanation: All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
and nums1[1] ^ nums2[1].
Thus, one possible nums3 array is [2,5,1,6].
2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 10^5`
- `0 <= nums1[i], nums2[j] <= 10^9`

## Approach 1: XOR Properties
**Concepts**
* XOR of even times of a number is zero (0)
* XOR of odd times of a number is number itself

**Understanding** <br />
let n = nums1.length and m = nums2.length;

**Case 1: when n and m are even** <br />
suppose $nums1=[a, b]$, $nums2=[c, d]$
taking xor results in $[a \oplus{} c, a \oplus{} d, b \oplus{} c, b \oplus{} d]$ <br />
finally taking xor of all results in $[a \oplus{} c \oplus{} a \oplus{} d \oplus{} b \oplus{} c \oplus{} b \oplus{} d ]$ <br />
we know that x $\oplus{}$ x=0(even times xor with self = 0) <br />
Now, the above xor becomes $[a \oplus{} a \oplus{} b \oplus{} b \oplus{} c \oplus{} c \oplus{} d \oplus{} d]$ => $[0 \oplus{} 0 \oplus{} 0 \oplus{} 0]$ = 0<br />
result = 0

**Case 2 : when n and m are odd** <br />
Let $x_1$= xor of all elements of $nums1$, $x_2$=xor of all elements of $nums2$ <br />
suppose $nums1=[a]$, $nums2=[c]$<br /> 
taking xor results in $[a \oplus{} c]$<br />
result = $x_1 \oplus{} x_2$

**Case 3/4: when one of them is odd and other is even**<br />
let $nums1=[a, b, c]$, $nums2=[d, e]$<br />
Let's $x_1$= xor of all elements of $nums1$, $x_2$=xor of all elements of $nums2$ <br />
that is $x_1=a \oplus{} b \oplus{} c$, $x_2=d \oplus{} e$<br />
Since in this case n is even we can clearly see that each element of $nums1$ repeat even times that makes xor as 0<br />
and m is odd we get resultant xor of $nums2$ which is $x_2$ that is d $\oplus{}$ e<br />
result = $x_2$(if m is even) , $x_1$ (if n is even)

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    private int xor(int[] nums) {
        int res = 0;
        for (int num : nums) {
            res ^= num;
        }
        return res;
    }

    public int xorAllNums(int[] nums1, int[] nums2) {
        if (nums1.length % 2 == 0 && nums2.length % 2 == 0) { // if both arrays have even length
            return 0;
        }
        int xorone = xor(nums1), xortwo = xor(nums2);
        if (nums1.length % 2 == 1 && nums2.length % 2 == 1) { // if both arrays have odd length
            return xorone ^ xortwo;
        } else if (nums1.length % 2 != 0) { // if nums1 has odd length
            return xortwo;
        } else { // if nums2 has odd length
            return xorone;
        }
    }
}
```
</TabItem>
</Tabs>