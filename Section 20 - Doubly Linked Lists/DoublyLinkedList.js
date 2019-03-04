class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return newNode;
  }

  pop() {
    if (!this.tail) return null;

    const popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }

    this.length -= 1;
    return popped;
  }

  shift() {
    if (!this.head) return null;

    const shifted = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }

    this.length -= 1;
    return popped;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length += 1;
    return newNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const isFirstHalf = (index <= this.length / 2);

    let result = (isFirstHalf ? this.head : this.tail);
    let count = (isFirstHalf ? 0 : this.length - 1);
    while (count !== index) {
      result = (isFirstHalf ? result.next : result.prev);
      count += (isFirstHalf ? 1 : -1);
    }

    return result;
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
    if (index < 0 || index >= this.length + 1) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const foundNode = this.get(index - 1);

    newNode.prev = foundNode;
    newNode.next = foundNode.next;
    foundNode.next.prev = newNode;
    foundNode.next = newNode;

    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.prev = null;
    removed.next = null;

    this.length -= 1;
    return removed;
  }

  reverse() {
    let current = this.head;
    this.tail = this.head;

    for (let i = 0; i < this.length; i++) {
      const nextNode = current.next;
      [current.prev, current.next] = [current.next, current.prev];
      this.head = current;
      current = nextNode;
    }
  }
}
