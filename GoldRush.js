class GoldRush extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns)
    }

    moveUp(player, cordinates) {
        let newCordinates = { x: cordinates.x - 1, y: cordinates.y}
        console.log(newCordinates)
        this.alter(newCordinates.x, newCordinates.y, player)
        this.alter(cordinates.x, cordinates.y, '.')
    }

    moveDown(player, cordinates) {
        let newCordinates = { x: cordinates.x + 1, y: cordinates.y}
        console.log(newCordinates)
        this.alter(newCordinates.x, newCordinates.y, player)
        this.alter(cordinates.x, cordinates.y, '.')
    }

    moveRight(player, cordinates) {
        let newCordinates = { x: cordinates.x, y: cordinates.y + 1 }
        console.log(newCordinates)
        this.alter(newCordinates.x, newCordinates.y, player)
        this.alter(cordinates.x, cordinates.y, '.')
    }

    moveLeft(player, cordinates) {
        let newCordinates = { x: cordinates.x, y: cordinates.y - 1 }
        console.log(newCordinates)
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


}

