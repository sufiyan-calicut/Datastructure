class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  bfs(startVertex) {
    const visited = {};
    const queue = [];

    visited[startVertex] = true;
    queue.push(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }

  dfs(startVertex) {
    const visited = {};

    const dfsHelper = (vertex) => {
      visited[vertex] = true;
      console.log(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(startVertex);
  }

  searchVertex(vertex) {
    return this.vertices.includes(vertex);
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if (index !== -1) {
      this.vertices.splice(index, 1);
      delete this.adjacencyList[vertex];

      // Remove vertex from adjacency lists of other vertices
      for (let currentVertex in this.adjacencyList) {
        const neighbors = this.adjacencyList[currentVertex];
        const neighborIndex = neighbors.indexOf(vertex);
        if (neighborIndex !== -1) {
          neighbors.splice(neighborIndex, 1);
        }
      }
    }
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

// console.log(graph)
// console.log(graph.searchVertex('x'));
// graph.display()
// graph.bfs('C')
graph.removeVertex("C");
