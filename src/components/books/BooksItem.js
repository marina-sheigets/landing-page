import React from 'react'

export default function BooksItem({book}) {
  return (
    <div className="image" style={{ background: `url(${book.href}) no-repeat center`}}>
        <div className="overlay"> 
          <div className="text">
            <a href="#books">{book.name}</a>
            <h5>{book.genre}</h5> 
            </div>
        </div>   
    </div>
  )
}
