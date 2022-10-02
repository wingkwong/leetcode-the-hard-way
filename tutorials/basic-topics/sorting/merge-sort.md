---
title: 'Merge Sort'
description: 'A efficient sorting algorithm based on  divide-and-conquer strategy'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - merge sort
---

<TutorialAuthors names="@Sreetama2001"/>

# Overview

Merge Sort works by recursively breaking down an array into multiple subarrays  and then after comparing each of the sub arrays it arranges them into ascending or desending order by value and merges them into a single sorted array . Here I will illustrate `merge sort`  `Leetcode` problems 
in following Languages.

- Python 
- C++
- Java
  
## Few concepts on merge sort

Suppose we have an array of integers , 

`6 5 3 1 8 7 2 4`

Note : In `python` it is  called `list` and in `C++` it can be called either `array or vector` and in `Java` it is called a `ArrayList` .

Then we can clearly see that merge sort is performed like this way. 

![image](https://miro.medium.com/max/600/1*opwN0BhtH4zvPF697fPlow.gif)

## Algorithm 

### Divide ( Dividing is our first step)

- Calculate the mid point by checking if left index is less than the right index , if yes divide the array . 
- Now continue dividing the array until `left index < right index` becomes false , that is until division is not possible.
     
### Conquer

- After dividing the array into smallest units, start merging the elements again by comparing them .

- We need to compare and merge starting from the last splits or last smallest units. So **Recursion** needs to done here.

### Merge 

- Since each half is already sorted so we need to just sort between 2 halves to **combine/merge** then to make a bigger sorted array
   
## [Leetcode Problem 912 Sort an Array](https://leetcode.com/problems/sort-an-array/)

**Problem Statement** 

```
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

```

**Test Cases**
    
*Test case 1* :
     
```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: 
After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
        
```
**Constraints as given in the problem:**

$1 <= nums.length <= 5 * 10^4
-5 * 10^4 <= nums[i] <= 5 * 10^4$ 

*Here `insertion sort` , `quick sort` , `selection sort`  and all other sorts in $O(n^2)$ will give **TLE** i.e Time Limit Exceeded*

## STL Approach  
Note: Not preferred here in this problem , but still you will get a AC in Leetcode

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
void stableStlSort(vector<int>& nums) {
stable_sort(nums.begin(), nums.end());
}
```
</TabItem>

<TabItem value="py" label="Python">

```py
def sortArray(self, nums):
    return sorted(nums)
```

</TabItem>
<TabItem value="java" label="Java">

```java
public int[] sortArray(int[] nums) {
    Arrays.sort(nums);
    return nums;
}
```
</TabItem>
</Tabs>


## Top Down Approach

### Algorithm 
    
```
MergeSort(array[], left,  right)
If right > left

Find the middle point to divide the array into two halves: 
middle = left + (right – left)/2
Call mergeSort again for first half for further dividing:   
Call mergeSort(array, left, middle)
Call mergeSort again  for second half for further dividing:
Call mergeSort(array, middle+ 1, right)
Merge the two halves sorted in steps 2 and 3:
Call merge(arrary, left, middle, right)
```

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// call mergeSort(nums, 0, nums.size() - 1) to sort 

void merge(vector<int>& nums, int l, int m, int r){
vector<int> tmp(r - l + 1); // create a temporary array
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


void mergeSort(vector<int>& nums, int l, int r){
if(l >= r) return;
int m = l + (r - l) / 2; //middle index, same as (l+r)/2
mergeSort(nums, l, m);
mergeSort(nums, m + 1, r);
merge(nums, l, m, r);
}

```

</TabItem>

<TabItem value="py" label="Python">

```py
def merge_Sort(nums): 
if len(nums) > 1: 
    mid = len(nums)//2   # calculate the middle to divide by mid
    leftArray = nums[:mid]    #slicing 
    rightArray = nums[mid:]  

    merge_Sort(leftArray)
    merge_Sort(rightArray)

    i = j = k = 0

    while i < len(leftArray) and j < len(rightArray): 
        if leftArray[i] < rightArray[j]: 
            nums[k] = leftArray[i] 
            i+=1 //incrementing the smaller element side pointer
        else: 
            nums[k] = rightArray[j] 
            j+=1
        k+=1

    while i < len(leftArray): 
        nums[k] = leftArray[i] 
        i+=1
        k+=1

    while j < len(rightArray): 
        nums[k] = rightArray[j] 
        j+=1
        k+=1

```

</TabItem>
<TabItem value="java" label="Java">

```java
// call mergeSort(nums , 0 ,nums.length -1) in public

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
</TabItem>
</Tabs>


## Bottom Up Approach /Iterative technique

### Algorithm 

```
1. So it  starts with an  **element** in the array 

    It iterative approach it is already considering the fact that one item array is always sorted
 
2. Compares two nearby element to merge a sorted sub array 

    Similarly we merge other sorted subarrays like we have done in top down recursive approach **(two-pointer approach)** 

4. Contines until we a sorted array 
```
<Tabs>
<TabItem value="java" label="Java">

```java
class Solution {
    public List<Integer> sortArray(int[] nums) {
        List<Integer> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;
        mergeSort2(nums);
        for (int i : nums) res.add(i);
        return res;
    }
    private void mergeSort2(int[] nums) {
        for (int size = 1; size < nums.length; size *= 2) {
            for (int i = 0; i < nums.length - size; i += 2 * size) {
                int mid = i + size - 1;
                int end = Math.min(i + 2 * size - 1, nums.length - 1);
                merge2(nums, i, mid, end);
            }
        }
    }
    private void merge2(int[] nums, int l, int mid, int r) {
        int[] tmp = new int[r - l + 1];
        int i = l, j = mid + 1, k = 0;
        while (i <= mid || j <= r) {
            if (i > mid || j <= r && nums[i] > nums[j]) {
                tmp[k++] = nums[j++];
            } else {
                tmp[k++] = nums[i++];
            }
        }
        System.arraycopy(tmp, 0, nums, l, r - l + 1);
    }
}
```
</TabItem>
</Tabs>

**Time_Complexity** : Best & Worst & Average is   $O(n \log_{2} n)$

**Space_Complexity** :  $O(n)$ 

**Stablitiy**       :  Stable

**Is In Place**      :  Not-In-Place

**When to use**     :  
1. When we don't have random access (linked list) , like as we have an array.
2. When array is not to large

  
Merging of n elements takes n time and since each time the array is cut into half it takes   $\log_{2} n$   time to reach the top so **total time complexity is**    $O(n\log_{2} n)$  .


![image](https://cdn.kastatic.org/ka-perseus-images/5fcbebf66560d8fc490de2a0d8a0e5b1d65c5c54.png)



### **Mergesort is also useful for sorting linked lists**

## [**Leetcode Problem 148_Sort List**](https://leetcode.com/problems/sort-list/)

**Problem Statement** 

`Given the head of a linked list, return the list after sorting it in ascending order.`

**Test Cases**
 
 *Test Case 1*

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```
![image](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)
 
*Test Case 2*

```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```

Here we can follow both top down or bottom up merge sort . I have already discussed the algorithms in detailed way for array .

### **Intuition for the problem**

```
3->8->12->null
1->10->23->null

After merging we get :

1->3->8->10->12->23->null.

Of course the two lists must are ordered respectively.So we can only start to merge two lists that only 
have one element,then we get a ordered list that have two element,do this again (that is "recursion").

    Bottom Up Approach 

    -1-> 5->  3-> 4->   0-> null
    \  /       \ /         /
   -1->5->null 0->3->4->null 
      \        /         
-1-> 0->3-> 4-> 5->null   (sorted) 

    Top Down Approach

    -1-> 5->  3-> 4-> 0-> null
         /        \ 
-1-> 5->null      3-> 4->0->null
    /  \          /      \  
-1->null 5->null 3->null  4->0->null
     \   /        \        /     \
    -1-> 5->null  3->null 4->null 0->null
      \             \        \   /
                 3->null    0-> 4->null
        \              \      /  
                    0->3->4->null
          \          /
        -1->0->3->4->5->null    (sorted)

```


**Leetcode Implementation of Linked List in cpp**
```
/*
* Definition for singly-linked list.
* struct ListNode {
*     int val;
*     ListNode *next;
*     ListNode() : val(0), next(nullptr) {}
*     ListNode(int x) : val(x), next(nullptr) {}
*     ListNode(int x, ListNode *next) : val(x), next(next) {}
* };
*/

 ```


## **Approach for top down Merge sort of Linked list**


*1. Keep recursively dividing the list until there is only one node in the linked list.* 

*2. Sort each sublist and merge each sorted sublist in a new array.*


### **Steps to apply merge sort to a Linked list** 
    
**Note. Implementation is basically based on Merge Sort on an array as discussed above.** 

1. Divide the linked list into two equal parts until when only one element is left
2. To Divide, we need to  find mid in linked ling using [tortoise and hare](https://dev.to/alisabaj/floyd-s-tortoise-and-hare-algorithm-finding-a-cycle-in-a-linked-list-39af) method 
3. Finally, merge the left and the right nodes of linked list

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    void mergeSort(ListNode **head){
        ListNode *curr = *head ; // create a current pointer
        // left half 
        ListNode * left;
        // right half
        ListNode * right;
        // if linked list is null or size is one return back the same
        
        if(curr ==NULL || curr ->next==NULL) return;
        
        //call to find the middle node between left and right
        findMiddle(curr, &left,&right);
        
        // call merge_sort again to divide left half
        mergeSort(&left);
        
        // call merge_sort again to divide right half
        mergeSort(&right);
        
        //call to merge left and right by sorting them
        *head=merge(left,right);
        
    }
    void findMiddle(ListNode *curr,ListNode **left, ListNode **right){
        ListNode* slow = curr; // make a slow pointer
        ListNode* fast = curr -> next; // make a fast pointer
        
    // then we move our fast upto it not become null
        while(fast != NULL)
        {
            fast = fast -> next;
            if(fast != NULL)
            {
                fast = fast -> next;
                slow = slow -> next;
            }
        }
        *left = curr;
        *right = slow -> next; // right to slow next
        slow -> next = NULL; // and slow next to null
        
    }
    ListNode* merge(ListNode* left, ListNode* right){
      ListNode* res = NULL; // set answer to null
        
        if(left == NULL) // Check if left is null,nothing to merge
        {
            return right; // return right
        }
        
        if(right == NULL) 
        {
            return left; // return left 
        }
        
        // if value of the left <= value of right,then res = left
        if(left -> val <= right -> val) 
        {
            res = left;
            res -> next = merge(left -> next, right); 
            // and again call merge for res's next
        }
        else // else res = right
        {
            res = right;
            res -> next = merge(left, right -> next); 
            // and again call merge for res's next
        }
        
        return res; // return the res  
    }
    ListNode* sortList(ListNode* head) {
        mergeSort(&head);
        return head;
    }
};
```

</TabItem>
</Tabs>

## Suggested Problems

export const suggestedProblems = [
    {
        "problemName": "912-Sort an Array",
        "difficulty": "Medium",
        "leetCodeLink": "https://leetcode.com/problems/sort-an-array/",
        "solutionLink": "../solutions/0900-0999/0921-sort-an-array-medium.md"
    },
    {
        "problemName": "56-Merge Intervals",
        "difficulty": "Medium",
        "leetCodeLink": "https://leetcode.com/problems/merge-intervals/",
        "solutionLink": ""
    },
    {
        "problemName" : "148-Sort List",
        "difficulty" : "Medium",
        "leetCodeLink" : "https://leetcode.com/problems/sort-list/",
        "solutionLink" : "../solutions/0100-0199/0148-sort-list-medium.md"
    },
    {
        "problemName" : "327-Count of Range Sum",
        "difficulty" : "Hard",
        "leetCodeLink" : "https://leetcode.com/problems/count-of-range-sum/",
        "solutionLink" : "../solutions/0300-0399/0327-count-of-range-sum-hard.md"
    },
    {
        "problemName" : "23-Merge k Sorted Lists",
        "difficulty" : "Hard",
        "leetCodeLink" : "https://leetcode.com/problems/merge-k-sorted-lists/",
        "solutionLink" : "../solutions/0000-0099/0023-merge-k-sorted-lists-hard.md"
    }
]

<Table title="Suggested Problems" data={suggestedProblems} />
  
