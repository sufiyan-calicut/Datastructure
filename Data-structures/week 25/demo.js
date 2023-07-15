class Graph{
  constructor(){
    this.vertices = []
    this.adjacencyList = {}
  }

  addVertex(vertex){
    this.vertices.push(vertex)
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex +""+[...this.adjacencyList[vertex]]);
    }
  }
}