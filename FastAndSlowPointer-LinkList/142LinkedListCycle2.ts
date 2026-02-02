function detectCycle(head: ListNode | null): ListNode | null {
    let slow:ListNode=head;
    let fast:ListNode=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            slow=head;
                while(fast!==slow){
        slow=slow.next
        fast=fast.next
    }
    return slow;
        }
    }
    return null;
}