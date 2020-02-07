import React from 'react'
import "./toolbar.css"

const Toolbar = props => (

  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo"> <a href='/'> 2TR NOW </a> </div>
        <div className='spacer'></div>
          <div className="toolbar_navigation_items">
            <ul>
              <li> <a href='/'> Home </a> </li>
              <li> <a href='/'> Home </a> </li>
            </ul>
          </div>
    </nav>
  </header>
)

export default Toolbar;