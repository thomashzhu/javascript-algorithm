class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
      let currentIndex = this.values.length - 1;
      const element = this.values[currentIndex];
      while (currentIndex > 0) {
          let parentIndex = Math.floor((currentIndex - 1)/2);
          let parent = this.values[parentIndex];
          if (element.priority >= parent.priority) break;
          this.values[parentIndex] = element;
          this.values[currentIndex] = parent;
          currentIndex = parentIndex;
      }
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();
    
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown() {
    function swap(values, idx1, idx2) {
      [values[idx1], values[idx2]] = [values[idx2], values[idx1]];
    }

    let currentIndex = 0;

    while (true) {
      const current = this.values[currentIndex];
      const leftIndex = 2 * currentIndex + 1, left = this.values[leftIndex];
      const rightIndex = 2 * currentIndex + 2, right = this.values[rightIndex];

      if (!left && !right) {
        return true;
      } else if (!right) {
        if (left.priority < current.priority) swap(this.values, leftIndex, currentIndex);
        return true;
      } else if (left.priority <= current.priority && left.priority <= right.priority) {
        swap(this.values, leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else if (right.priority <= current.priority && right.priority <= left.priority) {
        swap(this.values, rightIndex, currentIndex);
        currentIndex = rightIndex;
      } else {
        return true;
      }
    }
  }
}

const heap = new PriorityQueue();
heap.enqueue(new Node('high', 1));
heap.enqueue(new Node('low', 5));
heap.enqueue(new Node('normal', 3));
heap.enqueue(new Node('low', 4));
heap.enqueue(new Node('high', 2));
heap.enqueue(new Node('normal', 3.5));
heap.enqueue(new Node('low', 1.5));
heap.enqueue(new Node('low', 4.5));
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));
heap.dequeue();
console.log(heap.values.map(value => value.priority));