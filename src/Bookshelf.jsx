import React, { useState } from 'react'

const Bookshelf = ({ addBook }) => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
  ])

  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  })

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks((prevBooks) => [...prevBooks, newBook])
    setNewBook({ title: '', author: '' })
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            className="input"
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <h6> by {book.author}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf
