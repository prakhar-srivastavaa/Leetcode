function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let temp : ListNode|null = head;
    let prevnode:ListNode|null = null;
    while(temp !== null){
        let knode:ListNode|null = findKthNode(temp,k);
        if(knode==null){
            if(prevnode!==null){
                prevnode.next=temp;
            }
            break;
        }
        let nextnode: ListNode| null = knode.next;
        knode.next=null;
        reverse(temp);
        if(temp===head){
            head=knode;
        }
        else{
            prevnode.next=knode
        }
        prevnode=temp;
        temp= nextnode;
    }  

    return head;
    function findKthNode(head: ListNode | null, k: number): ListNode | null {
    let curr = head;
    while (curr !== null && k > 1) {
        curr = curr.next;
        k--;
    }
    
    return curr;
}
function reverse(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
}