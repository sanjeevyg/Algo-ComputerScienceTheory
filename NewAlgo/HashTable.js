

class HashTable {
    constructor(size = 23) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let prime = 31;

        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total*prime + value) % this.keyMap.length;
        }
        return total
    }

    set(key, value) {
        let index = this._hash(key)
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        } 
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key)
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined
    }

    keys() {
        let ans = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!ans.includes(this.keyMap[i][j][0])) {
                        ans.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return ans
    }

    values() {
        let ans = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    ans.push(this.keyMap[i][j][1])
                }
            }
        }
        return ans
    }
}


let ht = new HashTable()
console.log(ht._hash("apple"))
console.log(ht._hash("banana"))

ht.set("apple", "45kg")
ht.set("mango", "50kg")
ht.set("banana", "51kg")

console.log(ht.get("apple"))

console.log(ht.keys())
console.log(ht.values())