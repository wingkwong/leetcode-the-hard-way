/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(head == NULL || head->next == NULL)return head;
        ListNode *  ans = new ListNode();
        ListNode * temp = ans;
        
        if(head->next->val != head->val)
        {
            ans->next = head;
            head = head->next;
            ans = ans->next;
            ans->next = deleteDuplicates(head);
            return temp->next;
        }
        else
        {
            while(head->next != NULL && head->val == head->next->val)
                head = head->next;
            
            if(head->next == NULL)
            {
                return temp->next;
            }
            else
            {
                head = head->next;
                return deleteDuplicates(head);
            }
        }
    }
};