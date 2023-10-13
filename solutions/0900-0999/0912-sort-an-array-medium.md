---
description: 'Author: @saishreekouda, @wingkwong, @ganajayant, @deepanshu-rawat6| https://leetcode.com/problems/sort-an-array/'
tags: ['sorting']
---

# 0912 - Sort an Array (Medium)

## Problem Link

https://leetcode.com/problems/sort-an-array/

## Problem Statement

Given an array of integers `nums`, sort the array in ascending order.

**Example 1:**

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
```

**Example 2:**

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
```

**Constraints:**

* `1 <= nums.length <= 5 * 10^4`
* `-5 * 10^4 <= nums[i] <= 5 * 10^4`

## Approach 1: STL

### Standard STL Sort

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
void standardSTLSort(vector<int>& nums) {
    sort(nums.begin(), nums.end());
}
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] sortArray(int[] nums) {
        Arrays.sort(nums);
        return nums;
    }
}
```
</TabItem>
</Tabs>


### Stable STL Sort

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
void stableSTLSort(vector<int>& nums) {
    stable_sort(nums.begin(), nums.end());
}
```
</TabItem>
</Tabs>

## Approach 2: Quick Sort

### Quick Sort with Fixed Pivot (TLE)

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
int partition(vector<int>& nums, int l, int r) {
    int pivot = nums[r];
    int i = l - 1;
    for (int j = l; j <= r - 1; j++) {
        if (nums[j] < pivot) {
            i++;
            swap(nums[i], nums[j]);
        }
    }
    swap(nums[i + 1], nums[r]);
    return i + 1;
}

void quickSort(vector<int>& nums, int l, int r) {
    if (l < r) {
        int pivot = partition(nums, l, r);
        quickSort(nums, l, pivot - 1);
        quickSort(nums, pivot + 1, r);
    }
}
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public static void quicksort(int l, int r) {
        if (l < r) {
            int mid = partition(l, r);
            quicksort(l, mid - 1);
            quicksort(mid + 1, r);
        }
    }

    public static int partition(int l, int r) {
        int pivot = ar[r];
        int i = (l - 1);

        for (int j = l; j <= r - 1; j++) {
            if (ar[j] < pivot) {
                i++;
                int temp = ar[i];
                ar[i] = ar[j];
                ar[j] = temp;
            }
        }
        int temp = ar[i + 1];
        ar[i + 1] = ar[r];
        ar[r] = temp;
        return (i + 1);
    }
}
```
</TabItem>
</Tabs>


### Quick Sort with Randomised Pivot (TLE)

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
int partition(vector<int>& nums, int l, int r) {
    int pivot = nums[r];
    int i = l - 1;
    for (int j = l; j <= r - 1; j++) {
        if (nums[j] < pivot) {
            i++;
            swap(nums[i], nums[j]);
        }
    }
    swap(nums[i + 1], nums[r]);
    return i + 1;
}

void quickSort(vector<int>& nums, int l, int r) {
    if (l < r) {
        swap(nums[l + rand() % (r - l)], nums[r]);
        int pivot = partition(nums, l, r);
        quickSort(nums, l, pivot - 1);
        quickSort(nums, pivot + 1, r);
    }
}
```
</TabItem>
</Tabs>

## Approach 3: Merge Sort

Standard merge sort algorithm, following a divide and conquer approach, division of sub-array by mid values till sub-array length
reaches one, then merging parts by either out-place or in-place merging in either ascending or descending order. 

### Merge Sort with Outplace Merging

In this approach, merging happen in seperate array of size, then it is passed on in the above function calls.

#### In mergeSort() function:
- Dividing the array into 2 subarrays(one is $left$ and other is $right$) till their length reaches one(because no futher division can take place)
- Then passing left and right parts into merge() function for sorting in correct order.

#### In merge() function:
- We merge the two subarrays( $left$ and $right$ ) into another array $mix$ . 
- This merge operation stores elements from  $left$ and $right$ in an ascending order, by comparing elements from individual subarrays. 
- Finally, since one subarray would have greater elements then the other one, so we add those elements seperately. Then, we return the sorted subarray into the above function call.

