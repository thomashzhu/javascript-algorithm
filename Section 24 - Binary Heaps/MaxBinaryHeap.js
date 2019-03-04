class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const element = this.values[currentIndex];
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  extractMax() {
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
      const leftIndex = 2 * currentIndex + 1,
        left = this.values[leftIndex];
      const rightIndex = 2 * currentIndex + 2,
        right = this.values[rightIndex];

      if (!left && !right) {
        return;
      } else if (!right) {
        if (left > current) swap(this.values, leftIndex, currentIndex);
        return;
      } else if (left >= current && left >= right) {
        swap(this.values, leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else if (right >= current && right >= left) {
        swap(this.values, rightIndex, currentIndex);
        currentIndex = rightIndex;
      } else {
        return;
      }
    }
  }
}
