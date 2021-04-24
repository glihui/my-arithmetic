// 在节点1和节点2之间新增节点3
const node3 = new ListNode(3);
node3.next = node1.next;
node1.next = node3;


// 删除节点3
node1.next = node3.next 