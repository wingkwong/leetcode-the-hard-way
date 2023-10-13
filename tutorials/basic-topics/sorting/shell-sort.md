---
title: 'Shell Sort'
description: 'Sorting algorithm using a gap-based strategy to improve efficiency of sorting process'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - shell sort
---

<TutorialAuthors names="@Saishreekouda"/>

## Overview

Shell Sort is a sorting algorithm that employs a unique gap-based strategy to improve the efficiency of the sorting process. It extends the idea from insertion sort and offers a solution with better time complexity.

## Algorithm

Shell Sort, also known as diminishing increment sort, operates on the principle of repeatedly sorting subarrays with a specific gap size. It gradually reduces this gap size until it becomes $1$, effectively sorting the entire array.

### Step 1: Choose a Gap Sequence

The first crucial step in Shell Sort is selecting an appropriate gap sequence. The choice of the gap sequence greatly influences the algorithm's performance. Two common gap sequences are:

#### 1.1. Gap Sequence Starting at $\frac{n}{2}$

A common choice is to start with the array's length divided by $2$ and repeatedly divide by $2$ until the gap becomes $1$. This sequence has a formula: $\frac{n}{2}$. It's simple and often works reasonably well.

#### 1.2. Knuth Sequence

Knuth's sequence is more sophisticated and is computed using the formula: $gap = (gap \cdot 3) + 1$. It provides a better distribution of gaps and is often used for improved performance.

#### 1.3. Sedgewick Sequence

Sedgewick's sequence is another popular choice, offering a combination of smaller and larger gaps. It is typically defined as: $gap = 4^i + 3 \cdot 2^{(i-1)} + 1$.

**Impact on Running Time**

The choice of the gap sequence can significantly affect the running time of the Shell Sort algorithm:

- **Gap Sequence Starting at $\frac{n}{2}$**: This simple sequence often performs reasonably well and is easy to implement. However, it may not be as efficient as Knuth or Sedgewick sequences for some inputs.

- **Knuth Sequence**: Knuth's sequence is known for its good performance characteristics. It tends to distribute gaps more effectively, resulting in faster sorting for many inputs. It can be an excellent choice for a wide range of scenarios.

- **Sedgewick Sequence**: Sedgewick's sequence provides a combination of smaller and larger gaps. It aims to strike a balance between gap sizes, which can lead to efficient sorting in practice. It may perform particularly well for specific input distributions.

The running time of Shell Sort heavily depends on the selected gap sequence. Therefore, choosing an appropriate sequence is essential to optimize the sorting performance for different input data.

### Step 2: Start Sorting with a Gap

- Divide the array into subarrays of size equal to the chosen gap. Initially, these subarrays consist of elements separated by the selected gap.
- For each subarray, execute an Insertion Sort. This involves rearranging elements within the subarray to their correct positions.

### Step 3: Reduce the Gap

- Decrease the gap (usually by dividing it by $2$).

### Step 4: Repeat Until Gap is 1

- Repeat steps 2 and 3 until the gap becomes $1$.

### Step 5: Final Pass

- Perform a final pass of Insertion Sort with a gap of $1$. This is a regular Insertion Sort that ensures the entire array is sorted correctly.

Now, let's visualize how Shell Sort works with a simple example:

Suppose we have an unsorted array $[6, 5, 3, 1, 8, 7, 2, 4]$. We'll perform Shell Sort on this array step by step:

