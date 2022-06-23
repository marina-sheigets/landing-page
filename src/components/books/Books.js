import React from 'react'
import "./books.css"
import BooksItem from './BooksItem'
import { data } from './BookData'
export default function Books() {
  return (
    <div id="books" className='container books'>
        <div className="headings">
            <h4>Projects</h4>
            <h1>My Other Books</h1>
        </div>

       <div className="images">
           {
            data.map(book=><BooksItem key={data.id} book={book}/>)
           }
       </div>
    </div>
  )
}