This solution gives $O(n log n)$ time complexity and $O(n)$ space complexity.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public int[] sortArray(int[] nums) {
        return mergeSort(nums);
    }
    public static int[] mergeSort(int[] arr) {
        if (arr.length == 1) {
            return arr;
        }

        int mid = arr.length / 2;
        // copying and sorting sub-array by division on the basis of mid value
        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));

        // now merging the two subarrays into one sorted subarray
        return merge(left, right);
    }

    public static int[] merge(int[] first, int[] second) {
        int[] mix = new int[first.length + second.length];

        int i = 0;
        int j = 0;
        int k = 0;
        // adding elements in the mix array in ascending order
        while (i < first.length && j < second.length) {
            if (first[i] < second[j]) {
                mix[k] = first[i];
                i++;    
            } else {
                mix[k] = second[j];
                j++;
            }
            k++;
        }

        // it may be possible that one of the arrays is not complete
        // copy the remaining elements
        while (i < first.length) {
            mix[k] = first[i];
            i++;
            k++;
        }

        while (j < second.length) {
            mix[k] = second[j];
            j++;
            k++;
        }

        return mix;
    }
}
```
</TabItem>
</Tabs>

### Merge Sort using In-place Merging

In this approach, merging happens in-place, changes are made in the original arrays itself by modifying the reference variables. 

#### In mergeSort() function:
Dividing the array into 2 subarrays(by calling mergeSort() function recursively) till their length reaches one.

#### In mergeInPlace() function:
- We merge the two subarrays(one from s to mid and another from mid to e) into another array $mix$ . 
- This merge operation stores elements from the two sub-arrays in an ascending order, by comparing elements from individual subarrays. - - Finally, since one subarray would have greater elements then the other one, so we add those elements seperately. 
- Then, we place the sorted elements from $mix$ into $arr$ , finally changes in $arr$ have been made in-place.

This solution gives $O(n log n)$ time complexity and $O(1)$ space complexity.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public int[] sortArray(int[] nums) {
        mergeSort(nums, 0, nums.length);
        return nums;
    }
    public void mergeSort(int[] arr, int s, int e) {
        if (e - s == 1) {
            return;
        }

        int mid = (s + e) / 2;
        // dividing sub-arrays by mid values till, sub-array length reaches one
        mergeSort(arr, s, mid);
        mergeSort(arr, mid, e);

        // sorting the left portion(s to mid) and right portion(mid to e) into the same array arr
        mergeInPlace(arr, s, mid, e);
    }

    public static void mergeInPlace(int[] arr, int s, int m, int e) {
        int[] mix = new int[e - s];

        int i = s;
        int j = m;
        int k = 0;
        // adding elements in the mix array in ascending order
        while (i < m && j < e) {
            if (arr[i] < arr[j]) {
                mix[k] = arr[i];
                i++;
            } else {
                mix[k] = arr[j];
                j++;
            }
            k++;
        }

        // it may be possible that one of the arrays is not complete
        // copy the remaining elements
        while (i < m) {
            mix[k] = arr[i];
            i++;
            k++;
        }

        while (j < e) {
            mix[k] = arr[j];
            j++;
            k++;
        }

        // modifying the original arrays by replacing elements into their correct indices
        for (int l = 0; l < mix.length; l++) {
            arr[s + l] = mix[l];
        }
    }
}
```
</TabItem>
</Tabs>

## Approach 4: Counting Sort

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        b = [0] * 100005
        for x in nums:
            b[x + 50000] += 1
        ans = []
        for i, v in enumerate(b, -50000):
            ans.extend([i] * v)
        return ans
```
</TabItem>
</Tabs>


## Approach 5: Shell Sort
- Start with a gap sequence. A common choice is to start with $\frac{n}{2}$ and halve it in each iteration until the gap becomes $1$, where $n$ is the length of the array.

- Divide the array into subarrays of size equal to the current gap.

- For each subarray, perform an insertion sort to sort the elements within the subarray.

- Reduce the gap and repeat the process until the gap becomes $1$.

- Finally, perform a final pass of insertion sort with a gap of $1$ to ensure the entire array is sorted.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@saishreekouda"/>

```cpp
class Solution {
public:
    void shellSort(vector<int>& nums) {
        int n = nums.size();
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; ++i) {
                int temp = nums[i];
                int j;
                for (j = i; j >= gap && nums[j - gap] > temp; j -= gap) {
                    nums[j] = nums[j - gap];
                }
                nums[j] = temp;
            }
        }
    }

    vector<int> sortArray(vector<int>& nums) {
        shellSort(nums);
        return nums;
    }
};
```
</TabItem>
<TabItem value="py" label="Python3">
<SolutionAuthor name="@saishreekouda"/>

```py
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        gap = n // 2
        while gap > 0:
            for i in range(gap, n):
                temp = nums[i]
                j = i
                while j >= gap and nums[j - gap] > temp:
                    nums[j] = nums[j - gap]
                    j -= gap
                nums[j] = temp
            gap //= 2
        return nums
```
</TabItem>
</Tabs>
