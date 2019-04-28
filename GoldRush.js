class GoldRush extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns)
        this.player1 = {
            id: 1,
            score: 0,
            cordinates: {x: 0, y: 0}
        }

        this.player2 = {
            id: 2,
            score: 0,
            cordinates: {x: 4, y: 4}
        }
    }

    addScore(player) {
        if (player === 1) {
            this.player1Score += 1
        }
        else if (player === 2) {
            this.player2Score += 1
        }

        console.log(`player ${player} scored 1 coin`)
    }

    moveUp(player, cordinates) {
        let newCordinates = { x: cordinates.x - 1, y: cordinates.y }
        // console.log(newCordinates)
        this.alter(newCordinates.x, newCordinates.y, player)
        this.alter(cordinates.x, cordinates.y, '.')
    }

    moveDown(player, cordinates) {
        let newCordinates = { x: cordinates.x + 1, y: cordinates.y }
        // console.log(newCordinates)
        if (this.get(newCordinates.x, newCordinates.y) === 'c') {
            this.addScore(player)
        }
        this.alter(newCordinates.x, newCordinates.y, player)
        this.alter(cordinates.x, cordinates.y, '.')
    }

    moveRight(player, cordinates) {
        let newCordinates = { x: cordinates.x, y: cordinates.y + 1 }
        // console.log(newCordinates)
        this.alter(newCordinates.x, newCordinates.y, player)
        this.alter(cordinates.x, cordinates.y, '.')
    }

    moveLeft(player, cordinates) {
        let newCordinates = { x: cordinates.x, y: cordinates.y - 1 }
        // console.log(newCordinates)
        this.alter(newCordinates.x, newCordinates.y, player)
        this.alter(cordinates.x, cordinates.y, '.')
    }

    movePlayer(player, direction) {
        let cordinates = this.findCoordinate(player)
        if (direction === 'up') {
            this.moveUp(player, cordinates)
        }
        else if (direction === 'down') {
            this.moveDown(player, cordinates)

        }
        else if (direction === 'right') {
            this.moveRight(player, cordinates)
        }
        else if (direction === 'left') {
            this.moveLeft(player, cordinates)
        }
    }

    generateCoins(numRows = 5, numColumns = 5) {
        let coin = 'c'

        for (let r = 1; r < numRows; r += 2) {
            for (let c = 0; c < numColumns; c++) {
                this.alter(r, c, coin)
            }
        }
    }



}

