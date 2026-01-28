function middleNode(head: ListNode | null): ListNode | null {
    let slow: ListNode=head;
    let fast:ListNode= head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};