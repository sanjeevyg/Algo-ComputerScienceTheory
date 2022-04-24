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

// console.log(undirectedPath(edges, 'j', 'm'))

let graph3 = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;
    for(let node in graph) {
        if (explore(graph, node, visited) === true) {
            count++
        }
    }
    return count
}

const explore = (graph, current, visited) => {
    if(visited.has(String(current))) return false
    visited.add(String(current))
    for(let neighbor of graph[current]) {
        explore(graph, neighbor, visited)
    }
    return true
}

// console.log(connectedComponentsCount(graph3))

let graph4 = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['3', '4'],
    4: ['3', '2']
}

const largestComponent = (graph) => {
    let visited = new Set();
    let largest = 0;
    for(let node in graph) {
        let size = exploreNode(graph, node, visited)
        if (size > largest) {
            largest = size
        }
    }
    return largest
}

const exploreNode = (graph, node, visited) => {
    if(visited.has(node)) return 0
    let size = 1;
    visited.add(node)
    for(let neighbor of graph[node]) {
        size += exploreNode(graph, neighbor, visited)
    }
    return size
}

// console.log(largestComponent(graph4))

const edges1 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph1(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while(queue.length > 0) {
        const [current, distance] = queue.shift();

        if(current === nodeB) return distance;

        for(let neighbor of graph[current]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push([neighbor, distance + 1])
            }
        }
    }
    return -1 
}

const buildGraph1 = (edges) => {
    let graph = {};

    for(let edge of edges) {
        let [a, b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)
    }
   return graph
}

// console.log(shortestPath(edges1, 'w', 'z'))

// console.log(buildGraph(edges1))

let grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
]

const isLandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < grid.length; r+= 1) {
        for(let c = 0; c < grid[0].length; c+= 1) {
            if(exploreGrid(grid, r, c, visited) === true) {
                count += 1
            }
        }
    }
    return count;
}

const exploreGrid = (grid, r, c, visited) => {
    const rowBound = 0 <= r && r < grid.length;
    const columnBound = 0 <= c && c < grid[0].length;
    if(!rowBound || !columnBound) return false;

    if(grid[r][c] === 'W') return false;

    const pos = r + ',' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);

    exploreGrid(grid, r - 1, c, visited);
    exploreGrid(grid, r + 1, c, visited);
    exploreGrid(grid, r, c - 1, visited);
    exploreGrid(grid, r, c + 1, visited);

    return true
}


console.log(isLandCount(grid))


const minimumIsland = (grid) => {
    const visited = new Set();
    let minimum = Infinity;

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            let size = exploreMin(grid, r, c, visited)
            if( size > 0 && size < minimum)  {
                minimum = size
            }
        }
    }

    return minimum
}

const exploreMin = (grid, r, c, visited) => {
    const rowBount = 0 <= r && r < grid.length;
    const columnBount = 0 <= c && c < grid[0].length;
    if(!rowBount || !columnBount) return 0;

    if(grid[r][c] === 'W') return 0;

    const pos = r + ',' + c
    if(visited.has(pos)) return 0;
    visited.add(pos)

    let size = 1;

    size += exploreMin(grid, r - 1, c, visited)
    size += exploreMin(grid, r + 1, c, visited)
    size += exploreMin(grid, r, c -1, visited)
    size += exploreMin(grid, r, c + 1, visited)

    return size; 
}


console.log(minimumIsland(grid))