import React from 'react'
import LaterSubmodule from './LaterSubmodule'

const Later = (props) => {
    const addChoreLater = (evt) => {
        if(evt.keyCode === 13) {
            props.addLaterItem(evt.target.value)
            evt.target.value=''
        }
    }

    return(
        <main className='now'>
            <h2 className='overskrift'>Kan gjøres senere</h2>
            <input className='inputChores' type='text' onKeyDown={addChoreLater}  placeholder='Legg til et gjøremål'  />

            {
            props.itemsLater.map(
                (choreLater, indeks) => <LaterSubmodule key={indeks} nummer={indeks} choreLater={choreLater} deleteItemLater={props.deleteItemLater} moveChoreToNow={props.moveChoreToNow}/>
            )
            }
        </main>
    )
}

export default Later