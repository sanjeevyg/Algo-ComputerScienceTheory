function superDigit(n, k) {
    
    let sum = 0;
    for(let j = n.length - 1; j >= 0; j--) {
        sum = sum + parseInt(n[j])
    }
    
    let num = String(sum * k)
    
    if(num.length === 1) return parseInt(num)
    
    return superDigit(num, 1)

}

console.log(superDigit("1242425", 5))