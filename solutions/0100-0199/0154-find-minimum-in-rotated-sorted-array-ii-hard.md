# 0154 - Find Minimum In Rotated Sorted Array II (Hard)

## Approach 1: Binary Search

1. The code uses a binary search approach to find the minimum element in the given nums array.
2. We initialize the start and end indices to cover the entire array initially.
3. Inside the while loop, we calculate the middle index using (start + end) / 2.
4. We compare the element at the middle index (nums[mid]) with the element at the end index (nums[end]).
5. If nums[mid] < nums[end], it means the minimum element lies in the left half of the array, so we update the end index to mid.
6. If nums[mid] == nums[end], it means there are duplicate elements in the array. In this case, we can safely reduce the search range by moving the end index one step back.
7. If nums[mid] > nums[end], it means the minimum element lies in the right half of the array, so we update the start index to mid + 1.
8. The loop continues until the start index is equal to the end index, at which point it will point to the minimum element.
9. Finally, we return nums[start] as the minimum element.

- Time Complexity: O(log N), where N is the length of the input array nums. This is because the binary search approach reduces the search range by half in each iteration, resulting in a logarithmic time complexity.
- Space Complexity: O(1). The code uses a constant amount of extra space, regardless of the input size. We only have a few variables to store indices and intermediate calculations, which do not depend on the input size. Hence, the space complexity is constant.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@yashh0903"/>

```cpp

class Solution {
public:
    int findMin(vector<int>& nums) {
        // Starting index of the search range
        int start = 0;
        // Ending index of the search range
        int end = nums.size() - 1;

        while (start < end) {
            // Calculate the middle index
            int mid = start + (end - start) / 2;

            if (nums[mid] < nums[end]) {
                // If the element at the middle index is smaller than the element at the end index,
                // it means the minimum element lies in the left half, so update the end index
                end = mid;
            } else if (nums[mid] == nums[end]) {
                // If the element at the middle index is equal to the element at the end index,
                // it means there are duplicate elements in the array.
                // In this case, we can safely reduce the search range by moving the end index one step back.
                end--;
            } else {
                // If the element at the middle index is greater than the element at the end index,
                // it means the minimum element lies in the right half, so update the start index.
                start = mid + 1;
            }
        }

        // When the loop ends, the start index will point to the minimum element
        return nums[start];
    }
};

```

</TabItem>
</Tabs>
