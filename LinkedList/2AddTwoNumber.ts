function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode();
    let carry =0;
    let curr= dummy;

    while(l1!==null || l2 !== null || carry !==0){
        let v1=l1 ? l1.val:0
        let v2=l2 ? l2.val:0

        // new digit
        let val = v1+v2+carry

        // new carry
        carry = Math.floor(val/10);
        val = val%10;
        curr.next=new ListNode(val);
        // updating ptrs
        curr=curr.next
        l1=l1 ? l1.next: null
        l2=l2 ? l2.next:null
    }
    return dummy.next;
};