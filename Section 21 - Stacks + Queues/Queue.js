class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.last) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const dequeued = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = dequeued.next;
      dequeued.next = null;
    }

    this.size -= 1;
    return dequeued;
  }
}