![image](https://github.com/wingkwong/leetcode-the-hard-way/assets/35857179/078c31f2-e68e-4775-ab6c-0c13bccf8ee9)

Start with a gap sequence: Initially, the gap is $4$ (length of the array divided by $2$).

Divide the array into subarrays with a gap of $4$:

   - Subarray 1: $[6, 8]$
   - Subarray 2: $[5, 7]$
   - Subarray 3: $[3, 2]$
   - Subarray 4: $[1, 4]$

![image](https://github.com/wingkwong/leetcode-the-hard-way/assets/35857179/52bb5dc8-06e7-4cfe-a592-ace3b85658d9)

Apply Insertion Sort within each subarray:

   - After sorting Subarray 1: $[6, 8]$
   - After sorting Subarray 2: $[5, 7]$
   - After sorting Subarray 3: $[2, 3]$
   - After sorting Subarray 4: $[1, 4]$

![image](https://github.com/wingkwong/leetcode-the-hard-way/assets/35857179/b894f409-2641-41f9-a497-a8336214f44a)

Reduce the gap to $2$ and repeat the process:

   - Subarray 1: $[6, 2, 8, 3]$
   - Subarray 2: $[5, 1, 7, 4]$
     
![image](https://github.com/wingkwong/leetcode-the-hard-way/assets/35857179/3c00754e-2876-4543-9072-6d1c8df70e24)

Apply Insertion Sort within each subarray:

   - After sorting Subarray 1: $[2, 3, 6, 8]$
   - After sorting Subarray 2: $[1, 4, 5, 7]$
     
![image](https://github.com/wingkwong/leetcode-the-hard-way/assets/35857179/e77e9e39-779d-42f5-be63-6aafc98036ac)

Finally, reduce the gap to $1$ and perform a final pass of Insertion Sort:
   - $[1, 2, 3, 4, 5, 6, 7, 8]$ (Sorted!)

![image](https://github.com/wingkwong/leetcode-the-hard-way/assets/35857179/98643b8e-ef4c-4eec-b802-7d1f38883da5)

## Complexity Analysis

Before we dive into implementing Shell Sort, let's briefly analyze its time complexity:

- **Time Complexity**: The time complexity of Shell Sort depends on the gap sequence used. In the worst case, it can be $O(n^2)$, but with an optimal gap sequence, it can achieve a time complexity of $O(n \log^2 n)$.

Shell Sort is a versatile sorting algorithm suitable for beginners and provides an intuitive way to sort arrays efficiently. Now, let's explore how to implement Shell Sort in various programming languages.

## Example #1: [0912 - Sort an Array](https://leetcode.com/problems/sort-an-array/)

> Given an array of integers nums, sort the array in ascending order and return it.
> You must solve the problem without using any built-in functions in $O(n\log(n))$ time complexity and with the smallest space complexity possible.

- Start with a gap sequence. A common choice is to start with $\frac{n}{2}$ and halve it in each iteration until the gap becomes $1$, where $n$ is the length of the array.

- Divide the array into subarrays of size equal to the current gap.

- For each subarray, perform an insertion sort to sort the elements within the subarray.

- Reduce the gap and repeat the process until the gap becomes $1$.

- Finally, perform a final pass of insertion sort with a gap of $1$ to ensure the entire array is sorted.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Saishreekouda"/>

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
<SolutionAuthor name="@Saishreekouda"/>

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
<TabItem value="java" label="Java">
<SolutionAuthor name="@Saishreekouda"/>

```java
class Solution {
    public int[] sortArray(int[] nums) {
        int n = nums.length;
        int gap = n / 2;
        while (gap > 0) {
            for (int i = gap; i < n; i++) {
                int temp = nums[i];
                int j = i;
                while (j >= gap && nums[j - gap] > temp) {
                    nums[j] = nums[j - gap];
                    j -= gap;
                }
                nums[j] = temp;
            }
            gap /= 2;
        }
        return nums;
    }
}
```
</TabItem>
</Tabs>

- Merging of $n$ elements in each pass takes $O(n)$ time.
- Since the array is repeatedly divided by $2$, it takes $\log_2(n)$ passes to reach the top.

Shell Sort exhibits a time complexity of $O(n \log_2(n))$, making it an efficient sorting algorithm for a wide range of input sizes.

Shell Sort is generally **not** considered **a stable sort**. It does not guarantee that elements with equal values will maintain their original order in the sorted array. The sorting process involves swapping elements at varying distances, which may lead to a change in the relative order of equal elements.

Shell Sort is an **out-of-place** algorithm, which means it requires additional memory to sort the array. The additional space required depends on the input size of the array elements. While it doesn't require as much extra space as some other sorting algorithms like Merge Sort or Heap Sort, it still needs space for temporary storage and swapping elements during the sorting process.

**Time Complexity**

- Best Case: $O(n \log_2(n))$
- Worst Case: $O(n^2)$ (depends on gap sequence)
- Average Case: $O(n \log_2(n))$

Shell Sort demonstrates a time complexity of $O(n \log_2(n))$ in its best and average cases. However, in the worst case, the time complexity can degrade to $O(n^2)$ depending on the choice of the gap sequence.

**Space Complexity** : $O(n)$

**Efficiency Consideration**

For very large arrays, Shell Sort's space complexity of $O(n)$ can be inefficient, as it allocates extra memory. In such cases, when memory usage is a critical concern, you may consider alternative sorting algorithms like Quick Sort, which typically requires less additional space.

Shell Sort remains a reliable sorting algorithm for moderately sized arrays, and its performance can be optimized by choosing an appropriate gap sequence.

## Example #2: [0088 - Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)

> Given two integer arrays, sorted in non-decreasing order, and two integers representing the number of elements in both arrays.
> Merge both arrays into a single array sorted in non-decreasing order.

1. Calculate the gap value for merging the two arrays. The gap is determined as $\lceil \frac{{\text{size of arr1} + \text{size of arr2}}}{{2}} \rceil$.

2. Initialize two pointers: the left pointer at index $0$ and the right pointer at index (left + gap).

3. Perform the following steps for each gap until the gap becomes $0$:
    - Inside a loop that continues until the right pointer reaches the end (i.e., index $n + m$), handle three different cases:
        - If the left pointer is inside $\text{arr1}$ and the right pointer is in $\text{arr2}$, compare $\text{arr1}[{\text{left}}]$ and $\text{arr2}[{\text{right}} - n]$. If $\text{arr1}[{\text{left}}] > \text{arr2}[{\text{right}} - n]$, swap them.
        - If both pointers are in $\text{arr2}$, compare $\text{arr1}[{\text{left}} - n]$ and $\text{arr2}[{\text{right}} - n]$. If $\text{arr1}[{\text{left}} - n] > \text{arr2}[{\text{right}} - n]$, swap them.
        - If both pointers are in $\text{arr1}$, compare $\text{arr1}[{\text{left}}]$ and $\text{arr2}[{\text{right}}]$. If $\text{arr1}[{\text{left}}] > \text{arr2}[{\text{right}}]$, swap them.

   
4. After the right pointer reaches the end, decrease the value of the gap by setting it to $\lceil \frac{{\text{current gap}}}{{2}} \rceil$.

5. Repeat the loop until the gap becomes $0$.

6. Finally, after performing all the operations, you will have the merged sorted array.


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Saishreekouda"/>

```cpp
class Solution {
 public:
  void swapIfGreater(vector<int>& arr1, vector<int>& arr2, int ind1, int ind2) {
    if (arr1[ind1] > arr2[ind2]) {
      swap(arr1[ind1], arr2[ind2]);
    }
  }
  void merge(vector<int>& arr1, int n, vector<int>& arr2, int m) {
    int len = n + m;
    // initial gap:
    int gap = (len / 2) + (len % 2);
    while (gap > 0) {
      // place 2 pointers:
      int left = 0, right = left + gap;
      while (right < len) {
        // case 1: left in arr1 and right in arr2:
        if (left < n && right >= n) swapIfGreater(arr1, arr2, left, right - n);
        // case 2: both pointers in arr2:
        else if (left >= n) swapIfGreater(arr2, arr2, left - n, right - n);
        // case 3: both pointers in arr1:
        else swapIfGreater(arr1, arr1, left, right);
        left++, right++;
      }
      // break if iteration gap=1 is completed:
      if (gap == 1) break;
      // otherwise, calculate new gap:
      gap = (gap / 2) + (gap % 2);
    }
    int j = 0;
    for (int i = n; i < n + m; i++) {
      arr1[i] = arr2[j];
      j++;
    }
  }
};
```
</TabItem>
<TabItem value="py" label="Python3">
<SolutionAuthor name="@Saishreekouda"/>

```py
class Solution:
    def swapIfGreater(self, arr1: List[int], arr2: List[int], ind1: int, ind2: int) -> None:
        if arr1[ind1] > arr2[ind2]:
            arr1[ind1], arr2[ind2] = arr2[ind2], arr1[ind1]

    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # Calculate the total length
        length = m + n
        # Initial gap
        gap = (length // 2) + (length % 2)
        while gap > 0:
            # Place two pointers
            left = 0
            right = left + gap
            while right < length:
                # case 1: left in nums1 and right in nums2
                if left < m and right >= m: self.swapIfGreater(nums1, nums2, left, right - m)
                # case 2: both pointers in nums2
                elif left >= m: self.swapIfGreater(nums2, nums2, left - m, right - m)
                # case 3: both pointers in nums1
                else: self.swapIfGreater(nums1, nums1, left, right)
                left += 1
                right += 1
            # Break if iteration with gap=1 is completed
            if gap == 1: break
            # Calculate the new gap
            gap = (gap // 2) + (gap % 2)
        j = 0
        for i in range(m, length):
            nums1[i] = nums2[j]
            j += 1
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@Saishreekouda"/>

```java
class Solution {
    public void swapIfGreater(int[] arr1, int[] arr2, int ind1, int ind2) {
        if (arr1[ind1] > arr2[ind2]) {
            int temp = arr1[ind1];
            arr1[ind1] = arr2[ind2];
            arr2[ind2] = temp;
        }
    }

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int len = m + n;
        // Initial gap
        int gap = (len / 2) + (len % 2);
        while (gap > 0) {
            // Place two pointers
            int left = 0;
            int right = left + gap;
            while (right < len) {
                // case 1: left in nums1 and right in nums2
                if (left < m && right >= m) swapIfGreater(nums1, nums2, left, right - m);
                // case 2: both pointers in nums2
                else if (left >= m) swapIfGreater(nums2, nums2, left - m, right - m);
                // case 3: both pointers in nums1
                else swapIfGreater(nums1, nums1, left, right);
                left++;
                right++;
            }
            // Break if iteration with gap=1 is completed
            if (gap == 1) {
                break;
            }
            // Calculate the new gap
            gap = (gap / 2) + (gap % 2);
        }

        int j = 0;
        for (int i = m; i < len; i++) {
            nums1[i] = nums2[j];
            j++;
        }
    }
}
```
</TabItem>
</Tabs>

**Time Complexity**: $O((n+m) \cdot \log(n+m))$

The time complexity of the algorithm for merging two sorted arrays of sizes $n$ and $m$ is determined as follows:
- The gap ranges from $n+m$ to $1$, and at each step, the gap is divided by $2$.
- Therefore, the outer loop runs for $O(log(n+m))$ iterations.

For each value of the gap, the inner loop can run for a maximum of $n+m$ times.

**Space Complexity** : $O(1)$

**Efficiency Consideration**

In this question we can use brute approach of merging 2 sorted arrays using extra space but for optimal solution where we do not consider any extra space Shell Sort gives us an efficient solution.

export const suggestedProblems = [
    {
        "problemName" : "0148 - Sort List",
        "difficulty" : "Medium",
        "leetCodeLink" : "https://leetcode.com/problems/sort-list/",
        "solutionLink" : "../../../solutions/0100-0199/sort-list-medium"
    },
    {
        "problemName" : "0075 - Sort Colors",
        "difficulty" : "Medium",
        "leetCodeLink" : "https://leetcode.com/problems/sort-colors/",
        "solutionLink" : "../../../solutions/0000-0099/sort-colors-medium"
    }
]

<Table title="Suggested Problems" data={suggestedProblems} />