import React from 'react'

const StatisticsItem =({item})=> {
    return (
      <div className="stats-item">
          <h3 className="h3-stats">{item.head}</h3>
          <p className="p-stats">{item.p}</p>
      </div>
    )
}


export default StatisticsItem