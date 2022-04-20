const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirstPrint = (graph, source) => {
    let stack = [source];
    while(stack.length > 0) {
        const current = stack.pop()
        console.log(current)

        for(let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}
// depthFirstPrint(graph, 'a')

const depthFirstPrintRecurssive = (graph, source) => {
    console.log(source)
    for(let neighbor of graph[source]) {
        depthFirstPrintRecurssive(graph, neighbor)
    }
}

// depthFirstPrintRecurssive(graph, 'a')


const breadthFirstPrint = (graph, source) => {
    let queue = [source];
    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current)

        for(let neighbor of graph[current]) {
            queue.push(neighbor) 
        }
    }
}

// breadthFirstPrint(graph, 'a')


const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}


const hasPath = (graph, src, dist) => {
    let queue = [src];

    while(queue.length > 0) {
        let current = queue.shift();
        if(current === dist) return true

        for(let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}


// console.log(hasPath(graph1, 'f', 'k'))

const hasPathRecurssive = (graph, src, dist) => {
    if(src === dist) return true 

    for(let neighbor of graph[src]) {
       if (hasPathRecurssive(graph, neighbor, dist) === true) return true
    }
    return false
}

// console.log(hasPathRecurssive(graph1, 'f', 'k'))


const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

// const graph2 = {
//     i: ['j', 'k'],
//     j: ['i'],
//     m: ['k'],
//     k: ['m', 'i', 'l'],
//     l: ['k'],
//     o: ['n'],
//     ['n']: ['o']
// }

const undirectedPath = (edges, src, dist) => {
    const graph = buildGraph(edges)
    return hasPathUn(graph, src, dist, new Set())
}


const hasPathUn = (graph, src, dist, visited) => {
    if(src === dist) return true;
    if(visited.has(src)) return false;
    visited.add(src);
    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dist, visited) === true) return true
    }
    return false
}

const buildGraph = (edges) => {
    let graph = {};
    
    for(let edge of edges) {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}


console.log(undirectedPath(edges, 'j', 'm'))