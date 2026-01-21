

function swapPairs(head: ListNode | null): ListNode | null {
    // Input: head = [1,2,3,4]
    // Output: [2,1,4,3]
    let dummy = new ListNode(0, head);//0,1,2,3,4
    let prev = dummy;//0
    let curr = head;//1
    while (curr !== null && curr.next !== null) {
        let nextpair = curr.next.next;//3
        let second = curr.next;//2

// reverse the pair
        second.next = curr;
        curr.next = nextpair;
        prev.next=second

// update ptrs
        prev=curr
        curr=nextpair


    }

    return dummy.next;
};