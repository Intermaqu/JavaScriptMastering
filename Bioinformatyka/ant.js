class Ant{
    constructor(startingX, startingY, matrix, maxMatchValue){
        this.X = startingX
        this.Y = startingY
        this.visited = [[startingX, startingY]]
        this.matrix = matrix
        this.maxMatchValue = maxMatchValue
    }

    getPosition(){
        console.log(`X: ${this.X}, Y: ${this.Y}`)
    }

    move(){
        let map
        for(let i = 0; i < this.matrix.length; i++){
            for(let j = 0; j < this.matrix[i].length; j++){
                if(!this.visited.includes([i,j]) && i !== j){
                    let match = this.matrix[i][j]
                    map[match] === undefined ? map[match] = [[i,j]] : map[match].push([i,j])
                }
            }    
        }
        console.table(map)
    }
}

export default Ant