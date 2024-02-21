import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-container gridtable'>
            <div className='leftblock'>
                <div className='hero-content'>
                    <div className='hero-content-top'>
                        <div className='heading'>
                            <div className='line1'>Make a</div>
                            <div className='difference'>difference </div>
                            <div className='line3'> 
                              <div className='withyour'>with your</div>  
                              <div className='steps'>steps</div> 
                            </div>
                        </div>
                        <div >
                            <p className='herodescription' >Making fitness meaningful and rewarding</p>
                        </div>
                    </div>
                    <div className='hero-content-bottom'>
                        <div className='reviewrow'>
                            <div className='review'>
                            <p className='rating'>4.7 <img src="/images/star-states.png" alt="star" /></p>
                            <p className='reviewtext'>90K reviews</p>
                            </div>
                            <div className='downloadnum'>
                            <p className='million'>1 M+</p>
                            <p className='downloadtext'>Downloads</p>
                            </div>
                            <div className='charityraised'>
                            <p className='billion'>2 B+</p>
                            <p className='charitytext'>Charity raised</p>
                            </div>    
                        </div>
                        
                        <div className='button'>
                            <button> <img src="/images/google-play-store.png" alt="google-play" /> </button>
                            <button> <img src="/images/apple-app-store.png" alt="apple-app" /> </button>
                        </div>
                    </div>
                </div>   
            </div>
            <div className='rightblock'>
                <img className='rightimage' src='/Hero/rightblock.png' />
                <img className='girlph' src='/Hero/girlph.png' />
                <p className='userspeaking'>I raised ₹20 today just by walking on Impact app</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Hero
