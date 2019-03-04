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

class DepthFirstTree {
  constructor(val) {
    this.root = new Node(val);
  }

  preOrderTraverse() {
    const result = [];

    function traverse(node) {
      if (node) result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }


  inOrderTraverse() {
    const result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node) result.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  postOrderTraverse() {
    const result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node) result.push(node.value);
    };

    traverse(this.root);
    return result;
  }
}
