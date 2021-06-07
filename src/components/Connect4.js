import Board from "./Board"
import { useState } from 'react'

const Connect4 = ({rows, cols}) => {
    //the state of the board
    const [board, setBoard] = useState(new Array(rows).fill(0).map(() => new Array(cols).fill(0)));
    const [levels, setLevels] = useState(new Array(cols).fill(rows-1)); //used to track where in the column to place a token
    const [playerTurn, setPlayerTurn] = useState(true);
    const [finish, setFinish] = useState(false);
    const findWin = (brd, row, col) =>{

      //The following functions are to be used to check for wins
      //currently they do nothing
      const check = (a, b, c, d) => {
        return (a!==0 && b===a && c===a && d===a)
      }
      const checkDR = (r, c) => check(brd[r][c], brd[r+1][c+1], brd[r+2][c+2], brd[r+3][c+3])
      const checkDL = (r, c) => check(brd[r][c], brd[r+1][c-1], brd[r+2][c-2], brd[r+3][c-3])
      const checkR = (r, c) => check(brd[r][c], brd[r][c+1], brd[r][c+2], brd[r][c+3])
      const checkD = (r, c) => check(brd[r][c], brd[r+1][c], brd[r+2][c], brd[r+3][c])
      return 0
    }
    const placeToken = (row_idx) =>{
        return (col_idx) => {
                return () =>{
                    //if we click on a filled in cell or the column is full, do nothing
                    if(levels[col_idx]<0 || row_idx > levels[col_idx]){
                        return 0;
                    }

                    
                    let player = playerTurn ? 1 : 2;

                    //update the board by setting the correct cell to have the value of the current turn
                    setBoard(board.map((row, idx) =>(
                        idx===levels[col_idx] ? 
                        row.map((col, idx) => (idx===col_idx ? player : col))
                        : row
                    )))

                    //update the levels state to accoutn for new cell
                    setLevels(levels.map((val,idx)=>(idx===col_idx ? val-1 : val)))

                    //toggle turn
                    setPlayerTurn(!playerTurn)
            }
        }
    }
    //reset  all states to their initial state
    const reset = () => {
        setBoard(new Array(rows).fill(0).map(() => new Array(cols).fill(0)))
        setLevels(new Array(cols).fill(rows-1))
        setPlayerTurn(true)
        setFinish(false)
    }
    return (
      <div>
        <Board board={board} placeToken={placeToken}/>
        <button onClick={reset}> Reset </button>
      </div>
    );
}

export default Connect4
