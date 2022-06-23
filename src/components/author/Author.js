import React from 'react'
import "./author.css"
import AuthorUls from './AuthorUls'


export default function Author() {
  return (
    <div id="author" className="container author">
        <div className="author-photo">
        </div>
        <div className="author-info">
            <div className="author-headings">
                <h4>Know More About The Author</h4>
                <h1>Franklin Henderson</h1>
            </div>
            <div className="biography-details">
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <AuthorUls/>
                <div className="author-button">
                <button className="view-all hover"><span>120</span> View All Books</button>

                </div>
            </div>
        </div>
    </div>
  )
}
