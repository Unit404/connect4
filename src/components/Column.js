import Cell from './Cell'
const Column = ({column,  placeToken, k}) => {
    const int2clr = (n) => {
        if(n===0){
            return 'grey'
        } else if(n===1){
            return 'yellow'
        } else{
            return 'red'
        }
    }
    console.log(column)
    return (
        <div className='column'>
            {column.map((val, idx) => (<div className='cell' style={{backgroundColor:int2clr(val)}} key={idx} onClick={placeToken(idx)}/> ))}
        </div>
    )
}

export default Column
