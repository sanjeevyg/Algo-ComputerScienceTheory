function gridChallenge(grid) {
    if(grid.length === 1) return "YES";
    let ar = grid.map(row => row.split("").sort())
    
    for(let i = 0; i < ar[0].length; i++) {
        let min = - Infinity;
        for(let j = 0; j < ar.length; j++) {
            let ascmi = ar[j][i].charCodeAt();
            if(ascmi > min || ascmi === min)  {
                min = ascmi
            } else {
                return "NO"
            }
        }
    }
    return "YES";
}


console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))
console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']))
console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv']))
console.log(gridChallenge(['ppp', 'ypp', 'wyw']))
console.log(gridChallenge(['lyivr','jgfew','uweor','qxwyr', 'uikjd']))
