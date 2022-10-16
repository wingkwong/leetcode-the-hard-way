/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        int count=0;
        ListNode curr=head;
        ListNode prev=null;
        while(curr!=null)
        {
            count++;
            if(count%2==0)
            {
                int temp = prev.val;
                prev.val=curr.val;
                curr.val= temp;
            }

            prev = curr;
            curr = curr.next;
        }
        return head;
    }
}