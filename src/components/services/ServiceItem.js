import React from 'react'


export default function ServiceItem({data,Icon}) {

  return (
    <section className="service-item">
        <Icon className="icon"/>
        <h3>{data.h}</h3>
        <hr />
        <p>{data.p}</p>
    </section>
  )
}
