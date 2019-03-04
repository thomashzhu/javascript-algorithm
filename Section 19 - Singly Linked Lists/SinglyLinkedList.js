class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return newNode;
  }

  pop() {
    if (!this.tail) return null;

    const currentTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentTail;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
    this.length -= 1;
    return currentTail;
  }

  shift() {
    if (!this.head) return null;

    const currentHead = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return newNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = prevNode.next.next;

    this.length -= 1;
    return removed;
  }

  reverseHelper(before, after) {
    if (after.next) this.reverseHelper(after, after.next);
    after.next = before;
  }

  reverse() {
    this.reverseHelper(null, this.head);
    [this.head, this.tail] = [this.tail, this.head];
  }
}