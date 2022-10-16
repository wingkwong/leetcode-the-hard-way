/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if(head == NULL || head->next == NULL )
            return false;
        
        ListNode * slow = head;
        ListNode * fast = head;
        
        do{
            slow = slow->next;
            fast = fast->next->next;
        }while(fast && fast->next && slow != fast);
            
        if(fast == NULL || fast->next == NULL)
            return false;
        
        return true;
    }
};