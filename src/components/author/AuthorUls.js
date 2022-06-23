import React from 'react'
import { data } from './AuthorData'
export default function AuthorUls() {
  return (
    <div className="author-data">
        <ul className="quest">
            {
                data.map((elem)=><li key={elem.id}>{elem.quest}</li>)
            }
        </ul>
        <ul className="values">
            {
                data.map(elem=><li key={elem.id}>{elem.value}</li>)
            }
        </ul>
        </div>
  )
}
