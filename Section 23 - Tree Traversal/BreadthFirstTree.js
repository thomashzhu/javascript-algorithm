class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(node) {
    if (this.last) {
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
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

class BreadthFirstTree {
  constructor(val) {
    this.root = new Node(val);
  }

  traverse() {
    if (!this.root) return null;

    let queue = new Queue();
    queue.enqueue(this.root);

    const result = [];

    while (queue.size > 0) {
      const dequeued = queue.dequeue();
      result.push(dequeued.value);

      if (dequeued.left) queue.enqueue(dequeued.left);
      if (dequeued.right) queue.enqueue(dequeued.right);
    }

    return result;
  }
}
