import React, { Component } from 'react'
import './App.css'
// import Book from './Books'
import books from './books.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: books,
      moreInfo: Array(books.length).fill(false)
    }
  }
  expand (book, idx) {
    const newState = this.state.moreInfo[idx] = !this.state.moreInfo[idx]
    const info = document.querySelectorAll('#moreInfo')
    const infoButton = document.querySelectorAll('.info-button')
    if (newState === true) {
      console.log(infoButton[idx])
      infoButton[idx].innerHTML = 'Less information'
      info[idx].classList.remove('hidden')
    } else {
      infoButton[idx].innerHTML = 'More information'
      info[idx].classList.add('hidden')
    }
  }

  render () {
    const books = this.state.books
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
            <button onClick={() => this.expand(book, idx)} className='info-button' key={idx}>More information</button>
            <div className='hidden' id='moreInfo'>
              <p><span>URL</span>: <a href={book.url}>{book.url}</a></p>
              <p><span>Publisher</span>: {book.publisher}</p>
              <p><span>Publication Date</span>: {book.publicationDate}</p>
              <p><span>Full Description</span>:<br />{book.detailedDescription}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App
