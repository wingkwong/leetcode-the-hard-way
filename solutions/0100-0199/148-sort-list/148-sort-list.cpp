class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if (head == NULL || head->next == NULL)
            return head;
        
        ListNode* slow = head;
        ListNode* fast = head->next;
        
        while (fast != NULL && fast->next != NULL)
        {
            slow = slow->next;
            fast = fast->next->next;
        }
        //divide the list into two parts 
        fast = slow->next;
        slow->next = NULL;
        
        return merge(sortList(head), sortList(fast));
    }
    
    ListNode* merge(ListNode* l1, ListNode* l2)
    {
        ListNode dump(0);
        ListNode* cur = &dump;
        
        while (l1 != NULL && l2 != NULL)
        {
            if (l1->val < l2->val)
            {
                cur->next = l1;
                l1 = l1->next;
            }
            else
            {
                cur->next = l2;
                l2 = l2->next;
            }
                
            cur = cur->next;
        }
        
        if (l1 != NULL)
            cur->next = l1;
        else
            cur->next = l2;
            
        return dump.next;
    }
};