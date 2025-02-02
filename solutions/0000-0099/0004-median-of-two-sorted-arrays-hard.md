---
description: 'Author: @ColeB2 | https://leetcode.com/problems/median-of-two-sorted-arrays/'
tags: [Array, Binary Search, Divide and Conquer]
---

# 0004 - Median of Two Sorted Arrays

## Problem Link

https://leetcode.com/problems/median-of-two-sorted-arrays/

## Problem Statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

**Example 1:**

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

**Example 2:**

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

**Constraints:**

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

## Approach 1: Linear Search

It is a hard problem, but we will try to derive some intuition from some the ground up. So we can imagine that we could just combine the arrays, and solve for the median. That would take $$O(m+n)$$ time and space. Slower than what is asked for in the problem, but surprisingly still passes for a hard question.

Can we improve? Out first question should be what is the median? For this question, basically it is the point where we need to separate the array if it were merged, to have an even number of elements on both sides. For an odd number of elements, it will be the middle number of the array, and for an even number of elements, it will be the average of the middle two.

Note we will be partitioning our X array, after the point we select. Ie, a partition at -1, mean we will be inserting our partition before the element at 0.

Knowing it is the separation of 2 equal halves of our array, should give us some intuition that there are only a small number of partitions that can be valid, based on where we partition the first array.

Example, array's X, and Y of elements: We can imagine, where every we partition our smallest array, which we will always select to be X, we have to find a partition in Y, which separates all the elements into 2 equal halves.

```
              |x1, x2, x3, x4
y1, y2, y3, y4|
```

We can imagine if we separate before the first element in X, we will need to place our partition in Y at a point that gives us 4 elements on the left side.

More examples:

```
        x1| x2, x3, x4
y1, y2, y3| y4
```

```
x1 x2| x3 x4
y1 y2| y3 y4
```

I hope you can see the point. Here we can see, that for each of the valid partitions in X, there is only 1 other place where we can partition Y so that there are an even number of elements on each side of the array.

Now how do we use this information? Well for a median to be valid, it needs to be the middle value/average of the middle values. Meaning we can use some comparisons on the elements to see if all the values on the left are less than all the values on the right to know that they are indeed in their proper halves.

So we can derive some rules to check:

- $$max\_x\_left <= min\_y\_right$$
- $$max\_y\_left <= min\_x\_right$$

If those rules pass, we know that we have a valid array. Note that we don't have to check if each value is less, just the max/min of each side, since we know that the arrays are sorted.

Once we know that the above rules are true and we have a valid median, we just need to solve how to calculate the median based on the number of elements. We can do that using 2 simple rules as well.

Odd Number of Elements:

- $$max(max\_x\_left,max\_y\_left)$$

That is the largest number on the left side of the partition will be our median. Note: The odd calculation depends on how we calculate our halfway point. If we calculate it as $$Floor((m + n + 1) / 2)$$ Then we can use the left side of the partition as the median. If we calculate half as $$floor(mn / 2)$$ then we need to take the right of the partition. As how we select which value to use for half, will affect our partitioning.

Even Number of Elements:

- $$(min(min\_x\_right, min\_y\_right) + max(max\_x\_left, max\_y\_left)) \over 2$$

That is, the largest number on the left side of the partition, and the smallest on the right side of the partition, all divided by 2.

Time Complexity: $$O(min(m,n))$$ Where m and n are the lengths of nums1 and nums2 respectively. It will be linear of the smallest array, as we only need to iterate over the smallest array, then make the partitions in the larger array respectively.

