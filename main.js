const renderer = new Renderer()
const board = new GoldRush(5, 5)
board.alter(0, 0, 1)
board.alter(4, 4, 2)
board.print() //the print method should be defined inside of Matrix
//prints
// 1       .       .       .       .
// .       .       .       .       .
// .       .       .       .       .
// .       .       .       .       .
// .       .       .       .       2

board.movePlayer(1, "right") //this method should be defined inside of GoldRush
board.print()
// //prints
// // .       .       .       .       .
// // 1       .       .       .       .
// // .       .       .       .       .
// // .       .       .       .       .
// // .       .       .       .       2

// board.movePlayer(2, "left")
// board.print()
// //prints
// // .       .       .       .       .
// // 1       .       .       .       .
// // .       .       .       .       .
// // .       .       .       .       .
// // .       .       .       2       .
