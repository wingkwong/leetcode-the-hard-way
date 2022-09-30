---
title: 'Merge Sort'
description: 'A most efficient sorting algorithm based on  divide-and-conquer strategy'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - merge sort
  - divide and conquer
---

<TutorialAuthors names="@TBC"/>

## Overview

Merge Sort works by continuously cutting down a list into multiple sublists until each has only one item, then merges those sublists into a sorted list. Here I will illustrate `merge sort` along with explaining problems of `Leetcode` in following Languages.

  - Python 
  - C++
  - Java
  
  Before that let us briefly understand few concepts on merge sort so that we can solve similar problems on `Leetcode` easily .
  
---
### Suppose we have an array of integers , 
`6 5 3 1 8 7 2 4`

(In `python` it is  called `list` and in `C++` it can be called either `array or vector` and in `Java` it is cslled `ArrayList`)

Then we can clearly see that merge sort is performed like this way. 

![image](https://miro.medium.com/max/600/1*opwN0BhtH4zvPF697fPlow.gif)

## Algorithm 

### Divide 

  - Calculate the mid point by checking if left index is less than the right index , if yes divide the array . 
  - Now continue dividing the array until `left index < right index` becomes false , that is until division is not possible.
    
    ![image](https://miro.medium.com/max/1400/1*_QpN-m-FTRabFLRvtcc04A.gif)
  
### Conquer

  - After dividing the array into smallest units, start merging the elements again based on comparison of the elements.
  
  -  So we need to compare and merge starting from the last splits. So **Recursion** needs to done here.

### Merge 

  - Compare the element for each list and then combine them into another list in a sorted manner.
  - Remember each half is already sorted so we need to just **combine/merge** then to make a bigger sorted array
  
  
  ![image](https://miro.medium.com/max/1400/1*_QpN-m-FTRabFLRvtcc04A.gif)
  
  
  ### Algorithm 
  
  For any merge sort problem in Leetcode or any where else you will have the following approach
  
  ```
  MergeSort(arr[], l,  r)
If r > l

Find the middle point to divide the array into two halves: 
middle m = l + (r – l)/2
Call mergeSort for first half:   
Call mergeSort(arr, l, m)
Call mergeSort for second half:
Call mergeSort(arr, m + 1, r)
Merge the two halves sorted in steps 2 and 3:
Call merge(arr, l, m, r)

```
    
### C++ Implementation 

#### 1. **STL** (Most Commonly Practiced)

  - Standard Sort  (Accepted in Leetcode)
  
    ```
    void stlSort(vector<int>& nums) {
	  sort(nums.begin(), nums.end());
    }
    ```

  - Stable Sort  (Accepted in Leetcode)
  
    ```
    void stableStlSort(vector<int>& nums) {
    stable_sort(nums.begin(), nums.end());
     }
    ```

#### 2.  **Merge Sort** (Template) (Recursive Approach)  

( Accepted solution in Leetcode even when constraints are large

Constraints:

1 <= nums.length <= 5 * 10^4
-5 * 104 <= nums[i] <= 5 * 10^4 

)
  
  ```
    	void merge(vector<int>& nums, int l, int m, int r){
        vector<int> tmp(r - l + 1); // temporary array
        int i = l; // index for left subarray
        int j = m + 1; // index for right subarray
        int k = 0; // index for temporary array
        while(i <= m && j <= r){
            if(nums[i] <= nums[j]) tmp[k++] = nums[i++];   
            
            // increment the left pointer if the right pointer element is bigger since we are sorting in ascending order ,left(smaller element) goes first
            
            else tmp[k++] = nums[j++];
        }
        while(i <= m) tmp[k++] = nums[i++];
        while(j <= r) tmp[k++] = nums[j++]; 
        for(i = 0; i < k; i++) nums[l + i] = tmp[i];
    }
	
	// mergeSort(nums, 0, nums.size() - 1);
    void mergeSort(vector<int>& nums, int l, int r){
        if(l >= r) return;
        int m = l + (r - l) / 2; //middle index, same as (l+r)/2
        mergeSort(nums, l, m);
        mergeSort(nums, m + 1, r);
        merge(nums, l, m, r);
    }
  ```

Call `mergeSort` to use this template to sort by divide and conquer as explained till now. 


### Python Implementation

#### 1. **Most commonly practiced** 

```
    def sortArray(self, nums):
        return sorted(nums)
```


#### 2. Merge Sort (Template)


```
        def mergeSort(nums): 
        if len(nums) > 1: 
            mid = len(nums)//2
            L = nums[:mid] // slicing 
            R = nums[mid:]  

            mergeSort(L)
            mergeSort(R)

            i = j = k = 0

            while i < len(L) and j < len(R): 
                if L[i] < R[j]: 
                    nums[k] = L[i] 
                    i+=1 //incrementing the smaller element side pointer
                else: 
                    nums[k] = R[j] 
                    j+=1
                k+=1
 
            while i < len(L): 
                nums[k] = L[i] 
                i+=1
                k+=1

            while j < len(R): 
                nums[k] = R[j] 
                j+=1
                k+=1

```


### Java Implementation

#### 1. Merge Sort (Template)

```
    private void mergeSort(int[] nums, int l, int r) {   // nums -> ArrayList , l -> starting index , r-> end of the ArrayList
        if (l >= r) return;
        int mid = l + (r - l) / 2;
        mergeSort(nums, l, mid);
        mergeSort(nums, mid + 1, r);
        merge(nums, l, r);
    }
    private void merge(int[] nums, int l, int r) {
        int mid = l + (r - l) / 2;
        int[] tmp = new int[r - l + 1];
        int i = l, j = mid + 1, k = 0;
        while (i <= mid || j <= r) {
            if (i > mid || j <= r && nums[i] > nums[j]) {
                tmp[k++] = nums[j++];
            } else {
                tmp[k++] = nums[i++];
            }
        }
```

Call the function `mergeSort` in public to get the Template executed `mergeSort(nums , 0 ,nums.length -1)` 

In all other examples we have seen only top down approach . But merge sort can be implemented in a bottom approach too 



#### Bottom Up Approach 

 ![image](https://www.simplilearn.com/ice9/free_resources_article_thumb/mergesort/merge_sort-bottom-up-img1.png)

The iterative technique is used in the Bottom-Up merge sort approach. It starts with a "single-element" array and then merges two nearby items while also sorting them. The combined-sorted arrays are merged and sorted again until only one single unit of the sorted array remains.


```
Time_Complexity : Best & Worst & Average => O(nLog(n))

Space_Complexity :  O(n) 

Stablitiy        :  Stable

Is_In_Place      :  Not-In-Place

When_to_use      :  1. When we don't have random access(linked list) , like as we have an array.
                    2. When array is not to large

```
  
---
Merging of n elements takes n time and since each time the array is cut into half it takes log(n) time to reach the top so **total time complexity is** `O(nLog(n))` .

![image](https://cdn.kastatic.org/ka-perseus-images/5fcbebf66560d8fc490de2a0d8a0e5b1d65c5c54.png)



**Tip : Even though merge sort has the least time complexity in worst case , bubble sort performs better when the array is sorted** . The figure below beautifully illustrates the various time complexities and you can find mergesort almost overlapped by quicksort for a certain interval. 


![image](https://titrias.com/files/2015/08/Untitled.png)

## Suggested Problems

export const suggestedProblems = [
    {
        "problemName": "912-Sort an Array"
        "difficulty": "Medium"
        "leetCodeLink": "https://leetcode.com/problems/sort-an-array/"
        "solutionLink": "https://leetcode.com/submissions/detail/812272823/"
    },
    {
        "problemName": "56-Merge Intervals"
        "difficulty": "Medium"
        "leetCodeLink": "https://leetcode.com/problems/merge-intervals/"
        "solutionLink": ""
    },
    {
        "problemName" : "148-Sort List"
        "difficulty" : "Medium"
        "leetCodeLink" : "https://leetcode.com/problems/sort-list/"
        solutionLink" : ""
    },
    {
        "problemName" : "327-Count of Range Sum"
        "difficulty" : "Hard"
        "leetCodeLink" : "https://leetcode.com/problems/count-of-range-sum/"
        solutionLink" : ""
    },
    {
        "problemName" : "23-Merge k Sorted Lists"
        "difficulty" : "Hard"
        "leetCodeLink" : "https://leetcode.com/problems/merge-k-sorted-lists/"
        "solutionLink" : ""
    }
] 
<Table title="Suggested Problems" data={suggestedProblems} />
  
