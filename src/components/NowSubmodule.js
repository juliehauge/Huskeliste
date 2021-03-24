import React from 'react'
import './NowSubmodule.css'

const NowSubmodule = (props) => {
    return(
        <div className='huskeliste-item'>
            <li >{props.choreNow}</li>
           
            <button className='btnDelete' type='button' onClick={ () => props.deleteItemNow(props.nummer)}>X</button>
            <button className='btnLater' type='button' onClick={ () => props.moveChoreToLater(props.nummer)} >Gjør senere</button>

        </div>
    )
}


export default NowSubmodule