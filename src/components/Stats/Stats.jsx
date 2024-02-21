import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div className='stats'>
        <div className='statsbox'>
            <div className='statscontent' >
                <p className='number'>2.81 <p className='amount'>Million+</p></p>
                <p className='purpose'>Changemakers</p>
            </div>
            <div className='statscontent' >
                <p className='number'>2.72 <p className='amount'>Billion+</p></p>
                <p className='purpose'>Charity raised</p>
            </div>
            <div className='statscontent' >
                <p className='number'>3.72 <p className='amount'>Trillion+</p></p>
                <p className='purpose'>steps taken</p>
            </div>
            
        </div>
        <div className='map'>
            <img src='/stats/map.png' />
        </div>
      
    </div>
  )
}

export default Stats
