const hash = (key, size) => {
    let hashedkey = 0;
    for(let i = 0; i < key.length; i++) {
        hashedkey = key.charCodeAt(i)
    }
    return hashedkey % size
}

class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = Array(this.size)

        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }


    insert(key, value) {
        let idx = hash(key, this.size)
        this. buckets[idx].set(key, value)
    }


    remove(key) {
        let idx = hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return deleted
    }

    search(key) {
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)
    }
}


const hashTable = new HashTable()

hashTable.insert('Messi', "751 goals")
hashTable.insert('Ronaldo', "800 goals")
hashTable.insert('Pele', "733 goals")
hashTable.insert('Maradona', "250 goals")
hashTable.insert('Gerd Muller', "566 goals")

console.log(hashTable)

