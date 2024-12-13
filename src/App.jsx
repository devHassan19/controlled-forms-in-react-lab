import { useState } from 'react'
import './App.css'
import Bookshelf from './Bookshelf.jsx'

const App = () => {
  const addBook = (newBook) => {
    setBook([newBook, ...books])
  }
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf addBook={addBook} />
    </>
  )
}

export default App
