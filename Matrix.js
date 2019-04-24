class Matrix {
    constructor(numRows, numColumns) {
        this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        this.matrix = []
        let dot = '.'
    
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(dot)
            }
        }
    }

    printSeperate(){
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                console.log(this.matrix[i][j])
            }
        }
    }

    get(rowNum, colNum){
        return this.matrix[rowNum][colNum]
    }
        
    print(){
        for(let i = 0; i<this.matrix.length; i++){
            let line = ""
            for(let j = 0; j<this.matrix[i].length; j++){
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
        console.log('__________')
    }
    
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    

    alter(r, c, v) {
        this.matrix[r][c] = v
    }

    findCoordinate(value){
        let obj = {}
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return obj = { x: j, y: i }
                }
            }
        }
    }
    
}

