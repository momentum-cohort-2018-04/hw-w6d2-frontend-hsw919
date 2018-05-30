import React, { Component } from 'react'
import './App.css'
// import Book from './Books'
import books from './books.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      moreInfo: false,
      books: books
    }
  }
  expand (book) {
    this.state.books.forEach(book => {
      this.setState({
        moreInfo: !this.state.moreInfo
      })
    })
  }

  render () {
    // console.log(this.state.books)
    console.log(this.state.moreInfo)
    const books = this.state.books
    // console.log(books)
    return (
      <div className='App'>
        {books.map((book, idx) => (
          <div key={idx} className='book'>
            <h1 className='book__title'>{book.title}</h1>
            <h3 className='book__author'>{book.author}</h3>
            <p className='book__shortDesc'>{book.shortDescription}</p>
            <div className='img-container'>
              <img className='book__img' src={book.coverImageUrl} />
            </div>
            <h4 onClick={() => this.expand(book)} className=''>More information</h4>
          </div>
        ))}
      </div>
    )
  }
}

export default App
