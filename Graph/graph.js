class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = []
        return this.adjacencyList
    }

    addEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1)
        }
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2)
        }
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((ele)=> ele !== vertex2 )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((ele)=> ele !== vertex1 )
    }

    removeVertex(vertex){
        this.adjacencyList[vertex].forEach((ele)=>{
            this.removeEdge(ele, vertex)
        })
        delete this.adjacencyList[vertex]
    }
}

let G = new Graph()
G.addVertex('Tokyo')
G.addVertex("Dallas")
G.addVertex("Aspen")
G.addEdge("Dallas", "Tokyo")
G.addEdge("Dallas", "Aspen")
