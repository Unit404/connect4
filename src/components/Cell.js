
const Cell = ({color, placeToken, width}) => {

    return (
        <div className='cell' style={{backgroundColor:color, width:`${width}%`}} onClick={placeToken}/>
    )
}

export default Cell
