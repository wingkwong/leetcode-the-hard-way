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
    ListNode* swapPairs(ListNode* head) {
        
        if(head == NULL || head->next == NULL)
            return head;
        
        ListNode * newNode = swapPairs(head->next->next);
        
        int temp = head->val;
        head->val = head->next->val;
        head->next->val = temp;
        
        head->next->next = newNode;
        
        return head;
        
    }
};