
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0,head);
    let slow: ListNode = dummy;
    let fast: ListNode = head;
    // moving fast to n 
    while(n>0 && fast !==null){
        fast=fast.next;
        n--;
    }

    while(fast!==null){
        slow=slow.next;//3
        fast=fast.next;//5
    }
    slow.next=slow.next.next;
    return dummy.next;
    
};