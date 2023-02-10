---
description: 'Author: @wingkwong, @heiheihang, @ColeB2 | https://leetcode.com/problems/k-closest-points-to-origin/'
tags: [Array, Math, Divide and Conquer, Geometry, Sorting, Heap (Priority Queue), Quickselect]
---

# 0973 - K Closest Points to Origin (Medium)

## Problem Link

https://leetcode.com/problems/k-closest-points-to-origin/

## Problem Statement

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

The distance between two points on the **X-Y** plane is the Euclidean distance (i.e., `√(x1 - x2)2 + (y1 - y2)2`).

You may return the answer in **any order**. The answer is **guaranteed** to be **unique** (except for the order that it is in).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg)

```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
```

**Example 2:**

```
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
```

**Constraints:**

* `1 <= k <= points.length <= 10^4`
* `-10^4 < xi, yi < 10^4`

## Approach 1: nth_element

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int K) {
        // we don't need to care about the exact order 
        // nth_element approach is enough
        nth_element(points.begin(), points.begin() + K, points.end(),[](vector<int>& q, vector<int>& p) {
            // sort by Euclidean distance
            // dist(q, p) = sqrt( (q1 - p1) * (q1 - p1) + (q2 - p2) * (q2 - p2) )
            // since we are comparing the points with the origin (0,0)
            // dist(q, p) = sqrt( (q1) * (q1) + (q2) * (q2) )
            // and we don't need to perform sqrt as sqrt(a) must be smaller than sqrt(b) if a < b
            return q[0] * q[0] + q[1] * q[1] < p[0] * p[0] + p[1] * p[1];
        });
        // resize points to show K clostest points
        points.resize(K);
        return points;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Heap (Python)

We can use a max heap of size `k` to store the `k` points closest to the origin.

Time Complexity: $$O(nlogk)$$. Where n is the length of points, and k is the given k. We must loop through all points inside points, and it takes $$logk$$ time to maintain our heap.

Space Complexity: $$O(k)$$. We only need to maintain k items inside of our heap.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@heiheihang"/>

```py
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        h = []
        
        for a, b in points:
            
            dist = a ** 2 + b ** 2
            heappush(h, [-dist, a, b])
            if len(h) > k:
                heappop(h)
        
        res = []
        
        while h:
            res.append([h[0][1], h[0][2]])
            heappop(h)
            
        return res
```

</TabItem>
</Tabs>

## Approach 3: Quick Select

We can sort in O(nlogn) time, and select k, but instead of sorting the whole array, we really just need the first k elements. That is where quick select comes in.

To perform quick select, we need $$left$$ and $$right$$ pointers and a partition, $$p$$. We can partition by selecting a random $$pivot$$ and swapping it with the value at our $$right$$ pointer, then looping through all the elements from our $$left$$ to $$right$$ pointer, inclusive. We would then swap the values that are $$<=$$ to our $$pivot$$ with a third pointer that starts at the $$left$$ pointer and moves up after each swap.

If we initialize our partition to be the length of the array, $$points$$, then we only need to run our partition algorithm until we reach a point that $$p$$ == $$k$$. If our $$p$$ is less than $$k$$ it means we don't have enough points inside our partition so we would have to move our left pointer up to sort more values inside of k. Otherwise, we would have to move our right pointer back towards the left, to shrink how many elements we have inside our partition.

When our partition, $$p$$ finally reaches a point that equals $$k$$, it means that all the values to the left of the partition are less than or equal to the pivot, and all to the right are greater than. Meaning we have the k closest elements to the origin.

Time Complexity: $$O(n)$$. O(n) is the average case based on the pivot we select at random. If we select the worst pivot during each call to partition, our time will approach $$O(n^2)$$, but by selecting a random pivot, this is rare to happen.

Space Complexity: $$O(1)$$ we can do this in place, and just swap around the points inside our points array.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        # create a function to calculate the euclidean distance of points
        euclid_dist = lambda xy: xy[0]**2 + xy[1]**2
        # partition function, takes left and right pointer as parameters
        # to work as endpoints of our array we are trying to partition.
        def partition(l, r):
            # pivot, select one at random between l and r. We use a
            # pivot instead of always selecting the first/last etc to 
            # hopefully prevent O(n^2) time complexity against malicious
            # inputs.
            pivot = random.randint(l, r)
            # swap our pivot point with our right point.
            points[r], points[pivot] = points[pivot], points[r]
            # pointer starting at left pointer to track where we
            # swap our values to that are less than or equal to our
            # pivot distance
            i = l
            pivot_dist = euclid_dist(points[r])
            # loop from l to r+1 for inclusivity to make sure we swap
            # our pivot back into proper place.
            for j in range(l, r+1):
                # point we are looking at, j is closer to the origin
                # than the point at our pivot.
                if euclid_dist(points[j]) <= pivot_dist:
                    # swap it with i. Depending where our pivot ends up
                    # all points swapped will be less than the pivot.
                    points[i], points[j] = points[j], points[i]
                    i += 1
            # return our partition index.
            return i - 1

        # start our algorithm, initialize left, right and partition.
        left, right, p = 0, len(points) - 1, len(points)
        # loop until p == k. At p == k it means we have exactly k
        # elements less than our partition p.
        while p != k:
            # get our partition
            p = partition(left,right)
            # partition we received < k it means we don't have enough
            # elements to the left of our partition that are < p.
            # Move left pointer up to get more.
            if p < k:
                left = p + 1
            # p >= k it means we have too many elements left of our
            # partition, we have more than k elements closer. Move
            # right pointer left to get fewer points.
            else:
                right = p - 1
        # Reached point p == k, meaning we know all points to the left
        # of p/k closer to the origin than p. Return that slice of points.
        return points[:k]
```

</TabItem>
</Tabs>
