function processData(input) {
    let q = []; // the queue implemented as array
    
    const r = input.split('\n') // rows
    
    let data = r.map(e => e.split(' ')) // convert to columns
    data.shift() // skip the number of queries
    
    for (let i of data) { // 
        if (i[0] === '1') q.push(i[1]) // enqueue
        else if (i[0] === '2') q.shift() // dequeue
        else console.log(q[0]) // peek
    }
}

console.log(processData())