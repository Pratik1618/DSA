// Define the ListNode class with types
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse a linked list
function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Helper function to print the list
function printList(head: ListNode | null): void {
  const result: number[] = [];
  let curr = head;
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join(" -> "));
}

// Create list: 1 -> 2 -> 3 -> 4
const head = new ListNode(1,
              new ListNode(2,
                new ListNode(3,
                  new ListNode(4))));

console.log("Original list:");
printList(head);

const reversedHead = reverseLinkedList(head);

console.log("Reversed list:");
printList(reversedHead);
