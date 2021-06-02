import {useState } from 'react'

const Cell = ({color}) => {

    return (
        <div>
            <div className='cell' style={{backgroundColor:color}}/>
        </div>
    )
}

export default Cell
