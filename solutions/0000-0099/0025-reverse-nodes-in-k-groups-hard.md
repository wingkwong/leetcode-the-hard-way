

## Approach 1: Iterative Approach

*Initialize a dummy node and point it at the head of the linked list
Take 3 nodes: prev, nex, cur and assign them the position at the head.

*Initialize a variable count and calculate the length of the list
Once the length is calculated, you can find out how many groups needs to be reversed

*Keep the node 'cur' at the head and the node 'nex' at the 2nd node of the group.

*Break the link of the 1st node to the 2nd node by cur->next = nex->next
*To reverse the link of the nodes: next->next = prev->next
*Now prev->next = nex as we need to reverse the link between the the 2nd and the 3rd element
*Set nex = cur->next in order to reverse the link.

*Once the group is reversed, assign: prev = curr and decrement the value of count by k
*Return dummy->next


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@YatinDawar"/>

```cpp
/*Time complexity: O(N) , where n is the number of nodes
  Space Complexity: O(1), as no additional space has been used
*/  

class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        
        // if there is no element or the group is to be made of 1 element, return head
        if(head == NULL || k==1) return head;
        
        // creating a dummy node and pointing it at head
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode *cur = dummy, *pre = dummy, *nex = dummy;
        
        // calculate length of the list
        int count = 0;
        while(cur->next != NULL){
            // moving forward to count the number of nodes
            cur = cur->next;
            count++;
        }
        
        // reversing all the groups until groups with size < k are remaining 
        while(count >= k){
            // keeping cur at the 1st node
            cur = pre->next; 
            // keeping nex in front of the head node
            nex = cur->next; 
            
            // reversing the groups
            for(int i=1;i<k;i++){

                cur->next = nex->next;
                
                //reversing the link between the 1st and the 2nd element by pointing it to the next of the previous node
                nex->next = pre->next;

                //moving nex forward to reverse the link between the 2nd and the 3rd element etc.
                pre->next = nex;
                nex = cur->next;
            }
            // after reversing, move prev to the curr node 
            pre = cur;
            // reduce count by k to solve the remaining number of groups
            count-=k;
        }
        return dummy->next;
    }
};

```

</TabItem>
</Tabs>
