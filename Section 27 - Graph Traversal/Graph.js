class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    this.adjacencyList[vertex1].push(vertex2);

    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);

    if (this.adjacencyList[vertex2])
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  recursiveDFS(start) {
    const result = [];
    const visited = {};
    
    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) return dfs(neighbor);
      });
    }
    dfs(start);

    return result;
  }

  iterativeDFS(start) {
    const result = [];
    const stack = [start];
    const visited = { [start]: true };

    while (stack.length !== 0) {
      const popped = stack.pop();
      result.push(popped);

      this.adjacencyList[popped].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      });
    }

    return result;
  }

  iterativeBFS(start) {
    const result = [start];
    const visited = { [start]: true };
    
    let index = 0;
    while (index < result.length) {
      const current = result[index];
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          result.push(neighbor);
        }
      });
      ++index;
    }

    return result;
  }
}

const g = new Graph();
g.adjacencyList = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'E'],
  'D': ['B', 'E', 'F'],
  'E': ['C', 'D', 'F'],
  'F': ['D', 'E'],
};
console.log(g.recursiveDFS('A'));
console.log(g.iterativeDFS('A'));
console.log(g.iterativeBFS('A'));