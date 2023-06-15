# 1019 - Next Greate Node in Linked List (Medium)

## Approach 1: Using stack

1. Initialize an empty stack and an empty answer vector.
2. Reverse the given linked list.
3. Traverse the reversed linked list.
4. For each node:
   - While the stack is not empty and the top element is less than or equal to the current node's value, pop elements from the stack.
   - If the stack is empty, append 0 to the answer vector.
   - If the stack is not empty, append the top element to the answer vector.
   - Push the current node's value onto the stack.
5. Reverse the answer vector to obtain the correct order of next larger elements.
6. Return the answer vector.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@yashh0903"/>

```cpp
/*
 * Time Complexity: O(n), where n is the number of nodes in the linked list.
 * Space Complexity: O(n), as we use a stack to store elements and an answer vector to store the result.
 */

class Solution {
public:
    vector<int> nextLargerNodes(ListNode* head) {
        vector<int> ans; // Stores the result
        stack<int> st; // Stack to keep track of elements

        ListNode* newHead = NULL;

        // Reversing the linked list
        while (head != NULL) {
            ListNode* next = head->next;
            head->next = newHead;
            newHead = head;
            head = next;
        }

        while (newHead != nullptr) {
            if (st.empty())
                ans.push_back(0);
            else if (!st.empty() && st.top() > newHead->val)
                ans.push_back(st.top());
            else if (!st.empty() && st.top() <= newHead->val) {
                // Pop elements from the stack until finding an element greater than the current node's value or the stack becomes empty
                while (!st.empty() && st.top() <= newHead->val) {
                    st.pop();
                }
                if (!st.empty())
                    ans.push_back(st.top()); // Append the top element to the answer vector
                else
                    ans.push_back(0); // If the stack becomes empty, there is no larger element, so append 0 to the answer vector
            }
            st.push(newHead->val); // Push the current node's value onto the stack
            newHead = newHead->next; // Move to the next node
        }

        reverse(ans.begin(), ans.end()); // Reversing the answer vector to restore the correct order
        return ans;
    }
};

```

</TabItem>
</Tabs>
