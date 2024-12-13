import { useState } from 'react'

const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
])

const handleInputChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
  event.preventDefault()
  setTitle(`Your name is: ${formData.firstName} ${formData.lastName}`)
  setFormData({ firstName: '', lastName: '' })
}

;<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name: </label>
      <input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name: </label>
      <input
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button type="submit">Submit your name</button>
    </form>
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
