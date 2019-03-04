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

  getIndex(level) {
    return {
      startIndex: 2**level - 1,
      endIndex: 2**(level+1) - 1,
    };
  }

  enqueue(value, priority) {
    this.values.push(new Node(value, priority));
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

  updatePriority(value, newPriority) {
    let foundIndex;
    for (let i = 0; i < this.adjacencyList.length; i++) {
      if (this.adjacencyList[i].value === value) {
        foundIndex
      }
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    this.adjacencyList[vertex1].push({ node: vertex2, weight });

    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  getShortestPath(from, to) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};

    for(let vertex in this.adjacencyList){
      if(vertex === from) {
          distances[vertex] = 0;
          queue.enqueue(vertex, 0);
      } else {
          distances[vertex] = Infinity;
          queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    const visited = new Set([]);

    while (queue.values.length !== 0) {
      const top = queue.dequeue();
      visited.add(top.value);

      this.adjacencyList[top.value].forEach((neighbor) => {
        if (!visited.has(neighbor.node)) {
          const currentDistance = distances[neighbor.node];
          const newDistance = neighbor.weight + distances[top.value];
          if (newDistance < currentDistance) {
            queue.enqueue(neighbor.node, newDistance);
            distances[neighbor.node] = newDistance;
            previous[neighbor.node] = top.value;
          }
        }
      })
    }

    if (!previous[to]) return [];

    const result = [];
    let current = to;
    while (current) {
      result.push(current);
      current = previous[current];
    }
    return result.reverse();
  }
}

const graph = new WeightedGraph();
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.getShortestPath('A', 'E'));
console.log(graph.getShortestPath('A', 'F'));
console.log(graph.getShortestPath('A', 'Z'));