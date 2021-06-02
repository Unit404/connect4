import Column from "./Column"
import { useState } from 'react'

const Board = ({board, pt}) => {
   
    return (
        
        <div className='board'>
            {board.map((col, idx) => (
                <Column column={col} placeToken={pt(idx)} k={idx} key={idx}/>
            ))}
         </div>
    )
}

export default Board
