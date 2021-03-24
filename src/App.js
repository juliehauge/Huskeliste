import React, {useState} from 'react'
import {Link, Router} from '@reach/router'
import './App.css'
import Now from './components/Now'
import Later from './components/Later'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          fontWeight: isCurrent ? "900" : "100"
        }
      };
    }}
  />
);

const App = (props) => {
  const huskelisteNow = ['Spise', 'Vanne blomster', 'Vaske klær']
  const [choresNow, setChoresNow] = useState (huskelisteNow)

  const huskelisteLater = ['Vaske huset', 'Handle mat', 'Besøke bestemor', 'Vaske klær']
  const [choresLater, setChoresLater] = useState (huskelisteLater)
  
  const moveChoreToLater = (nummer) => {
    const text = choresNow[nummer]
    let kopi = choresNow
    kopi.splice(nummer, 1)
    setChoresNow(kopi)
    setChoresLater([...choresLater, text])
  }
  const moveChoreToNow = (nummer) => {
    const text = choresLater[nummer]
    let kopi = choresLater
    kopi.splice(nummer, 1)
    setChoresLater(kopi)
    setChoresNow([...choresNow, text])
  }

  const deleteItemNow = (nummer) => {
    setChoresNow(
      choresNow.filter( chore => chore !== choresNow[nummer])
    )
  }
  const deleteItemLater = (nummer) => {
    setChoresLater(
      choresLater.filter( chore => chore !== choresLater[nummer])
    )
  }

  const addNowItem = (text) => {
    setChoresNow([...choresNow, text])
  }
  const addLaterItem = (text) => {
    setChoresLater([...choresLater, text])
  }

  return (
    <>
    <header>
      <nav className='navbar'>
        <NavLink activeClassName='chosen' to='/'>NÅ</NavLink>
        <div className='huskeliste-nav'>HUSKELISTE</div>
        <NavLink activeClassName='chosen' to='later'>SENERE</NavLink>
      </nav>
    </header>
    <Router>
      <Now  moveChoreToLater={moveChoreToLater} addNowItem={addNowItem} deleteItemNow={deleteItemNow} itemsNow={choresNow} path='/' />
      <Later moveChoreToNow={moveChoreToNow} deleteItemLater={deleteItemLater} addLaterItem={addLaterItem} itemsLater={choresLater} path='later' />
    </Router>
    </>
  )
}

export default App