Space Complexity: $$O(1)$$ Only need constant extra space. For code readability below, I have copied over the arrays into separate variables, X and Y, but it could be done without the copy over, meaning $$O(1)$$.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Note I copy arrays nums1, nums2 to X, Y for readability, meaning we use
    # O(m+n) space instead of O(1) space, we could skip that step, and just
    # just reassign nums1, nums2 to make sure nums1 is always the smallest.
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Make sure the X array is the smallest array.
        X, Y = (nums1, nums2) if len(nums1) < len(nums2) else (nums2, nums1)
        # Get the lengths of each array
        m, n = len(X), len(Y)
        # Get the total number of elements
        mn = m + n
        # Find out what half the elements are.
        # Why total elements, n + 1 over 2?
        # Odds: middle will be (n+1)/2 where n total elements
        # Even: middle will be average n/2 and (n+1)/2 So by using n+1/2, we
        # just need to select the max of the left values when we return for odd
        # values below.
        half = int((m + n + 1) / 2)
        # Loop through each possible partition of x
        # Note we start at -1 as we are partitioning after the index we start at.
        # Ie: Negative one would be like placing a partition at the 0th index
        # before all the numbers
        for x_partition in range(-1, m):
            # Solve for our y partition. Since we want half elements on each side
            # We know we need half of m + n. So by subtracting the number of
            # elements in the X array (x_partition-2) we will get where we should
            # partition our array.
            # Ie, X,Y both length 4. If we partition X at -1, before all elements
            # Then we would be placing our Y partition after index 3. 4-(-1)-2.
            y_partition = half - x_partition - 2
            # Get smallest and largest values around the partitions in each array.
            # If we are outside  thebounds of the array, pick a sufficiently
            # small number ie. -inf if we are out of bounds to the left, and
            # +inf if we are over the right bound.
            # Get largest X value on left side of the partition
            max_x_left = X[x_partition] if x_partition >= 0 else float('-infinity')
            # get smallest x on right
            min_x_right = X[x_partition + 1] if x_partition + 1 < m else float('infinity')
            # get largest y on left
            max_y_left = Y[y_partition] if y_partition >= 0 else float('-infinity')
            # get smallest y on right
            min_y_right = Y[y_partition + 1] if y_partition + 1 < n else float('infinity')
            # Median check if both arrays left values are smaller than other
            # arrays right bounds, we have a valid median.
            if max_x_left <= min_y_right and max_y_left <= min_x_right:
                # Odd Check
                if mn % 2:
                    # Since we use half as int((m + n + 1) / 2), we will select
                    # the largest left values. If we used mn//2, we would take
                    # the smallest right value.
                    return max(max_x_left, max_y_left)
                # Even, take the average of the closest values to the partition.
                return (min(min_x_right, min_y_right) + max(max_x_left, max_y_left)) / 2
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

Knowing the intuition from above, if we can linearly search through all partitions, that means we can likely binary search through them and eliminate half of the partitions each iteration.

The only real addition to the code above, is how would we decid which direction to move in if we are not a valid median. Simply, since we are binary searching over the smallest array, X. If the max value on the left side of our X array is larger than the min value on the right side of the Y array, then our value at the x partition is too big, so we need to move left toward the left half of the array to get a smaller x value.

That is:

$$max\_x\_left > min\_y\_right$$. Then we will look at $$r = x\_partition - 1$$

Time Complexity: $$O(log(min(m,n)))$$ Where m, n are the lengths of nums1 and nums2 respectively. It will be the logarithm of the smallest array, as we only need to binary search over the smallest array, then make the partitions in the larger array respectively.

Space Complexity: $$O(1)$$ Only need constant extra space. For code readability below, I have copied over the arrays into separate variables, X and Y, but it could be done without the copy over, meaning $$O(1)$$ extra space.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Note I copy arrays nums1, nums2 to X, Y for readability, meaning we use
    # O(m+n) space instead of O(1) space, we could skip that step, and just
    # just reassign nums1, nums2 to make sure nums1 is always the smallest.
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Make sure the X array is the smallest array.
        X, Y = (nums1, nums2) if len(nums1) < len(nums2) else (nums2, nums1)
        # Get the lengths of each array
        m, n = len(X), len(Y)
        # Get the total number of elements
        mn = m + n
        # Get half of total elements. We will use mn // 2 this time to demonstrate
        half = mn // 2
        # Binary Search
        l, r = 0, m - 1
        # Since if we reach the end, and haven't found an answer, it means the
        # arrays are NOT sorted, we can just run our while loop until we find an answer.
        while True:
            # get x partition
            x_partition = l + (r - l) // 2
            # Solve for our y partition.
            y_partition = half - x_partition - 2
            # Get values one either side of partition for both X and Y.
            max_x_left = X[x_partition] if x_partition >= 0 else float('-infinity')
            min_x_right = X[x_partition + 1] if x_partition + 1 < m else float('infinity')
            max_y_left = Y[y_partition] if y_partition >= 0 else float('-infinity')
            min_y_right = Y[y_partition + 1] if y_partition + 1 < n else float('infinity')
            # Median check if both arrays left values are smaller than other
            # arrays right bounds, we have a valid median.
            if max_x_left <= min_y_right and max_y_left <= min_x_right:
                # Odd Check
                if mn % 2:
                    # This time we used mn // 2 to solve for half, so we will
                    # take the closest value on  the right side of the partition.
                    return min(min_x_right, min_y_right)
                # Even, take the average of the closest values to the partition.
                return (min(min_x_right, min_y_right) + max(max_x_left, max_y_left)) / 2
            # left side of our x partition is larger than right side of y partition
            elif max_x_left > min_y_right:
                # move right, to select smaller values of x, so x can be < y
                r = x_partition - 1
            # max_x_left < min_y_right
            else:
                # need larger x, move left pointer to right side of partition
                # we selected.
                l = x_partition + 1
```

</TabItem>
</Tabs>
