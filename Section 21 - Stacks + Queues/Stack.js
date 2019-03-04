class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.first) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const popped = this.first;
    
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popped.next;
      popped.next = null;
    }

    this.size -= 1;
    return popped;
  }
}
