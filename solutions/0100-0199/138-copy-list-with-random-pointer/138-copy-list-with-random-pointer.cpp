/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        
        if(head == NULL)return NULL;
        
        Node * it = head;
        Node * front = head;
        
        while(it != NULL)
        {
            front = it->next;
            Node * newNode = new Node(it->val);
            it->next = newNode;
            newNode->next = front;
            it = front;
        }
        
        it = head;
        front = NULL;
        while(it != NULL)
        {
            if(it->random)
            {
                it->next->random = it->random->next;
            }
            it = it->next->next;
        }
        
        Node * dummy = new Node(0);
        Node * temp = dummy;
        
        it = head;
        while(it != NULL)
        {
            front = it->next->next;
            temp->next = it->next;
            it->next = front;
            it = front;
            temp = temp->next;
        }
        
        return dummy->next;
    }
};