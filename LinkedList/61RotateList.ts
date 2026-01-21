function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head===null||k===0){
        return head;
    }
    let len=1
    let tail=head;
    while(tail.next!==null){
        tail=tail.next;
        len++;
    }// now i have len and tail so perform 
    if(k%len===0){
        return head;// this means k is equal or multiple of len of linklist 
    }
    k=k%len;// figuring k
    tail.next=head// attaching tail to head it only connected not assigned 
    let newtail=findLastKthNode(head, len-k);
    head=newtail.next; // assigning head 
    newtail.next =null;// 

    return head;
    function findLastKthNode(temp:ListNode,a:number){
        let count=1;
        while(temp!=null){
            if(count===a){
                return temp;
            }
            count++;
            temp = temp.next;//updating head
        }
        return temp;
    }
};