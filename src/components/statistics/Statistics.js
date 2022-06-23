import React from 'react'
import StatisticsItem from './StatisticsItem'
import "./statistics.css"
const Statistics =()=>{
    return (
      <div className="container statistics">
          {
              StatisticsData.map((item)=><StatisticsItem key={item.id} item={item}/>)
          }
         
      </div>
    )
}

const StatisticsData=[
    {
        id:0,
        head:"1,100",
        p:"Copies Sold"
    },
    {
        id:1,
        head:"1,200",
        p:"Copies Released"
    },
    {
        id:2,
        head:"340",
        p:"Cup of Coffee"
    },
    {
        id:3,
        head:"12,000",
        p:"Happy Readers"
    },
]

export default Statistics