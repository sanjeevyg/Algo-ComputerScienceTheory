function towerBreakers(n, m) {

    if(n === 1) return 1
    let turn = 0;
    let ar = new Array(n).fill(m)
    let max = Math.max(...ar)

    while(max != 1) {
        let divisor = 1;
        let evenDiviser = [];
        let maxIndex = ar.indexOf(max)

        while(divisor < max) {
            if(max % divisor === 0) evenDiviser.push(divisor)
            divisor += 1
        }

        ar[maxIndex] = Math.max(...evenDiviser)
        max = Math.max(...ar)
        turn = turn + 1
        console.log(ar)
    }

    
    console.log("turn", turn)
  
    if(turn % 2 === 0) return 2
    return 1
}

// console.log(towerBreakers(2, 2))
console.log(towerBreakers(1, 4)) //2
// console.log(towerBreakers(2, 6)) //2
