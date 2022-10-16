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
    ListNode *detectCycle(ListNode *head) {
        if(head == NULL || head->next == NULL)
            return NULL;
        ListNode * slow = head;
        ListNode * fast = head;
        
        do{
            slow = slow->next;
            fast = fast->next->next;
        }while(slow != fast && fast && fast->next);
          
        if(slow == fast)
        {
            fast = head;

            while(slow != fast)
            {
                slow = slow->next;
                fast = fast->next;
            }

            return fast;
        }
        else
            return NULL;
    
    }
};