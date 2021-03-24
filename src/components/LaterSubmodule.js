import React from 'react'
import './NowSubmodule'

const LaterSubmodule = (props) => {

    return(
        <div className='huskeliste-item'>
            <li>{props.choreLater}</li>
   
            <input className='btnDelete' type='button' value='X' onClick={ () => props.deleteItemLater(props.nummer)}/>
            <input className='btnNow' type='button' value='GJØR NÅ' onClick={ () => props.moveChoreToNow(props.nummer)} />

        </div>
    )
}

export default LaterSubmodule