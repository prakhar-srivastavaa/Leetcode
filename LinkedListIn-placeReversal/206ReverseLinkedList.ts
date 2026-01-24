function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode = null;
    let curr: ListNode =head;
    while(curr !== null){
        let next:ListNode = curr.next;
        curr.next= prev
        prev= curr
        curr=next
    }    
    return prev;
};