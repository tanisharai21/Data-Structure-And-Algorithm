/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let stack = [];
    let temp = head;

    //push all the nodes in temporary stack
    while(temp !== null){
        stack.push(temp);
        temp = temp.next;
    }

    //make the last node as a new head of the linked list
    if(stack.length > 0){
        head = stack.pop();
        temp = head;

    //pop all the elements in original stack
    while(stack.length > 0){
        temp.next = stack.pop();
        temp = temp.next;
    }
    temp.next = null;
    }
    return head;
};