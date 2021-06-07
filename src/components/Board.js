import Row from "./Row"

//this contains the actual board
const Board = ({board, placeToken}) => {
    //get row and column size
    const col_sz = board.length;
    const row_sz = board[0].length;
    return (
        
        //allow 6vw for each cell in the row and column (cells are 6vw by 6vw by default)
        <div className='board' style={{width:`${6*row_sz}vw`, height:`${6*col_sz}vw`}}>
            {board.map((row, idx) => (
                //index can be used as key because the size and ordering of this list does not change
                <Row className='row' row={row} height={100/col_sz} placeToken={placeToken(idx)} key={idx}/>
            ))}
         </div>
    )
}

export default Board
