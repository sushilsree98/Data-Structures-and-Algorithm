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
            this.adjacencyList[vertex2].push(vertex1);
        }
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
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

    DFSRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    dfs(neighbor)
                }
            });
        })(start)
        return result;
    }

    DFSIterative(start){
        const result = [];
        const visited = {};
        const stack = [start];
        visited[start] = true
        let currentVertex;
        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
}

let G = new Graph()
G.addVertex('A')
G.addVertex("B")
G.addVertex("C")
G.addVertex("D")
G.addVertex("E")
G.addVertex("F")
G.addEdge("A", "B")
G.addEdge("A", "C")
G.addEdge("B", "D")
G.addEdge("C", "E")
G.addEdge("D", "E")
G.addEdge("D", "F")
G.addEdge("E", "F")
