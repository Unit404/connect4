import Cell from './Cell'
const Row = ({row,  placeToken, height}) => {
    //function that maps an integer to a color
    const int2clr = (n) => {
        if(n===2){
            return 'red'
        } else if(n===1){
            return 'yellow'
        } else {
            return 'grey'
        }
    }
    return (
        //the height depends on the number of cells in a row, meaning we need to dynamically size this
        <div className='row' style={{height:`${height}%`}} >
            {row.map((val, idx) => (<Cell className='cell' width={100/row.length} color={int2clr(val)} key={idx} placeToken={placeToken(idx)}/> ))}
        </div>
    )
}

export default Row
