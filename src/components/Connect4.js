import Board from "./Board"
import { useState } from 'react'

const Connect4 = ({rows, cols}) => {
    const [board, setBoard] = useState(new Array(cols).fill(0).map(() => new Array(rows).fill(0)));
    const [levels, setLevels] = useState(new Array(cols).fill(rows-1)); //used to track where in the 
    const [playerTurn, setPlayerTurn] = useState(true);
    const [finish]
    const findWin = (brd, row, col) =>{
      const check = (a, b, c, d) => {
        return (a!==0 && b===a && c===a && d===a)
      }
      for(let c = 0; c<cols ; c++){
        for(let r=0;r<rows;r++){
        
      }
      return 0
      }
    }
    const placeToken = (col) =>{
        return (row) => {return () =>{
                if(levels[col]<0){
                    return false
                }
                let player;
                if(playerTurn){
                    player=1;
                }
                else{
                    player=2;
                }
                setBoard(board.map((column, idx) =>(
                    idx===col ? 
                    column.map((row, idx) => (idx===levels[col] ? player : row))
                    : column
                )
                ))
                let win = findWin(board, levels[col], col);
                if(win!=0){
                    console.log(`Player ${win} wins`)
                }
                setLevels(levels.map((val,idx)=>(idx===col ? val-1 : val)))
                setPlayerTurn(!playerTurn)
            }
        }
    }
    return (
      <div>
        <Board board={board} pt={placeToken}/>
        <button onClick={()=>{
          setBoard(new Array(7).fill(0).map(() => new Array(6).fill(0)))
          setLevels(new Array(7).fill(5))
          setPlayerTurn(true)
          }}> Reset </button>
      </div>
    );
}

export default Connect4
