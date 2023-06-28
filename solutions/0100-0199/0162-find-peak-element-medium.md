# 0162 - Find Peak Element (Medium)

## Approach 1: Binary Search

- Initialize start as the start index of the vector (0) and end as the end index of the vector (nums.size() - 1).
- Perform binary search until start becomes equal to end.
- Calculate the middle index mid using the formula mid = start + (end - start) / 2.
- Compare nums[mid] with nums[mid + 1] to determine if the peak is on the left side or the right side of mid.
  - If nums[mid] is greater than nums[mid + 1], move the end index to mid, indicating that the peak is on the left side.
  - Otherwise, move the start index to mid + 1, indicating that the peak is on the right side.
- Repeat steps 3-4 until start becomes equal to end.
- Return the value of start, which represents the index of the peak element.

Time complexity : The time complexity of the code is O(log n), where n is the number of elements in the nums vector.

Space Complexity: The space complexity of the code is O(1) since it uses a constant amount of extra space.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@yashh0903"/>

```cpp

class Solution {
public:
    int findPeakElement(vector<int>& nums) {
       // Start index of the search range
        int start = 0;
        // End index of the search range
        int end = nums.size() - 1;

        while (start < end) {
          // Middle index
            int mid = start + (end - start) / 2;

            if (nums[mid] > nums[mid + 1]) {
                // If the current element is greater than the next element,
                // move the end index to search in the left half
                end = mid;
            } else {
                // If the current element is smaller or equal to the next element,
                // move the start index to search in the right half
                start = mid + 1;
            }
        }
         // Return the index of the peak element
        return start;
    }
};


```

</TabItem>
</Tabs>
