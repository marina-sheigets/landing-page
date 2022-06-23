import React from 'react'
import "./services.css"
import ServiceItem from './ServiceItem'
import {data} from "./ServicesData"

export default function Services() {
  return (
    <div className="container services">
        <div className="headings">
            <h4>Services</h4>
            <h1>Services</h1>
        </div>
        <div className="services-sections">
            {
                data.map((item)=>{
                    const Icon=item.icon
                    return(
                        <ServiceItem key={item.id} Icon={Icon} data={item}/>
                    );
                })
            }
        </div>
    </div>
  )
}
