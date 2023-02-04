import React from 'react'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="title">
        Portfolio
      </div>
      <hr />
      <div className="content">These are the projects which are done by using front end technologies</div>
      <div className="elements">
        <ul id ='portfolio-flters'>
        <li data-filter='*' className='filter-all'>All</li>
        <li data-filter='filter-app'>App</li>
        <li data-filter='filter-card'>Card</li>
        <li data-filter='filter-web'>Web</li>
        </ul>
      </div>
    </div>
  )
}

export default Portfolio