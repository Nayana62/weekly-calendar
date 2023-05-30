import React from 'react'
import searchIcon from '../icons/Search.png'
import './Planning.css'

function Planning() {
  return (
    <div>
        <div className='planning'>
            <div>
                <p>Project Planning</p>
                <p className='active'>Weekly Planning</p>
                <p>Planning Insights</p>
            </div>
            <div>
                <div>
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='search for products' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Planning