import React from 'react'
import NowSubmodule from './NowSubmodule'

const Now = (props) => {
    const addChoreNow = (evt) => {
        if(evt.keyCode === 13) {
            props.addNowItem(evt.target.value)
            evt.target.value=''
        }
    }

    return(
        <main className='now'>
            <h2 className='overskrift'>Må gjøres nå</h2>
            <input className='inputChores' type='text' onKeyDown={addChoreNow}  placeholder='Legg til et gjøremål'  />

            {
            props.itemsNow.map(
                (choreNow, indeks) => <NowSubmodule key={indeks} choreNow={choreNow} nummer={indeks} deleteItemNow={props.deleteItemNow} moveChoreToLater={props.moveChoreToLater} />
            )
            }
        </main> 
    )
}

export default Now